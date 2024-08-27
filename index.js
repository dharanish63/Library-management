const express = require("express");
const mongoose = require("mongoose");
const { dbconnect } = require("./utils/db");
const book_route = require("./routes/router");
const staff_route= require('./routes/staff_route')
const image_router = require("./routes/image_route")
const multer = require('multer');
const signup_route = require('./routes/signup_route')
const login_route = require('./routes/login_route')
const dotenv = require("dotenv");
dotenv.config();
const app = express();
dbconnect();
app.use(express.json());
app.use("/api", book_route);
app.use('/api',staff_route);
app.use('/api',image_router);
app.use('/api',signup_route);
app.use('/api',login_route)
app.listen(process.env.PORT, () => {
  console.log(`The server is running on ${process.env.PORT}`);
});
