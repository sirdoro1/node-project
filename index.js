var http = require('http');
const {dateTime} = require('./modules/date');
var url = require('url');

var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    // Hello world
    res.write('Hello World');
    res.write("\r");
    // Importing custom module
    res.write("The date and time are currently: " + dateTime());
    res.write("\r");
    // getting the url
    res.write('url: '+req.url);
    // getting url parameters
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write("\r");
    res.write(txt);
    res.end();
});

server.listen('5000');