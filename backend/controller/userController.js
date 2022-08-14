const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

//Generate Token func
const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn : '2d'});

}

const signupUser = async (req,res) =>{
     
    const {email,password} = req.body;
    try {
        const user = await User.signup(email , password);

        const token = createToken(user._id);

        res.status(200).json({email , token});
    } catch (error) {
        res.status(400).json({error : error.message})
    }

//    res.json({mssg : 'Signup User'})
}

const loginUser = async (req,res) => {
    const { email , password } = req.body;

    try {
        const user = await User.login(email , password);

        const token = createToken(user._id);

        res.status(200).json({email , token});
    } catch (error) {
        res.status(400).json({error : error.message})
    }

    // res.json({mssg : 'Login User'})
}

module.exports = {
    signupUser,
    loginUser
}