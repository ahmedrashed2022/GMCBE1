var http = require("http");
var fs = require('fs')
http.createServer(function (request, response) {
    
    fs.readFile('index.html',function(err,data){
        if (err){
            console.error(err)
            response.writeHead(404, {'Content-Type': 'text/html'});
        }
        else{
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write(data.toString)
        }
        
    })
    response.end();
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');