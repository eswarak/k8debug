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

//------------------------------------------------------------------------------
// Require statements
//------------------------------------------------------------------------------
const request = require('request');
const uuidV4 = require('uuid/v4');
const fs = require('fs');

let ZAN = 'magma';
let ZNS = 'Student';
let app_name = 'UNKNOWN';
let app_namespace = 'Unknown';
let url_collector = 'Unknown';
let url_instructor = 'Unknown';

let random = uuidV4();
let count = 0;
let icount = 0;

const configFile = "/var/config/config.txt";
const secretFile = "/var/secret/secret.txt";

// start message
console.log(new Date().toLocaleString() + ' :: ' + 'magm001i - Application random key: ' + random)

// print and get environment variables
//console.log(new Date().toLocaleString() + ' :: ' + 'magm002i - Local environment variables:')
//console.log(JSON.stringify(process.env,null,4));

let localVars = process.env;

// namespace - this should be a color, if missing set to balck
if (typeof localVars.APP_NAMESPACE !== 'undefined') {
    app_namespace = localVars.APP_NAMESPACE;
} else {
    app_namespace = ZNS;
}
console.log(new Date().toLocaleString() + ' :: ' + 'magm003i - Environment APP_NAMESPACE: ' + app_namespace);

// app - should be the name of the pod, else generate random value
if (typeof localVars.APP_NAME !== 'undefined') {
    app_name = localVars.APP_NAME;
} else {
    app_name = ZNS + '-' + ZAN + '-' + random;
}
console.log(new Date().toLocaleString() + ' :: ' + 'magm004i - Environment APP_NAME: Using random key = ' + app_name);

// url of where the data is being sent, if missing send to local host
if (typeof localVars.COLLECTOR_CONFIG !== 'undefined') {
    url_collector = localVars.COLLECTOR_CONFIG;
} else {
    url_collector = 'http://localhost:3000';
}
console.log(new Date().toLocaleString() + ' :: ' + 'magm013i - Environment COLLECTOR_CONFIG: ' + url_collector);

// url of where the data is being sent to instructor, if missing send to local host
if (typeof localVars.INSTRUCTOR_CONFIG !== 'undefined') {
    url_instructor = localVars.INSTRUCTOR_CONFIG;
} else {
    url_instructor = 'http://localhost:4200';
}
console.log(new Date().toLocaleString() + ' :: ' + 'magm014i - Environment INSTRUCTOR_CONFIG: ' + url_instructor);


function checkForFiles() {
    try {

		let config = "nf";
		let secret = "nf";
		let skip = false;

		if( fs.existsSync(configFile) ) {
			config = fs.readFileSync(configFile);
		}
		if( fs.existsSync(secretFile) ) {
			secret = fs.readFileSync(secretFile);
		}

        if (config === 'nf') {
            console.log(new Date().toLocaleString() + ' :: ' + 'magm110e - Config file is missing')
            skip = true;
        } else {
            // check file contents 
            config = config.toString();
            if (config.startsWith('debug') ) {
                //
            } else {
                console.log(new Date().toLocaleString() + ' :: ' + 'magm113e - Config file contents are wrong, found: ' + config)
                skip = true;
            }
            
        }


        if (secret === 'nf') {
            console.log(new Date().toLocaleString() + ' :: ' + 'magm111e - Secret file is missing')
            skip = true;
        } else {
            secret = secret.toString();
            if (secret.startsWith('debug me') ) {
                //
            } else {
                console.log(new Date().toLocaleString() + ' :: ' + 'magm114e - Secret file contents are wrong, found: ' + secret)
                skip = true;
            }
        }
        
        if (skip === false) {
            console.log(new Date().toLocaleString() + ' :: ' + 'magm115i - All OK');
            success();
        } else {
            process.exit(1)
        }

    } catch(err) {
        console.log(err)
    }
}

//------------------------------------------------------------------------------
// Tell the collector server we are here
//------------------------------------------------------------------------------
// 
function informStudent(url, callback) {
    let uri = url + '/status/' + app_namespace + '/' + app_name;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        } else {
            console.log(new Date().toLocaleString() + ' :: magm011e - Error telling student count: ' + count + ' message: ' + error );
        }
        callback(res);
    });
}

function tellStudent() {
    count++;
    informStudent(url_collector, function(resp){
        if (resp.startsWith('Got') ) {
	        console.log(new Date().toLocaleString() + ' :: magm007i - Student count: ' + count + ' for : /'+ app_namespace + '/' + app_name);
        }
    });
}

// tell the collector server we are here
function informInstructor(url, callback) {
    let uri = url + '/status/' + app_namespace + '/' + app_name;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        } else {
        	console.log(new Date().toLocaleString() + ' :: magm012e - Error telling instructor count: ' + icount + ' message: ' + error);
        }
        callback(res);
    });
}

function tellInstructor() {
	icount++;
    informInstructor(url_instructor, function(resp){
        if (resp.startsWith('Got') ) {
            icount++;
            console.log(new Date().toLocaleString() + ' :: magm010i - Instructor count: ' + icount + ' for /'+ app_namespace + '/' + app_name);
        }
    });
}

function success() {
    // time interval loop
    let startInformStudent = setInterval(tellStudent, 5000);
    console.log(new Date().toLocaleString() + ' :: magm011i - Initial reporting to student');
    tellStudent();
    // time interval loop
    let startInformInstructor = setInterval(tellInstructor, 15000);
    console.log(new Date().toLocaleString() + ' :: magm012i - Initial reporting to instructor');
    tellInstructor();
    
}

checkForFiles();