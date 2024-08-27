const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const dbconnect = async()=>{
  try {
    const connnect = await mongoose.connect(process.env.DB_CONNECT)
    console.log("Database connected")

  } catch (error) {
    console.log("The database not connected")
  }
}
module.exports = {dbconnect}