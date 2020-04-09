/*
Copyright 2019 Dave Weilert

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*----------------------------------------------------------
 Course related functions
*/

"use strict"

let fs = require('fs');

let cwd = process.cwd();
let templateConfig = cwd + '/configTemplate.json';
let teamsFile = cwd + '/teams.json';
let outputDir = cwd + '/deployment/fileout';
let templateDir = cwd + '/templates';
let config = '';
let teams = [];
let instructorPort = 31000;
let instructorUrl = 'http://dashboard.default';
let instructorNamespace = 'default';
let repoName = 'docker.io/ibmicpcoc';
let sPort = 31001;
let bldReport = [];
let studentIP;
let ipArray;
let masterIP;
let adminPswd = 'admin';
let adminUser = 'admin';
let version = 'latest';
let currentTeam = '';
let routeHost = '';
let nfs = '';


function logMsg(msg) {
	let output = new Date().toLocaleString() + ' :: ' + msg;
    // write to console
    console.log(output);
}


function buildDir(what) {
    let dir = what;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        logMsg('genrC056 - Created directory: ' +  dir);
    } else {
        logMsg('genrC057 - Located directory: ' +  dir);
    }
}


function getFile(f) {
    let buff = '';
    try {
        //logMsg('genrG010 - Reading file: ' + f);
        buff = fs.readFileSync(f, {"encoding": "utf8"})
    } catch(err) {
        if (err.errno === -2) {
            logMsg('genrG015 - Did not find file: ' + f)
        } else {
            logMsg('genrG020 - Error reading file ' + f + ', error message: ' + err);
        }
        buff = '';
    } 
    return buff;
};


function readTemplateDirectory() {
    let files = fs.readdirSync(templateDir);
    return files;
};

    
function buildYaml() {
    buildConfig();
    buildTeams();
    let files = readTemplateDirectory();
    files.forEach(function(file) {
        try {
            //if (file.endsWith('.tmpl') ) {
                //logMsg('genrG050 - Located template file: ' + file);
                processFile(file);
            //}
        } catch(err) {
            console.log('error ' + err)
        }
    });
    console.log('\n------------------\n' +  'Port  : Team' + '\n------------------')

    for (let b = 0; b < bldReport.length; b++) {
        console.log(bldReport[b]);
    }
    console.log(' ');

    console.log('-------------------------------------------------------------------');
    console.log('-- sshkey file for target environment be in this directory ');
    console.log('-- or std_* shells are configured to use okdadmin user and password ');
    console.log('-- Add team member to Master and all Student servers ');
    console.log('-------------------------------------------------------------------');
    console.log(' ');
    console.log(' ');
    console.log('      Commands that MUST be executed to setup the environment and team users.');
    console.log('      Note 1: Example commands assume output files are in the ./deployment/fileout directory');
    console.log('      Note 2: Some commands are shown with a required IP address parameter');
    console.log(' ');
    console.log(' ');
    console.log('-- Add users to the linux system(s)');
    console.log(cwd + '/fileout/std_00_host_users.sh ' + masterIP);
    for (let s = 0; s < ipArray.length; s++) {
        console.log(cwd + '/fileout/std_00_host_users.sh ' + ipArray[s].trim());
    }
    
    console.log(' ');
    console.log('-- Add users to htpasswd file on Master Node for access to the cluster');
    console.log(cwd + '/fileout/std_01_htpasswd_users.sh ' + masterIP);
    
    console.log(' ');
    console.log(' ');
    console.log('-- Login using the oc command');
    console.log('oc login https://' + masterIP + ':8443 -u admin -p admin --insecure-skip-tls-verify=false ');
    
    console.log(' ');
    console.log(' ');
    console.log('-- Define user access:  add-cluster-role-to-user cluster-admin ');
    console.log(cwd + '/fileout/std_02_oc_users.sh ' + masterIP);
    
    console.log(' ');
    console.log(' ');
    console.log('-- Setup NFS directories for each team on all Student server(s)');
    for (let s = 0; s < ipArray.length; s++) {
        console.log(cwd + '/fileout/std_03_nfs_dirs.sh ' + ipArray[s].trim());
    }
    console.log(' ');
    console.log(' ');
    console.log('-- Chmod NFS directories and permissions for each team on all Student server(s)');
    for (let s = 0; s < ipArray.length; s++) {
        console.log(cwd + '/fileout/std_04_chmod_dirs.sh ' + ipArray[s].trim());
    }
    console.log(' ');
    console.log(' ');
    console.log('-- Enable and Start docker on all Student server(s)');
    for (let s = 0; s < ipArray.length; s++) {
        console.log(cwd + '/fileout/std_05_docker_enable.sh ' + ipArray[s].trim());
    }
    console.log(' ');
    console.log(' ');
    console.log('-- Add teams to access docker on all Student server(s)');
    for (let s = 0; s < ipArray.length; s++) {
        console.log(cwd + '/fileout/std_06_docker_users.sh ' + ipArray[s].trim());
    }
}


