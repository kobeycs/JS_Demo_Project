var http=require('http');
var fs=require('fs');
var url=require("url");
var event=require("events");
var buffer=require("buffer");
var path=require("path");
var zlib=require("zlib");

//http
http.createServer(function(req,res){

    console.log(req.url);
    console.log(req.headers);
    console.log(req.method);
    res.writeHead(200);
    if(req.method==='POST')
    {
        req.on("data",function(chunk){
            console.log("http start:"+chunk);
            res.write(chunk);
        })
        req.on("end",function(){
            console.log("http end!");
            res.end();
        })
    }
}).listen(8999);

//模拟post请求
/*http.request({"host":"localhost","port":8999,method:"post",path:"/"},function(res){
    console.log("模拟请求成功");
    console.log(res);
});*/



http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    console.log("request for "+pathname+" received!");
    if(pathname.substr(1)==='Hook.html')
    {
        fs.readFile("Hook.html",function(err,data){
            if(err){
                console.log(err.stack);
                res.writeHead(404,{"Content-Type":"text/html"});
                res.end();
            }
            else
            {
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data.toString());
            }
        })
    }
    else
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("hello word!");
        res.end();
    }
}).listen(8000,function(){
    console.log("开启成功");
})


//fs
fs.readFile("test.txt",function(err,data){
    if(err) {
        console.error(err);
      var ws=  fs.createWriteStream("test.txt",{encoding:"utf-8",autoClose:true});
      var buffer=new Buffer("this is buffer object!","utf-8");
      ws.write(buffer);
      ws.write("this is string txt");
      ws.end();
        return;
}
    console.log('打开文件成功!');
    console.log(data.toString());

})

var rs=fs.createReadStream("test.txt");
rs.setEncoding("utf-8");
var datacontent="";
//更data事件差不多
rs.on("readable",function(){
    var chunk;
    var data='';
    while((chunk=rs.read()))
    {
        data +=chunk;
        //console.log("读取过程1："+chunk);
        
    }
    if(data!='')
        console.log("读取完毕："+data);
})

/*rs.on("data",function(chunk){
    datacontent+=chunk;
    console.log("emit data事件:"+datacontent.toString());
}).on("error",function(err){
    console.log("emit err");
}).on("end",function(){
    console.log("emit end");
}).on("finish",function(){
    console.log("emit finish");
}).on("chunk",function(chunk){
    console.log("emit chunk块:"+chunk.toString());
})*/


fs.createReadStream("./NodeDemo01.js").pipe(zlib.createGzip()).pipe(fs.createWriteStream("testcopy.zip"));



//event use test
var emitEnvent=new event.EventEmitter();
emitEnvent.addListener("add",function(){
    console.log("add event test");
})
emitEnvent.on("add",function(){
    console.log("add event test by on");
})
emitEnvent.once("add",function(){
    console.log("add event test by once");
})
emitEnvent.emit('add');
emitEnvent.emit('add');
var funs=emitEnvent.listeners();
console.log(funs);
funs.forEach(function(elemet,index){
    console.log(index);
    elemet();
});


//path
console.log(path.resolve("test.txt"));
