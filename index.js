const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");


const app = express();


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req,res){
    res.render("cv");
});

app.get("/story",function(req,res){
  res.render("story")
});

app.get("/cycling",function(req,res){
  res.render("cycling")
});

app.get("/webdev",function(req,res){
  res.render("webdev")
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

module.exports = app;
