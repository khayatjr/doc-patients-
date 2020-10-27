const mysql = require('mysql');
const request = require('request');

//connect to DB
  const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});
con.connect(function(err) {
  if (err) throw err;
   con.query("USE doctors", function (err, result) {
    if (err) throw err;
    
  });
   });
	// Get doc schedule
	
   exports.schedule= async (req,res)=>{
    let docName=await req.params.name;
   	 con.query("SELECT * from ?? ",[docName] ,function (err, result) {
    if (err) throw err;
    res.send(result);
  });

   }
   //Book a slot
  
   
     exports.book= async (req,res1)=>{
     let docName=await req.params.doc;
     let day=await req.params.day;
     let slot=await req.params.slot;
   	 con.query("UPDATE ?? SET ??=false WHERE Day=?",[docName,slot,day],function (err, result) {
    if (err) return console.log(err);
    // res1.send(result);
  });

 request.post({url:'http://localhost:8080/book',json:true,body:{"doc":docName,"day":day, "slot":slot}}, (err, res, body) => {
  if (err) { return console.log(err); }
  res1.send(res);
}); 

   }