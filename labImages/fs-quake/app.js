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
const express = require('express');
const app = express();
const server = require('http').createServer(app);

let ZAN = 'quake';
let ZNS = 'Student';
let app_name = 'UNKNOWN';
let app_namespace = 'Unknown';
let url_collector = 'Unknown';
let url_instructor = 'Unknown';
let url_route = 'Unknown';

let random = uuidV4();
let count = 0;
let icount = 0;
let first = true;
let port = 4400;

// start message
console.log(new Date().toLocaleString() + ' :: ' + 'quak001i - Application random key: ' + random)

let localVars = process.env;

// namespace - this should be a color, if missing set to balck
if (typeof localVars.APP_NAMESPACE !== 'undefined') {
    app_namespace = localVars.APP_NAMESPACE;
} else {
    app_namespace = ZNS;
}
console.log(new Date().toLocaleString() + ' :: ' + 'quak003i - Environment APP_NAMESPACE: ' + app_namespace);

// app - should be the name of the pod, else generate random value
if (typeof localVars.APP_NAME !== 'undefined') {
    app_name = localVars.APP_NAME;
} else {
    app_name = ZNS + '-' + ZAN + '-' + random;
}
console.log(new Date().toLocaleString() + ' :: ' + 'quak004i - Environment APP_NAME: Using random key = ' + app_name);

// url of where the data is being sent, if missing send to local host
if (typeof localVars.COLLECTOR_CONFIG !== 'undefined') {
    url_collector = localVars.COLLECTOR_CONFIG;
} else {
    url_collector = 'http://localhost:3000';
}
console.log(new Date().toLocaleString() + ' :: ' + 'quak013i - Environment COLLECTOR_CONFIG: ' + url_collector);

// url of where the data is being sent to instructor, if missing send to local host
if (typeof localVars.INSTRUCTOR_CONFIG !== 'undefined') {
    url_instructor = localVars.INSTRUCTOR_CONFIG;
} else {
    url_instructor = 'http://localhost:4200';
}
console.log(new Date().toLocaleString() + ' :: ' + 'quak014i - Environment INSTRUCTOR_CONFIG: ' + url_instructor);

// url of where the route to hit
if (typeof localVars.ROUTE !== 'undefined') {
    url_route = localVars.ROUTE;
} else {
    url_route = 'http://localhost:4200';
}
console.log(new Date().toLocaleString() + ' :: ' + 'quak014i - Environment ROUTE: ' + url_route);


//------------------------------------------------------------------------------
// Define routes / urls
//------------------------------------------------------------------------------


app.get('/', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Server is ready\n');
});

//------------------------------------------------------------------------------
// start all 
//------------------------------------------------------------------------------
function startAll() {
    console.log(new Date().toLocaleString() + ' :: quak007i - Quake Server started, port: ' + port);
    server.listen(port);

    let startTalkingToRoute = setInterval(checkForRoute, 5000);
    console.log(new Date().toLocaleString() + ' :: quak011i - Initial request to route');
    checkForRoute();


}

function checkForRoute() {
    let uri = 'http://' + url_route;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(new Date().toLocaleString() + ' :: quak022i - Successful contact to route');
            console.log(new Date().toLocaleString() + ' :: ' + 'quak112i - All OK');
            if (first === true ) {
                success();
            }
        } else {
        	console.log(new Date().toLocaleString() + ' :: quak012e - Error getting to Route: ' + uri + ' message: ' + error );
            process.exit(1);
        }
    });
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
            console.log(new Date().toLocaleString() + ' :: quak011e - Error telling student count: ' + count + ' message: ' + error );
        }
        callback(res);
    });
}

function tellStudent() {
    count++;
    informStudent(url_collector, function(resp){
        if (resp.startsWith('Got') ) {
	        console.log(new Date().toLocaleString() + ' :: quak007i - Student count: ' + count + ' for : /'+ app_namespace + '/' + app_name);
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
        	console.log(new Date().toLocaleString() + ' :: quak012e - Error telling instructor count: ' + icount + ' message: ' + error);
        }
        callback(res);
    });
}

function tellInstructor() {
	icount++;
    informInstructor(url_instructor, function(resp){
        if (resp.startsWith('Got') ) {
            icount++;
            console.log(new Date().toLocaleString() + ' :: quak010i - Instructor count: ' + icount + ' for /'+ app_namespace + '/' + app_name);
        }
    });
}

function success() {
    first = false; 
    // time interval loop
    let startInformStudent = setInterval(tellStudent, 5000);
    console.log(new Date().toLocaleString() + ' :: quak011i - Initial reporting to student');
    tellStudent();
    // time interval loop
    let startInformInstructor = setInterval(tellInstructor, 15000);
    console.log(new Date().toLocaleString() + ' :: quak012i - Initial reporting to instructor');
    tellInstructor();
    
}

startAll();

