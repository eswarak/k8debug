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

/*--------------------------------------
 Student related functions
*/

"use strict"
const request = require('request');
const Q = require('q');
const cllr = require('../lib/cllr');
const utl = require('../lib/utl');


// tell the collector server AKA instructor about something
function sendToInstructor(ns, app, callback) {
    var uri = cllr.instructorURL + '/status/' + ns + '/' + app;
    var options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res = body;
            utl.logMsg('cllrS010 - Student told Instructor about: ' + ns + ':' + app);
        }
        else {
            utl.logMsg('cllrS020 - Failed sending data to instructor: ' + uri + ' Message: ' + error);
        }
        callback(res);
    });
}


// send audit log to Instructor
function sendAuditInfo() {
    if (cllr.auditCnt === cllr.eventCnt) {
        cllr.skipAudit++;
        return;   // no changes since last time audit log was sent
    } else {
        cllr.auditCnt = cllr.eventCnt;
    }
    var uri = cllr.instructorURL + '/audit';
    var data = {}
    if (typeof cllr.namespace[cllr.app_namespace] !== 'undefined') {
        if (typeof cllr.namespace[cllr.app_namespace].events !== 'undefined') {
            data = {'ns': cllr.app_namespace, 'events': cllr.namespace[cllr.app_namespace].events};
        } else {
            utl.logMsg('cllrS115 - Events empty for namespace: ' + cllr.app_namespace); 
            return; 
        }
    }else {
        utl.logMsg('cllrS125 - Empty Namespace: ' + cllr.app_namespace);  
        return;
    }
    
    var data = {'ns': cllr.app_namespace, 'events': cllr.namespace[cllr.app_namespace].events};
    var options = {
        uri : uri,
        method : 'POST',
        body: {'audit': data},
        json: true
    }; 

    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
            utl.logMsg('cllrS100 - Audit info sent to Instructor');     
        }
        else {
            utl.logMsg('cllrS105 - Failed sending audit log, Message: ' + error);
        }
    });
}

function getInstructorData() {
    var deferred = Q.defer();

    var uri = cllr.instructorURL + '/courses';
    var options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res = body;
            utl.logMsg('cllrS200 - Student got course data from Instructor');
            deferred.resolve(res);
        }
        else {
            utl.logMsg('cllrS201 - Failed getting course data from instructor: ' + uri + ' Message: ' + error);
            deferred.reject(error);
        }
    });
    return deferred.promise;
}


//------------------------------------------------------------------------------
// common routines
//------------------------------------------------------------------------------
module.exports = {

    //------------------------------------------------------------------------------
    // add info
    //------------------------------------------------------------------------------

    tellInstructor: function(ns, app) {
        sendToInstructor(ns, app, function(resp){
            if (resp.startsWith('Got') ) {
                cllr.icount++;
                utl.logMsg('cllrS200 - Tell Instructor count: ' + cllr.icount );
            }
        });
    },

    sendAuditLog: function() {
        sendAuditInfo();
    },

    getCourseData: function(url) {
        var deferred = Q.defer();
        getInstructorData()
        .then(function (result) {
            result = JSON.parse(result);
            cllr.courses = result.courses;
            cllr.labels = result.labels;
            cllr.courseIds = result.courseIds;
            cllr.courseConfig = result.courseConfig;
            deferred.resolve('PASS');
        })
        .catch(function (err) {
            utl.logMsg('cllrS200 - FAILED to get course information from instructor, msg: ' + err);
            cllr.courses = {};
            cllr.labels = '';
            cllr.courseIds = '';
            cllr.courseConfig = {};

            deferred.resolve(err);
        });
        return deferred.promise;
    }
  //end of exports 
};