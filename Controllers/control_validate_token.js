const signup_schema = require('../Model/db_signup_schema')
const read  = async(req,res)=>{

const user = await signup_schema.findById({_id:req.user.id})

res.json(user)

}

module.exports ={read}