var express=require("express");
var mysql=require("mysql");
var appEmp=express();

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'stud_db'
});

connection.connect();

appEmp.get("/",function(req,res){
    connection.query("select * from student",function(err,result){
        res.send(result);
    })
})

module.exports=appEmp;