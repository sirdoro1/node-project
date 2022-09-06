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
    // fs.appendFile('new-file-demo.txt','Hello World',(err)=>{
    //     if (err) throw err;
    //     console.log('Saved!');
    // });

    // open or create file if it doesn't exist
    // fs.open('new-file-demo.txt','w',(err)=>{
    //     if (err) throw err;
    //     console.log('File opened!');
    // });
    // res.write('File opened!');
    // res.write("\r");

    // update or create file if it doesn't exist
    // fs.writeFile('new-file-demo.txt','Welcome Home Comrade',(err)=>{
    //     if (err) throw err;
    //     console.log('File updated!');
    // });

    // deleting file
    // fs.unlink('new-file-demo.txt',(err)=>{
    //     if (err) throw err;
    //     console.log('File deleted!');
    // });

    // renaming file
    // fs.rename('new-file-demo.txt','new-file.txt',(err)=>{
    //     if (err) throw err;
    //     console.log('File renamed!');
    // });
    // res.end('File Renamed!');

    // Paring and Handling URL
    var q = url.parse(req.url,true);
    console.log(`Host: ${q}`);
    res.write("\r");
    res.write(`Pathname: ${q.pathname}`);
    res.write("\r");
    res.write(`Search: ${q.search}`);
    res.write("\r");
    var qdata = q.query;
    res.write(`Year: ${qdata.year}`);
    res.write("\r");
    res.write(`Month: ${qdata.month}`);
    res.end();
});

server.listen('5000');