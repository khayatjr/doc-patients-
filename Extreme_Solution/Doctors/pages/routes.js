const express=require('express');
const router=express.Router();
const controller= require('../controllers/auth.js');
const messaging= require('../controllers/messaging.js');
router.post('/register',controller.register);
router.post('/login',controller.login);
router.patch('/book/:doc/:day/:slot',messaging.book);
router.get('/schedule/:name',messaging.schedule);
module.exports=router;