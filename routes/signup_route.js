const express = require('express')
const control = require('../Controllers/control_signup')
const router = express.Router()

//create the user
router.post('/signup',control.create)



module.exports =router