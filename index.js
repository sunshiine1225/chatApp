var express= require("express");
var socket=require("socket.io")
var app=express();
var server =app.listen(4000,function(){
    console.log("listening to request on port  4000")
});


app.use(express.static("public"));

var io = socket( server );
