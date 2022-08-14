const express = require('express');
const router = express.Router();

const {signupUser , loginUser} = require('../controller/userController');


//Signup

router.post('/signup',signupUser);


//Login routes

router.post('/login',loginUser);

module.exports = router;