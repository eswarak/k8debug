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
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var commandLineArgs = require('command-line-args');
var port = 9000;


//------------------------------------------------------------------------------
// Application variables
//------------------------------------------------------------------------------
var options;
var optionDefinitions = [{
        name: 'port',
        alias: 'p',
        type: Number,
        defaultOption: 9000
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
        console.log(new Date().toLocaleString() + ' :: yarn099e - Invalid port number defined.  Valid range is 1 - 65535.');
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
    res.end('Yarns server is ready\n');
});

app.get('/ping', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Yarns server ping response, ready\n');
});

  
//------------------------------------------------------------------------------
// start all 
//------------------------------------------------------------------------------
function startAll() {
    console.log(new Date().toLocaleString() + ' :: yarn007i - yarns Server started, port: ' + port);
    server.listen(port);
}

//------------------------------------------------------------------------------
// begin processing 
//------------------------------------------------------------------------------
console.log(new Date().toLocaleString() + ' :: yarn900i - Starting HTTP server');
startAll();

//------------------------------------------------------------------------------