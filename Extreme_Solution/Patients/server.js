const express= require ("express");
const app= express();

//DB connection
const mysql = require('mysql');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //create DB
   con.query("CREATE DATABASE IF NOT EXISTS patients", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  //   //Use DB
    con.query("USE patients", function (err, result) {
    if (err) throw err;
    console.log("Database switched");
  });
  //   //create table Patients
    con.query("CREATE TABLE IF NOT EXISTS Patients (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,GivenName VARCHAR(30) NOT NULL,email VARCHAR(50),phone varchar(11))", function (err, result) {
    if (err) throw err;
    console.log("patients table created");
  });
     con.query("CREATE TABLE IF NOT EXISTS Users (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,email VARCHAR(30) NOT NULL,password VARCHAR(100) NOT NULL)", function (err, result) {
    if (err) throw err;
    console.log("users table created");
  });
});
app.use(express.json());
 //define routes
 app.post('/register',require('./pages/routes.js'));
app.post('/login',require('./pages/routes.js')); 
app.patch('/book/:doc/:day/:slot',require('./pages/routes.js'));
app.get("/schedule/:name", require('./pages/routes.js')); 
  app.listen(3001, function () { 
    console.log("Server is running"); 
})