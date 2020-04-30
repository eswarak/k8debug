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
 Common utility functions
*/

"use strict"
const fs = require('fs');

function standardDev(values){
    let avg = average(values);
    
    let squareDiffs = values.map(function(value){
      let diff = value - avg;
      let sqrDiff = diff * diff;
      return sqrDiff;
    });
    
    let avgSquareDiff = average(squareDiffs);
  
    let stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
}
  
function average(data){
    let sum = data.reduce(function(sum, value){
      return sum + value;
    }, 0);
  
    let avg = sum / data.length;
    return avg;
}
  
//--------- format milliseconds to minutes:sesonds
function milliTS(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    let rtn = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    // Example: 9:23 append leading zero
    if (rtn.length < 5) {
        rtn = '0' + rtn;
    }
    if (rtn.length < 4) {
        rtn = '00' + rtn;
    }
    return rtn;
}

    //------------------------------------------------------------------------------
    // save edited course file
    //------------------------------------------------------------------------------
function saveFile(content) {
    let fn = content.file;
    try {
        //doc = JSON.stringify(doc, null, 4);
        fs.writeFileSync(fn, content.data);
        return {"status": "PASS", "message": "Successfully saved file: " + fn};;
    } catch (e) {
        logIt('cllrU084 - Error saving file: ' + fn + ' message: ' + e);
        return {"status": "FAIL", "message": "Failed saving file: " + fn + " message: " + e};
    }
}

function logIt(msg) {
    let output = new Date().toLocaleString() + ' :: ' + msg;
    // write to console
    console.log(output);
}

//------------------------------------------------------------------------------
// common routines
//------------------------------------------------------------------------------
module.exports = {

    //------------------------------------------------------------------------------
    // check if namespace is in array 
    //------------------------------------------------------------------------------
    logMsg: function(msg) {
        let output = new Date().toLocaleString() + ' :: ' + msg;
        // write to console
        console.log(output);
    },

    standardDeviation: function(data) {
        return standardDev(data);
    },

    milliTS: function(data) {
        return milliTS(data);
    },

    writeFile: function(data) {
        return saveFile(data);
    }  
    
//end of exports 
};