const {required}=require('joi')
const mongoose = require('mongoose')

const schema = mongoose.Schema({
username:{
  type:String,
  required:true
},
email:{
  type:String,
  required:true
},
password:{
  type:String,
  required:true
}


})

module.exports = mongoose.model('users',schema)