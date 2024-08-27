const signup_schema = require('../Model/db_signup_schema')
const bcrypt  = require('bcrypt')
const create = async (req,res) =>{
 const password = req.body.password
const hash = await bcrypt.hash(password ,10)

const register = await signup_schema({
  username:req.body.username,
  email:req.body.email,
  password:hash
})
try {
  const new_user = await register.save()
  res.status(201).json(new_user)
} catch (error) {
  res.status(401).json({message:error}) 
}

}



module.exports ={create}