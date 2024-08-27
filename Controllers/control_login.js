const signup_schema = require('../Model/db_signup_schema')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const generatetoken = require('../utils/token')
dotenv.config()
const isAuth = require('../middleware/auth')

const user_find = async(req,res)=>{
try {
  const user = await signup_schema.findOne({username:req.body.username});

  if(!user){
    throw new Error("no user found")
  }

  const valid = await bcrypt.compare(req.body.password,user.password)
  if(!valid){
   throw new Error("Password Invalid")
  }

  if(req.body.email!=user.email){
  throw new Error("Email not registered")
  }
 
  const token =  generatetoken(user)
  res.json({user,token})
} 

catch (error) {

  // if error 
  console.log("error",error)
  res.status(401).send(error.message)
}
}


// exports
module.exports = {
  user_find }