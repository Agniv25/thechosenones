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


//Connecting with MongoDB Database

mongoose.connect("mongodb+srv://satwikroopa:Roopa70263@fruitdb.8sxipgz.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });

// Schedule template creation

const scheduleSchema = new mongoose.Schema({
    doctorName: String,
    date: String,
    slot1: String,
    slot2: String,
    slot3: String,
})

// Doctor data template creation

const docSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    password: String,
    address: String,
    age: Number,
    gender: String,
    experience: Number,
    specialization: String,
    area: String,
    schedule: [scheduleSchema],
});

//User Data Template Creation

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    age: Number,
    gender: String,
})

//Appointment Template Creation

const appointmentSchema = new mongoose.Schema({
    doctorName: String,
    userName: String,
    status: String,
    date: String,
    slot: String,
    type: String,
    address: String
})

const Doctor = mongoose.model("doctor", docSchema);
const User = mongoose.model("user", userSchema);
const Appointment = mongoose.model("appointment", appointmentSchema);
const Schedule = mongoose.model("schedule", scheduleSchema);



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