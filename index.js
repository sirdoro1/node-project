var http = require('http');
const {dateTime} = require('./modules/date');

var server = http.createServer((req,res)=>{
    res.writeHead(301,{'Content-Type':'text/plain'});
    res.write("The date and time are currently: " + dateTime());
    // break new line
    res.write("\r");
    res.end('Hello World');
});

server.listen('5000');