//
// read the config file and get the template replacement value
//
function buildConfig() {
    let tmpConfig =  getFile(templateConfig);
    let stop = false;
    if (tmpConfig.length > 0 ) {
        try {
            config = JSON.parse(tmpConfig);
            tmpConfig = null;
            logMsg('genrG108 ');
            logMsg('genrG110 - ---------------------------------------------------------');
            logMsg('genrG109 - Parameters that will be used in generation process');
            logMsg('genrG110 - ---------------------------------------------------------');
            if (typeof config.version === 'undefined') {
                logMsg('genrG111 - Parameter version is not defined, using default: ' + verison);
            } else {
            	version = config.version;
                logMsg('genrG211 - Parameter version                   : ' + version);
            }

            if (typeof config.instructorNamespace === 'undefined') {
                logMsg('genrG111 - Parameter instructorNamespace is not defined, using default: ' + instructorNamespace);
            } else {
                instructorNamespace = config.instructorNamespace
                logMsg('genrG211 - Parameter instructorNamespace       : ' + instructorNamespace);
            }

            if (typeof config.repoName === 'undefined') {
                logMsg('genrG112 - Parameter repoName is not defined, using default: ' + repoName);
            } else {
                repoName = config.repoName;
                logMsg('genrG212 - Parameter repoName                  : ' + config.repoName);
            }            

            if (typeof config.instructorUrl === 'undefined') {
                logMsg('genrG113 - Parameter instructorUrl is not defined, using default: ' + instructorUrl);
            } else {
                instructorUrl = config.instructorUrl;
	            logMsg('genrG213 - Parameter instructorUrl             : ' + config.instructorUrl);
            }
            
            if (typeof config.instructorPort === 'undefined') {
                logMsg('genrG114 - Parameter instructorPort is not defined, using default: ' + instructorPort);
            } else {
                let iPort = parseInt(config.instructorPort, 10);
                instructorPort = iPort;
                logMsg('genrG214 - Parameter instructorPort            : ' + instructorPort);            	
            }

            if (typeof config.studentPort === 'undefined') {
                logMsg('genrG115 - Parameter studentPort is not defined, using default: ' + sPort);
            } else {
                let port = parseInt(config.studentPort, 10);
                sPort = port;
                logMsg('genrG215 - Parameter studentPort               : ' + sPort);
            }

            if (typeof config.outputDir === 'undefined') {
                logMsg('genrG116 - Parameter outputDir is not defined, using default: ' + outputDir);
            } else {
                outputDir  = config.outputDir;
                if (outputDir.startsWith("/")) {
                    // nothing
                } else {
                    outputDir =  cwd + '/' + outputDir;
                }
                logMsg('genrG216 - Parameter outputDir                 : ' + outputDir);
            }

            if (typeof config.templateDir === 'undefined') {
                logMsg('genrG117 - Parameter templateDir is not defined, using default: ' + templateDir);
            } else {
                templateDir  = config.templateDir;
                if (templateDir.startsWith("/")) {
                    // nothing
                } else {
                    templateDir =  cwd + '/' + templateDir;
                }
                logMsg('genrG217 - Parameter templateDir               : ' + templateDir);
            }

            if (typeof config.teamsFile === 'undefined') {
                logMsg('genrG118 - Parameter teamsFile is not defined, using default: ' + teamsFile);
            } else {
                teamsFile  = config.teamsFile;
                if (teamsFile.startsWith("/")) {
                    // nothing
                } else {
                    teamsFile =  cwd + '/' + teamsFile;
                }
                logMsg('genrG218 - Parameter teamsFile                 : ' + teamsFile);
            }

            if (typeof config.adminUser === 'undefined') {
                logMsg('genrG119 - Parameter adminUser is not defined, using default: ' + adminUser);
            } else {
                adminUser  = config.adminUser;
                logMsg('genrG219 - Parameter adminUser                 : ' + adminUser);
            }

            if (typeof config.adminPswd === 'undefined') {
                logMsg('genrG120 - Parameter adminPswd is not defined, using default: ' + adminPswd);
            } else {
                adminPswd  = config.adminPswd;
                logMsg('genrG220 - Parameter adminPswd                 : ' + adminPswd);
            }

            if (typeof config.masterIP === 'undefined') {
                logMsg('genrG121 - Parameter masterIP is not defined');
                stop = true;
            } else { 
                masterIP  = config.masterIP;
                logMsg('genrG222 - Parameter masterIP                  : ' + masterIP);
            }

            if (typeof config.studentIP === 'undefined') {
                logMsg('genrG123 - Parameter studentIP is not defined');
                stop = true;
            } else {
                studentIP  = config.studentIP;
                logMsg('genrG223 - Parameter studentIP                 : ' + studentIP);
                ipArray = studentIP.split(',');
                for (let s = 0; s < ipArray.length; s++) {
                    logMsg('genrG224 - Parameter studentIP[' + s + ']              : ' + ipArray[s].trim());
                }
            }

            if (typeof config.nfs === 'undefined') {
                logMsg('genrG125 - Parameter nfs is not defined, no default will be defined');
            } else {
                nfs  = config.nfs;
                logMsg('genrG225 - Parameter nfs                       : ' + nfs);
            }


            if (typeof config.routeHost === 'undefined') {
                logMsg('genrG126 - Parameter routeHost is not defined and is required');
                stop = true;
            } else {
                routeHost  = config.routeHost;
                logMsg('genrG226 - Parameter routeHost                 : ' + routeHost);
            }


            if (stop) {
                logMsg('genrG110 - ---------------------------------------------------------');
                logMsg('genrG114 - Terminating process, fix config file errors and retry');
                logMsg('genrG110 - ---------------------------------------------------------');
                process.exit(-1);
            } else {
                logMsg('genrG110 - ---------------------------------------------------------');
                logMsg('genrG115 - All required config parameters processed');
                logMsg('genrG110 - ---------------------------------------------------------');
            }

            // Build the output directory if it does not exist
            buildDir(outputDir);

        } catch(err) {
            logMsg('genrG100 - Unable to process config file: ' + templateConfig + ' message: ' + err);
            process.exit(-1);
        } 
    }
}


