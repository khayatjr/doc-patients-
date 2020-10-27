const request = require('request');
exports.schedule=  (req,res1)=>{
  let name=req.params.name;
  request('http://localhost:3000/schedule/'+name, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  res1.send(res);
}); 
}
exports.book=  (req,res1)=>{
  let doc=req.params.doc;
  let day=req.params.day;
  let slot=req.params.slot;
  request.patch('http://localhost:3000/book/'+doc+'/'+day+'/'+slot, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  res1.send(res);
}); 
}  