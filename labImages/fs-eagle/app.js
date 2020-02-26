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
// Software version
//------------------------------------------------------------------------------
let softwareVersion = '1.0.0';
let myname = 'WebMe';

//------------------------------------------------------------------------------
// Require statements
//------------------------------------------------------------------------------
let fs = require('fs-extra');
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let bodyParser = require('body-parser');
let commandLineArgs = require('command-line-args');
let commandLineUsage = require('command-line-usage');
let chalk = require('chalk');
let cors = require('cors');
let request = require('request');
let uuidV4 = require('uuid/v4');

let random = uuidV4();
let ZNS = 'Student';
let ZAN = 'eagle';
let app_name = 'Unknown';
let app_namespace = 'Unknown';
let url_collector = 'Unknown';
let url_instructor = 'Unknown';
let count = 0;
let icount = 0;
let port = 4100;

//------------------------------------------------------------------------------
// Application variables
//------------------------------------------------------------------------------
let options;
let optionDefinitions = [{
        name: 'port',
        alias: 'p',
        type: Number,
        defaultOption: 4100
    },
    {
        name: 'help',
        alias: 'h'
    }
];

let bb = chalk.green;
let CLLR_TITLE = chalk.bold.underline(myname);
let CLLR_VERSION = chalk.bold.underline('Version: ' + softwareVersion );

// Do not change the spacing of the following VPK_HEADER, and 
// do not delete the single tick mark
let CLLR_HEADER = `
${bb('-----------------------------------------------------------------')}
 ${bb(CLLR_TITLE)}
 ${bb(CLLR_VERSION)}                  
${bb('-----------------------------------------------------------------')}              
  `
//Do not delete the single tick mark above


//------------------------------------------------------------------------------
// process start parameters if provided
//------------------------------------------------------------------------------
options = commandLineArgs(optionDefinitions)

// -help used
if (typeof options.help !== 'undefined') {
    help();
    process.exit(0);
}

// -p used
if (typeof options.port !== 'undefined' && options.port !== null) {
    port = options.port;
    if (port < 1 || port > 65535) {
        console.log(new Date().toLocaleString() + ' :: webm099e - Invalid port number defined.  Valid range is 1 - 65535.');
        process.exit(-1);
    }
}



//------------------------------------------------------------------------------
// Define express routes / urls
//------------------------------------------------------------------------------
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Express app definitions
app.use(cors());

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});


app.get('/ping', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Server is OK\n');
});


//------------------------------------------------------------------------------
// Define SocketIO events and handlers
//------------------------------------------------------------------------------
io.on('connection', (client) => {

    client.on('confirm', function(data) {
        console.log(new Date().toLocaleString() + ' :: webm006i - Confirm request to complete lab received');
        success();
        let result = {"resp":"Confirmed"};
        client.emit('confirmed', result);
    });

});

  
//------------------------------------------------------------------------------
// start all 
//------------------------------------------------------------------------------
function startAll() {
    statMessages = [];
    splash();
    console.log(new Date().toLocaleString() + ' :: webm007i - WebMe Server started, port: ' + port);
    server.listen(port);
    getlets();
}

//------------------------------------------------------------------------------
// Command line startup and help
//------------------------------------------------------------------------------
function help() {
    let usage = commandLineUsage([{
            content: CLLR_HEADER,
            raw: true,
        },
        {
            header: 'Options',
            optionList: optionDefinitions
        }
    ]);
    console.log(usage);
}

function splash() {
    let adv = commandLineUsage([{
        content: CLLR_HEADER,
        raw: true,
    }]);
    console.log(adv);
}

//------------------------------------------------------------------------------
// Get the environment letiables
//------------------------------------------------------------------------------

function getlets() {
    // print and get environment letiables
    console.log(new Date().toLocaleString() + ' :: webm002i - Local environment letiables:')
    console.log(JSON.stringify(process.env,null,4));

    let locallets = process.env;

    // namespace - this should be a color, if missing set to balck
    if (typeof locallets.APP_NAMESPACE !== 'undefined') {
        app_namespace = locallets.APP_NAMESPACE;
    } else {
        app_namespace = ZNS;
    }
    console.log(new Date().toLocaleString() + ' :: webm003i - Environment APP_NAMESPACE: ' + app_namespace);

    // app - should be the name of the pod, else generate random value
    if (typeof locallets.APP_NAME !== 'undefined') {
        app_name = locallets.APP_NAME;
    } else {
        app_name = ZNS + '-' + ZAN + '-' + random;
    }
    console.log(new Date().toLocaleString() + ' :: webm004i - Environment APP_NAME: Using random key = ' + app_name);

    // url of where the data is being sent, if missing send to local host
    if (typeof locallets.COLLECTOR_CONFIG !== 'undefined') {
        url_collector = locallets.COLLECTOR_CONFIG;
    } else {
        url_collector = 'http://localhost:3000';
    }
    console.log(new Date().toLocaleString() + ' :: webm005i - Environment COLLECTOR_CONFIG: ' + url_collector);
    
	// url of where the data is being sent to instructor, if missing send to local host
	if (typeof locallets.INSTRUCTOR_CONFIG !== 'undefined') {
    	url_instructor = locallets.INSTRUCTOR_CONFIG;
	} else {
    	url_instructor = 'http://localhost:4200';
	}
	console.log(new Date().toLocaleString() + ' :: webm006i - Environment INSTRUCTOR_CONFIG: ' + url_instructor);       
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
    let res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        } else {
            console.log(new Date().toLocaleString() + ' :: webm011e - Error student count: ' + count + ' message: ' + error.errno );
        }
        callback(res);
    });
}

function tellStudent() {
    count++;
    informStudent(url_collector, function(resp){
        if (resp.startsWith('Got') ) {
	        console.log(new Date().toLocaleString() + ' :: webm007i - Student count: ' + count + ' for : /'+ app_namespace + '/' + app_name);
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
    let res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        } else {
        	console.log(new Date().toLocaleString() + ' :: webm012e - Error instructor count: ' + icount + ' message: ' + error.errno );
        }
        callback(res);
    });
}

function tellInstructor() {
	icount++;
    informInstructor(url_instructor, function(resp){
        if (resp.startsWith('Got') ) {
            icount++;
            console.log(new Date().toLocaleString() + ' :: webm010i - Instructor count: ' + icount + ' for /'+ app_namespace + '/' + app_name);
        }
    });
}

function success() {
    // time interval loop
    let startInformStudent = setInterval(tellStudent, 5000);
    console.log(new Date().toLocaleString() + ' :: webm011i - Initial reporting to student');
    tellStudent();
    // time interval loop
    let startInformInstructor = setInterval(tellInstructor, 15000);
    console.log(new Date().toLocaleString() + ' :: webm012i - Initial reporting to instructor');
    tellInstructor();
    
}

//------------------------------------------------------------------------------
//begin processing
//------------------------------------------------------------------------------
startAll();
//------------------------------------------------------------------------------