//
// read the teams file and get team names
//
function buildTeams() {
    let tmpTeam =  getFile(teamsFile);
    let tCnt = 0;
    if (tmpTeam.length > 0 ) {
        try {
            tmpTeam = JSON.parse(tmpTeam);
            if (typeof tmpTeam.teams !== 'undefined') {
                let obj = tmpTeam.teams;
                for (var key in obj) {
                    teams.push(key)
                    tCnt++;
                }
                obj = null;
                tmpTeam = null;
                logMsg('genrG120 - Successfully located ' + tCnt + ' teams');
            } else {
                logMsg('genrG122 - Invalid teams file, missing teams parameter');
                process.exit(-1);
            }
        } catch(err) {
            logMsg('genrG121 - Unable to process teams file: ' + teamsFile + ' message: ' + err);
            process.exit(-1);
        } 
    }
}


//
// read the template file and replace located varialbles
//
function processFile(file) {
    let buff = getFile(templateDir + '/' + file);
    let loop = buff.indexOf('{{team}}');
    let tmpl = file.indexOf('.tmpl.')
    if (tmpl === -1) {
    	logMsg('genrG401 - Skipped file: Not defined as a template file (.tmpl.)' + file);
    	return;
    }
    let newf_p1 = file.substring(0, tmpl)
	let newf_p2 = file.substring(tmpl + 5);
	let outfile = outputDir + '/' + newf_p1 + newf_p2;
    let outData = '';
    let team = '';
    let newData = [];
    let teamMsg = '';
    let teamCnt = 0;

    try {
        // clear the var
        outData = '';
        // Write the new html file to the coursecatalog directory
        let lines = buff.split('\n');
        if (loop > -1) {
            for (var t = 0; t < teams.length; t++) {
                team = teams[t];
                currentTeam = team;
                if (t === 0) {
                    outData = parseLines(lines,team);
                } else {
                    teamCnt = t + 1;
                    teamMsg = ' with ' + teamCnt + ' teams'
                    newData = parseLines(lines,team);
                    for (var i = 0; i < newData.length; i++) {
                        outData.push(newData[i]);
                    }
                }
            }
        } else {
            outData = parseLines(lines,''); 
        }

        // convert to buffer
        let result = toBuffer(outData);
        fs.writeFileSync(outfile, result);
        logMsg('genrG205 - Created file: ' +  outfile + teamMsg);

    } catch(err) {
        console.log(err);
    }
};


