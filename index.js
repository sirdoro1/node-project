var http = require('http');
const {dateTime} = require('./modules/date');
var url = require('url');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/plain'});
    // // Hello world
    // res.write('Hello World');
    // res.write("\r");
    // // Importing custom module
    // res.write("The date and time are currently: " + dateTime());
    // res.write("\r");
    // // getting the url
    // res.write('url: '+req.url);
    // // getting url parameters
    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    // res.write("\r");
    // res.write(txt);
    // res.end();

    // open file and output content
    // fs.readFile('demofile.html',function(err,data){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write(data);
    //     res.end();
    // });

    // create file
    fs.appendFile('new-file-demo.txt','Hello World',function(err){
        if (err) throw err;
        console.log('Saved!');
    });
});

server.listen('5000');