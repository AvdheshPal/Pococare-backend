const jwt = require('jsonwebtoken');
const user = require('../model/user.model')

// This middleware is authenticates wheter token is valid or not.

const Auth = async (req, res, next) => {
    try{

        const token = req.body.token;

        const varifyUser = jwt.verify(token,'mynameisavdheshpalimfromallahabaduttarpradesh')

        const finduser = await user.findOne({_id:varifyUser._id})

        console.log(finduser.name +' is login');

        next();


    }
    catch(err){
        res.status(401).json({status:'failed',massege:'Invalid Token'});
    }
}

module.exports = Auth;