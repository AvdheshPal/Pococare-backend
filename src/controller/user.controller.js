const express = require('express');
const router = express.Router();
const Auth = require('../middleware/Auth')

const user = require('../model/user.model');

// this API is for Reginstration.

router.post('/signup', async (req, res)=>{
    try{
        
        const registerUser = await user.create(req.body)

        return res.json({status:"Registration Successfull",registerUser});

    }
    catch(err){
        return res.status(500).send({massage:err.message,status:"failed"});
    }
})

// <--- ---->


// API for Login

router.post('/login', async(req, res) => {
    try{
        
        const email = req.body.email;
        const password = req.body.password;

        const finduser = await user.findOne({email:email})

        const isMatch = finduser.password === password;

        const token = await finduser.generateAuthToken();



        if(!isMatch){
            return res.status(200).json({status:'Password is incorrect'})
        }else{
            return res.status(200).json({status:'Login Successfull',token , finduser})
        }

    }
    catch(err){
        return res.status(500).json({status:'email is incorrect'});
    }
})

// <--- ---->

// API for varify the token 

router.post('/varify', Auth ,async (req, res)=>{
    try{

        return res.status(201).json({status: 'success',massege:'Token is valid'});

    }
    catch(err){
        return res.status(500).json({massage:err.massage,status:'failed'})
    }
})

// <--- ---->

module.exports = router;