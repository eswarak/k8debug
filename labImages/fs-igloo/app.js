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
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let commandLineArgs = require('command-line-args');
let request = require('request');
let uuidV4 = require('uuid/v4');

let random = uuidV4();
let ZNS = 'Student';
let ZAN = 'igloo';
let app_name = 'Unknown';
let app_namespace = 'Unknown';
let url_collector = 'Unknown';
let url_instructor = 'Unknown';
let count = 0;
let icount = 0;
let port = 4100;
let firstTime = true;

//------------------------------------------------------------------------------
// Application letiables
//------------------------------------------------------------------------------
let options;
let optionDefinitions = [{
        name: 'port',
        alias: 'p',
        type: Number,
        defaultOption: 4100
    }
];




//------------------------------------------------------------------------------
// process start parameters if provided
//------------------------------------------------------------------------------
options = commandLineArgs(optionDefinitions)

// -p used
if (typeof options.port !== 'undefined' && options.port !== null) {
    port = options.port;
    if (port < 1 || port > 65535) {
        console.log(new Date().toLocaleString() + ' :: iglo099e - Invalid port number defined.  Valid range is 1 - 65535.');
        process.exit(-1);
    }
}

//------------------------------------------------------------------------------
// Define routes / urls
//------------------------------------------------------------------------------

app.get('/', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    if (firstTime) {
        success();
        firstTime = false;
        console.log(new Date().toLocaleString() + ' :: iglo049i - Success reported to collector');
    }
    res.end('Success reported to instructor\n');
});

app.get('/ready', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Server is ready\n');
});

app.get('/health', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Server is healthy\n');
});

  
//------------------------------------------------------------------------------
// start all 
//------------------------------------------------------------------------------
function startAll() {
    statMessages = [];
    server.listen(port);
    getlets();
    console.log(new Date().toLocaleString() + ' :: iglo007i - Server started, port: ' + port);
}


//------------------------------------------------------------------------------
// Get the environment letiables
//------------------------------------------------------------------------------

function getlets() {
    // print and get environment letiables
    //console.log(new Date().toLocaleString() + ' :: iglo002i - Local environment letiables:')
    //console.log(JSON.stringify(process.env,null,4));

    let locallets = process.env;

    // namespace - this should be a color, if missing set to balck
    if (typeof locallets.APP_NAMESPACE !== 'undefined') {
        app_namespace = locallets.APP_NAMESPACE;
    } else {
        app_namespace = ZNS;
    }
    console.log(new Date().toLocaleString() + ' :: iglo003i - Environment APP_NAMESPACE: ' + app_namespace);

    // app - should be the name of the pod, else generate random value
    if (typeof locallets.APP_NAME !== 'undefined') {
        app_name = locallets.APP_NAME;
    } else {
        app_name = ZNS + '-' + ZAN + '-' + random;
    }
    console.log(new Date().toLocaleString() + ' :: iglo004i - Environment APP_NAME: Using random key = ' + app_name);

    // url of where the data is being sent, if missing send to local host
    if (typeof locallets.COLLECTOR_CONFIG !== 'undefined') {
        url_collector = locallets.COLLECTOR_CONFIG;
    } else {
        url_collector = 'http://localhost:3000';
    }
    console.log(new Date().toLocaleString() + ' :: iglo005i - Environment COLLECTOR_CONFIG: ' + url_collector);
    
	// url of where the data is being sent to instructor, if missing send to local host
	if (typeof locallets.INSTRUCTOR_CONFIG !== 'undefined') {
    	url_instructor = locallets.INSTRUCTOR_CONFIG;
	} else {
    	url_instructor = 'http://localhost:4200';
	}
	console.log(new Date().toLocaleString() + ' :: iglo006i - Environment INSTRUCTOR_CONFIG: ' + url_instructor);       
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
            console.log(new Date().toLocaleString() + ' :: iglo011e - Error student count: ' + count + ' message: ' + error.errno );
        }
        callback(res);
    });
}

function tellStudent() {
    count++;
    informStudent(url_collector, function(resp){
        if (resp.startsWith('Got') ) {
	        console.log(new Date().toLocaleString() + ' :: iglo007i - Student count: ' + count + ' for : /'+ app_namespace + '/' + app_name);
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
        	console.log(new Date().toLocaleString() + ' :: iglo012e - Error instructor count: ' + icount + ' message: ' + error.errno );
        }
        callback(res);
    });
}

function tellInstructor() {
	icount++;
    informInstructor(url_instructor, function(resp){
        if (resp.startsWith('Got') ) {
            icount++;
            console.log(new Date().toLocaleString() + ' :: iglo010i - Instructor count: ' + icount + ' for /'+ app_namespace + '/' + app_name);
        }
    });
}


function success() {
    // time interval loop
    let startInformStudent = setInterval(tellStudent, 5000);
    console.log(new Date().toLocaleString() + ' :: iglo011i - Initial reporting to student');
    tellStudent();
    // time interval loop
    let startInformInstructor = setInterval(tellInstructor, 15000);
    console.log(new Date().toLocaleString() + ' :: iglo012i - Initial reporting to instructor');
    tellInstructor();
}

//------------------------------------------------------------------------------
//begin processing after 10 second delay
//------------------------------------------------------------------------------
console.log(new Date().toLocaleString() + ' :: iglo900i - Waiting 10 seconds to start HTTP server');
setTimeout(startAll, 10000);

//------------------------------------------------------------------------------