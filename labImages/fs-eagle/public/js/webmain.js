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

// Global vars 
var socket = io.connect();               // sockert io related

//----------------------------------------------------------
// document ready
//----------------------------------------------------------
$(document).ready(function() {
    showSplash();
});

//----------------------------------------------------------
// socket io definitions for incoming 
//----------------------------------------------------------

socket.on('connect', function(data) {
    socket.emit('join', 'Session connected');
});

socket.on('confirmed', function(data) {
	console.log(JSON.stringify(data,null,2))
	$("#confirmed").empty();
    $("#confirmed").html('');
	$("#confirmed").html(data.resp);
});

//----------------------------------------------------------
// socket io definitions for out-bound
//----------------------------------------------------------

// send request to server to confirm lab was completed
function confirm() {
	console.log('Sent request to confirm Lab');
	socket.emit('confirm', {});
}

//----------------------------------------------------------
// screen handlers
//----------------------------------------------------------

// show the ssplash screen
function showSplash() {
    $("#splash").show();
}

//----------------------------------------------------------
console.log('loaded webmain.js');
//----------------------------------------------------------