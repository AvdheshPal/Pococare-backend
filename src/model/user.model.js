const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Schema for user

const userSchema = new mongoose.Schema({
 name:{required:[true,'Name is required'],type:String},
 email:{ required:true,type:String,unique:[true,'Email is already registered']},
 phone:{required:[true,'phone is required'],type:String,},
 password:{required:[true,'password is required'],type:String,minlength:[8,'Password must be at least 8 characters']},
 tokens:[{
    token:{
      type:String,
      required:true
    }
  }]
},
{versionKey:false,timestamps:true})



// method for generating the token , when the generateAuthToken function is invoked.

userSchema.methods.generateAuthToken = async function(req, res){
    try{

      const token = jwt.sign({_id:this._id},"mynameisavdheshpalimfromallahabaduttarpradesh");
      this.tokens = this.tokens.concat({token:token})
      return token;

    }catch(e){

      res.status(500).send({message: e.message, status: "Error to Creating token"})

    }
  }

module.exports = mongoose.model('users',userSchema);