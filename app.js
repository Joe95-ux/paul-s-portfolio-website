require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static( __dirname + "/public"));

app.get("/", function(req, res){
    res.render('home');
})

app.get("/resume", function(req, res){
    res.render('resume');
})






app.listen(3000, function(){
    console.log("server has started on port 3000");
})