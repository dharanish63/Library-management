const mongoose = require("mongoose");
const {type}=require("os");

const schema = mongoose.Schema({
  staff_name: {
    type: String,
    required: true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  age: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  experience:{
    type:Number,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  pincode:{
    type:String,
    required:true,
    min:6,
    max:6
  }

});

module.exports = mongoose.model("staffs", schema);
