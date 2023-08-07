const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const http = require('http');
const ejs = require('ejs');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("chat");
})

app.get("/createSession", function (req, res) {
    
    const url = "http://api.endlessmedical.com/v1/dx/InitSession";

    http.get(url, function (response) {

        response.on("data", function (data) {
            const bookList = JSON.parse(data)
            res.json(bookList);
        })
    })
})

app.listen(3000,function(){
    console.log("Server running")
})