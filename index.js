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

// app.get("/createSession", function (req, res) {
    
//     const url = "http://api.endlessmedical.com/v1/dx/InitSession";

//     http.get(url, function (response) {

//         response.on("data", function (data) {            
//             const bookList = JSON.parse(data)
//             res.json(bookList);
//         })
//     })
// })


// //Connecting with MongoDB Database

// mongoose.connect("mongodb+srv://satwikroopa:Roopa70263@fruitdb.8sxipgz.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });

// // Schedule template creation

// const scheduleSchema = new mongoose.Schema({
//     doctorName: String,
//     date: String,
//     slot1: String,
//     slot2: String,
//     slot3: String,
// })

// // Doctor data template creation

// const docSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     phoneNumber: Number,
//     password: String,
//     address: String,
//     age: Number,
//     gender: String,
//     experience: Number,
//     specialization: String,
//     area: String,
//     schedule: [scheduleSchema],
// });

// //User Data Template Creation

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     phoneNumber: Number,
//     age: Number,
//     gender: String,
// })

// //Appointment Template Creation

// const appointmentSchema = new mongoose.Schema({
//     doctorName: String,
//     userName: String,
//     status: String,
//     date: String,
//     slot: String,
//     type: String,
//     address: String
// })

// const Doctor = mongoose.model("doctor", docSchema);
// const User = mongoose.model("user", userSchema);
// const Appointment = mongoose.model("appointment", appointmentSchema);
// const Schedule = mongoose.model("schedule", scheduleSchema);

// app.get("/", function (req, res) {
//     res.render("main")
// })

// //citizen login through first page

// app.get("/citizenLogin", function (req, res) {
//     res.render("userLogin", { text: false, passwordFail: false, notFound: false });
// })

// // citizen Sign Up through first page

// app.get("/citizenSignup", function (req, res) {
//     res.render("userSignup", { error: false });
// })

// //doctor login through first page

// app.get("/doctor", function (req, res) {
//     res.render("docLogin", { text: false });
// })

// //User Sign Up

// app.post("/userSignUp", function (req, res) {
//     const receivedName = req.body.name;
//     const receivedAge = req.body.age;
//     const receivedEmail = req.body.email;
//     const receivedGender = req.body.gender;
//     const receivedPhno = req.body.phno;

//     const receivedPswd = req.body.password;
//     const cpswd = req.body.cpassword;
//     if (receivedPswd != cpswd) {
//         res.render("userSignup", { error: true });  // if password and confirm password wont match
//     }
//     else {
//         User.findOne({ email: receivedEmail }).then(function (data) {
//             if (data) {
//                 res.render("userLogin", { text: "Account already exists with this Email", passwordFail: false, notFound: false });     // if an account already exists while signing up
//             }
//             else {
//                 const user = new User({
//                     name: receivedName,
//                     email: receivedEmail,                // if no account exists, new account is created 
//                     password: receivedPswd,
//                     phoneNumber: receivedPhno,
//                     age: receivedAge,
//                     gender: receivedGender,

//                 })
//                 user.save();
//                 res.render("userLogin", { text: "Your account was succesfully created", passwordFail: false, notFound: false });
//             }
//         })
//     }
// })

// //User Login

// app.post("/userLogin", function (req, res) {
//     const email = req.body.email;
//     const pswd = req.body.password;
//     User.findOne({ email: email }).then(function (user) {
//         if (user) {
//             citizenName = user.name;
//             if (pswd === user.password) {
//                 res.render("userMainPage", { doctorName: false, userName: user.name });  // if password matched
//             }
//             else {
//                 res.render("userLogin", { passwordFail: true, text: false, notFound: false });  // if password not matched
//             }
//         }
//         else {
//             res.render("userLogin", { passwordFail: false, text: false, notFound: true });  // if password not matched
//         }
//     }).catch(function (err) {
//         res.send(err);
//     })
// })

// //Doctor Login

// app.post("/docLogin", function (req, res) {
//     const email = req.body.email;
//     const pswd = req.body.password;
//     Doctor.findOne({ email: email }).then(function (user) {
//         if (user) {
//             doctorName = user.name;

//             if (pswd === user.password) {
//                 // if password matched

//                 res.render("doctorMainPage", { userName: doctorName, text: false });

//             }
//             else {
//                 res.render("docLogin", { text: "Wrong Password" });  // if password not matched
//             }
//         }
//         else {
//             res.render("docLogin", { text: "No account exists with this email" });  // if no account found
//         }
//     })
// })

// app.get("/doctorAppointments", function (req, res) {
//     Appointment.find({ doctorName: doctorName }).then(function (data) {
//         res.render("doctorAppointments", { userName: doctorName, patients: data });
//     });

// })







app.listen(3000,function(){
    console.log("Server running")
})