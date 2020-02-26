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
let request = require('request');
let uuidV4 = require('uuid/v4');


let random = uuidV4();
let ZAN = 'Jazzy';
let ZNS = 'Student';
let app_name = 'Unknown';
let app_namespace = 'Unknown';
let url_collector = 'Unknown';
let url_instructor = 'Unknown';
let url_yarns = 'Unknown';
let icount = 0;
let scount = 0;
let aCnt = 0;
let firstTime = true;

  
//------------------------------------------------------------------------------
// start all 
//------------------------------------------------------------------------------
function startAll() {

    // print and get environment letiables
    //console.log(new Date().toLocaleString() + ' :: ' + 'jazz002i - Local environment letiables:')
    //console.log(JSON.stringify(process.env,null,4));

    getlets();
    console.log(new Date().toLocaleString() + ' :: jazz017i - Jazzy Server is asking yarns data server for data');
    startAsking();
}

//------------------------------------------------------------------------------
// Get the environment letiables
//------------------------------------------------------------------------------

function getlets() {

    let locallets = process.env;

    // namespace - this should be a color, if missing set to balck
    if (typeof locallets.APP_NAMESPACE !== 'undefined') {
        app_namespace = locallets.APP_NAMESPACE;
    } else {
        app_namespace = ZNS;
    }
    console.log(new Date().toLocaleString() + ' :: ' + 'jazz003i - Environment APP_NAMESPACE: ' + app_namespace);

    // app - should be the name of the pod, else generate random value
    if (typeof locallets.APP_NAME !== 'undefined') {
        app_name = locallets.APP_NAME;
    } else {
        app_name = ZNS + '-' + ZAN + '-' + random;
    }
    console.log(new Date().toLocaleString() + ' :: jazz004i - Environment APP_NAME: Using random key = ' + app_name);

    // url of where the data is being sent, if missing send to local host
    if (typeof locallets.COLLECTOR_CONFIG !== 'undefined') {
        url_collector = locallets.COLLECTOR_CONFIG;
    } else {
        url_collector = 'http://localhost:3000';
    }
    console.log(new Date().toLocaleString() + ' :: jazz005i - Environment COLLECTOR_CONFIG: ' + url_collector);
    
	// url of where the data is being sent to instructor, if missing send to local host
	if (typeof locallets.INSTRUCTOR_CONFIG !== 'undefined') {
    	url_instructor = locallets.INSTRUCTOR_CONFIG;
	} else {
    	url_instructor = 'http://localhost:4200';
	}
	console.log(new Date().toLocaleString() + ' :: jazz006i - Environment INSTRUCTOR_CONFIG: ' + url_instructor);       

	// data url to ask for data
	if (typeof locallets.YARNS_URL!== 'undefined') {
    	url_yarns = locallets.YARNS_URL;
	} else {
    	url_yarns = 'http://localhost:9001';
	}
	console.log(new Date().toLocaleString() + ' :: jazz007i - Environment YARNS_URL: ' + url_yarns);    
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
            console.log(new Date().toLocaleString() + ' :: jazz011e - Error telling student, message: ' + error );
        }
        callback(res);
    });
}

function tellStudent() {
    //console.log(new Date().toLocaleString() + ' :: jazz200i - Invoke tellStudent');
    scount++;
    informStudent(url_collector, function(resp){
        if (resp.startsWith('Got') ) {
	        console.log(new Date().toLocaleString() + ' :: jazz047i - Student count: ' + scount + ' for : /'+ app_namespace + '/' + app_name);
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
        	console.log(new Date().toLocaleString() + ' :: jazz022e - Error telling instructor, message: ' + error);
        }
        callback(res);
    });
}

function tellInstructor() {
    //console.log(new Date().toLocaleString() + ' :: jazz300i - Invoke tellInstructor');

	icount++;
    informInstructor(url_instructor, function(resp){
        if (resp.startsWith('Got') ) {
            console.log(new Date().toLocaleString() + ' :: jazz010i - Instructor count: ' + icount + ' for /'+ app_namespace + '/' + app_name);
        }
    });
}

function success() {
    if (firstTime === false) {
        return;
    } else {
        firstTime = false;
    }

    console.log(new Date().toLocaleString() + ' :: jazz400i - Success');
    // time interval loop
    let startInformStudent = setInterval(tellStudent, 5000);
    console.log(new Date().toLocaleString() + ' :: jazz011i - Initial reporting to student');
    tellStudent();
    // time interval loop
    let startInformInstructor = setInterval(tellInstructor, 15000);
    console.log(new Date().toLocaleString() + ' :: jazz012i - Initial reporting to instructor');
    tellInstructor();
    
}

//------------------------------------------------------------------------------
// Talk to yarns server
//------------------------------------------------------------------------------



function startAsking() {
    //console.log(new Date().toLocaleString() + ' :: jazz500i - Invoke startAsking');
    // time interval loop
    let startAskForData = setInterval(askForData, 15000);
    console.log(new Date().toLocaleString() + ' :: jazz014i - Start asking data server for information');
    askForData();
}

function askForData() {
    //console.log(new Date().toLocaleString() + ' :: jazz700i - Invoke askForData');
    askServerForData(url_yarns, function(resp){
        try {
            if (resp.startsWith('<!DOCTYPE html>') || resp.startsWith('Yarns server') ) {
                success();
            } 
        } catch(err) {
            console.log(new Date().toLocaleString() + ' :: jazz048e - ERROR message: ' + err);
        }
    });
}

// ask data server for information
function askServerForData(url, callback) {
    //console.log(new Date().toLocaleString() + ' :: jazz600i - Invoke askServerForData');
    aCnt++;
    let uri = url;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    let res = '';

    try {
        request(options, function (error, response, body) {
            if (error) {
                console.log(new Date().toLocaleString() + ' :: jazz032e - Error asking yarns data server, count: ' + aCnt );
                console.log(JSON.stringify(error, null, 4))
            }
            if (!error && response.statusCode === 200) {
                res = body;
            }
            callback(res);
        });
    } catch(err) {
            console.log(new Date().toLocaleString() + ' :: jazz035e - Generic catch error message: ' + err);
    } 
}


//------------------------------------------------------------------------------
// begin processing 
//------------------------------------------------------------------------------
startAll();

//------------------------------------------------------------------------------