function parseLines(lines, team) {
    let rtn = [];
    let tmp;
    for (var l = 0; l < lines.length; l++) {
        tmp = ripLine(lines[l], team);
        rtn.push(tmp);
    }
    return rtn;
}


function ripLine(line, team) {
    let loop = true;
    let newline = line;
    let pline = '';
    let rCnt = 0;

    // check for double curly brackets
    while (loop === true) {
        if (newline.indexOf('{{') > -1) {
            pline = doubleBracketsParse(newline, team);
            if (pline !== null) {
                newline = pline;
                rCnt++;
            } else {
                loop = false;
            }
        } else {
            loop = false;
        }
    }

    if (pline === '') {
        pline = line;
    }
    return pline;
}


//------------------------------------------------------------------------------
// Parse {{ }} or { } brackets
//------------------------------------------------------------------------------
function doubleBracketsParse(data, team) {
    let fb;
    let lb;
    let key = '';
    let newdata = '';
    fb = data.indexOf('{{');
    lb = data.indexOf('}}');
    key = data.substring(fb + 2, lb);
    key = key.trim();
    if (key === 'team') {
        newdata = data.substring(0, fb) + team + data.substring(lb + 2);
        return newdata
    } else {
        if (typeof config[key] !== 'undefined') {
            if (key === 'studentPort') {
                newdata = data.substring(0, fb) + sPort + data.substring(lb + 2);
                bldReport.push(sPort + ' : ' + team);
                sPort++;
            } else {
                newdata = data.substring(0, fb) + config[key] + data.substring(lb + 2);
            }
            
            return newdata;
        } else {
            logMsg('genr7000w - Global parameter: ' + key + ' was not located');
            return null;
        }
    }
};

function toBuffer(data) {
    var newArray = [];
    var hl = data.length;
    var buff = '';
    for (let c = 0; c < hl; c++) {
        newArray.push(data[c] + '\n');
    }
    // rebuild the buff
    if (newArray.length > 0) {
        buff = newArray.join("");
        newArray = null;
        return buff;
    } else {
        return null;
    }
}



//------------------------------------------------------------------------------
// common routines
//------------------------------------------------------------------------------
buildYaml();