
 const mysql = require('mysql');
  const jwt=require('jsonwebtoken');
  const bcrypt=require('bcryptjs');
  const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

 con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //create DB
   con.query("USE patients", function (err, result) {
    if (err) throw err;
    console.log("Database switched");
  });
   });
	
	let email='patient@gmail.com';
	let pass="1234";

  //login
exports.login= async (req,res)=>{

con.query('SELECT * from Users WHERE email= ?', [email],async function (err, result){
   	if (!result || !(await bcrypt.compare(pass,result[0].password)))
   	{
   		console.log("login failed");
   		res.send("failed");
   	}
   	else{
   		const id = result[0].id;
   		const token=jwt.sign({id},"secret",{expiresIn:"90d"});
   		const cookieOptions={expires: new Date (Date.now()+90*24*60*60),httpOnly:true}


   		res.cookie("jwt",token,cookieOptions);
   		res.send("token");

   	}
   	
   });

} 

exports.register=(req,res)=>{
 
  let email='patient@gmail.com';
  let pass="1234";
	let GivenName='youssef';
	let phone="01115349974";
//check if email already exists
	 con.query('SELECT email from Users WHERE email= ?', [email],async function (err, result) {
    if (err) throw err;
   
   if(result.length>0){
   	console.log('user exists');
   	return res.send("registered");
   
   	
}
else{
	//creating a new user and hashing the password
   let HashedPassword= await bcrypt.hash(pass,8);
   con.query('INSERT into patients SET ?', {GivenName:GivenName,email:email,phone:phone},function (err, result){
   	if (err) throw err;
   	
   });
   con.query('INSERT into Users SET ?', {email:email,password:HashedPassword},function (err, result){
   	if (err) throw err;
   	
   });
  console.log('registered');
  res.send("registered");
}
  });
	
}