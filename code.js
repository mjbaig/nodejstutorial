//Blocked code
var longLoop = function(){
    for(var i = 0; i< 1000000;i++){
        var j= 1;
    }
    console.log('hello');
}

longLoop();
console.log('world');



//Async
var fs = require('fs');

var packageJson;

fs.readFile('./package.json','utf-8',function(err,data){
    if(!err){
        packageJson = data;
    }else{
        console.log('there was an error');
    }
});

console.log(packageJson);

//Callback
var fs = require('fs');

fs.readFile('./package.json','utf-8',function(err,data){
    if(!err){
        console.log(data);
    }else{
        console.log('there was an error');
    }
});

console.log('world');

//Promise
var fs = require('fs-promise');
fs.readFile('./package.json','utf-8')
    .then(function(data){console.log(data)})
    .then(function(){console.log('world')});

//Coroutine
Promise = require('bluebird');
var fs = require('fs-promise');
var main = Promise.coroutine(function*(){
    try{
        var data = yield fs.readFile('./package.json','utf-8');
    }catch (ohno){
        console.error(ohno);
    }
    console.log(data);
    console.log('world');
});
main();

//Simple server
var http = require('http');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});

    res.end("{\"hello\":\"world\"}");
}).listen(8080);

console.log('Server running on 8080');

//Express Hello World
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<html lang="en"><script\r\n  src=\"https:\/\/code.jquery.com\/jquery-3.2.1.js\"\r\n  integrity=\"sha256-DZAnKJ\/6XZ9si04Hgrsxu\/8s717jcIzLy3oi35EouyE=\"\r\n  crossorigin=\"anonymous\"><\/script><div>Here\'s a message</div><div id="postId"></div><script>$.get("/get",function(data){$(\'#postId\').html(data.message)})</script></html>')
});

app.get('/get',function(req,res){
    res.send({message:"Hey kid. I'm a computer. Stop all the downloading."})
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

