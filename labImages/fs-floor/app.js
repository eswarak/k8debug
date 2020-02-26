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
const fs = require('fs');
const uuidV4 = require('uuid/v4');

let ZNS = 'Student';
let ZAN = 'floor';
let app_name = 'Unknown';
let app_namespace = 'Unknown';
let url_collector = 'Unknown';
let url_instructor = 'Unknown';
let random = uuidV4();

let count = 0;
let icount = 0;
let cwd = process.cwd();
let cfile = 'team.txt';
let filename = cwd + '/' + cfile;
let noFile = 'clnt012i - Check for file: ' + filename;
let mess01 = 'clnt013i - The file team.txt in the /app directory must exist for this lab to be completed.';
let mess02 = 'clnt014i - Create the file in the running container.';

console.log(new Date().toLocaleString() + ' :: ----------------------------------------------------------------------------------');
console.log(new Date().toLocaleString() + ' :: ' + noFile);
console.log(new Date().toLocaleString() + ' :: ' + mess01);
console.log(new Date().toLocaleString() + ' :: ' + mess02);
console.log(new Date().toLocaleString() + ' :: ----------------------------------------------------------------------------------');


// print and get environment variables
console.log(new Date().toLocaleString() + ' :: ' + 'clnt002i - Local environment variables:')
console.log(JSON.stringify(process.env,null,4));

let localVars = process.env;

// namespace - this should be a color, if missing set to balck
if (typeof localVars.APP_NAMESPACE !== 'undefined') {
    app_namespace = localVars.APP_NAMESPACE;
} else {
    app_namespace = ZNS;
}
console.log(new Date().toLocaleString() + ' :: ' + 'clnt003i - Environment APP_NAMESPACE: ' + app_namespace);

// app - should be the name of the pod, else generate random value
if (typeof localVars.APP_NAME !== 'undefined') {
    app_name = localVars.APP_NAME;
} else {
    app_name = ZNS + '-' + ZAN + '-' + random;
}
console.log(new Date().toLocaleString() + ' :: ' + 'clnt004i - Environment APP_NAME: Using random key = ' + app_name);

// url of where the data is being sent, if missing send to local host
if (typeof localVars.COLLECTOR_CONFIG !== 'undefined') {
    url_collector = localVars.COLLECTOR_CONFIG;
} else {
    url_collector = 'http://localhost:3000';
}
console.log(new Date().toLocaleString() + ' :: ' + 'clnt005i - Environment COLLECTOR_CONFIG: ' + url_collector);

// url of where the data is being sent to instructor, if missing send to local host
if (typeof localVars.INSTRUCTOR_CONFIG !== 'undefined') {
    url_instructor = localVars.INSTRUCTOR_CONFIG;
} else {
    url_instructor = 'http://localhost:4200';
}
console.log(new Date().toLocaleString() + ' :: ' + 'clnt014i - Environment INSTRUCTOR_CONFIG: ' + url_instructor);
console.log(new Date().toLocaleString() + ' :: ----------------------------------------------------------------------------------');


// tell the collector server we are here
let informStudent = function(url, callback) {
    let uri = url + '/status/' + app_namespace + '/' + app_name;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        }
        else {
            res = 'clnt006e - Failed sending data to student: ' + uri + ' Message: ' + error;
        }
        callback(res);
    });
}

let tellStudent = function() {
    informStudent(url_collector, function(resp){
        if (resp.startsWith('Got') ) {
        	count++;
	        console.log(new Date().toLocaleString() + ' :: ' + 'clnt007i - Student count: ' + count + ' from /'+ app_namespace + '/' + app_name);
        }
    });
}


// tell the collector server we are here
let informInstructor = function(url, callback) {
    let uri = url + '/status/' + app_namespace + '/' + app_name;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        }
        else {
            res = 'fsap011e - Failed sending data to instructor: ' + uri + ' Message: ' + error;
        }
        callback(res);
    });
}

let tellInstructor = function() {
    informInstructor(url_instructor, function(resp){
        if (resp.startsWith('Got') ) {
            icount++;
            console.log(new Date().toLocaleString() + ' :: ' + 'clnt010i - Instructor count: ' + icount + ' from /'+ app_namespace + '/' + app_name);
        }
    });
}


let checkForFile = function () {
    // if file exist tell collector lab is complete
    if (fs.existsSync(filename)) {

        console.log(new Date().toLocaleString() + ' :: ----------------------------------------------------------------------------------');
        console.log(new Date().toLocaleString() + ' :: clnt008i - File located.  Reporting to collector.');
        console.log(new Date().toLocaleString() + ' :: ----------------------------------------------------------------------------------');

        // file found start the time interval loop to tell student and instructor
        let startInformStudent    = setInterval(tellStudent, 5000);
        tellStudent();
        let startInformInstructor = setInterval(tellInstructor, 15000);
        tellInstructor();
        clearInterval(fileChecking);

    } else {
        count++;
        console.log(new Date().toLocaleString() + ' :: ' + noFile + ' check count: ' + count);
        console.log(new Date().toLocaleString() + ' :: ' + mess01);
        console.log(new Date().toLocaleString() + ' :: ' + mess02);
    }
}

// time interval loop to check for the file
let fileChecking = setInterval(checkForFile, 15000);
console.log(new Date().toLocaleString() + ' :: ' + 'clnt009i - Start checking for file: ' + filename);
