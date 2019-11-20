var express=require("express");
var mysql=require("mysql");
var app=express();
var empRoute=require("./emp");

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/student",empRoute);

app.listen(4500,function(){
    console.log("server strted on 9000");
})