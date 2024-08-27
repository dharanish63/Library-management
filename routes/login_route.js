const control=require('../Controllers/control_login')
const isAuth =require("../middleware/auth")
const router = require('express').Router()
const valid = require('../Controllers/control_validate_token')

router.post('/login',control.user_find)

router.get('/auth',isAuth,valid.read)
module.exports = router