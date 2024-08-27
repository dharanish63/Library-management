const jwt = require('jsonwebtoken')
const generatetoken = (user) => jwt.sign({id:user._id,username:user.username},process.env.SECRET_KEY,{expiresIn:'1d'})

module.exports = generatetoken;