const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
const authorization = req.headers.authorization
console.log(authorization)
const token = await authorization.split(" ")[1]
console.log(token)

const valid = jwt.verify(token,process.env.SECRET_KEY)

console.log(valid)
 req.user ={
  id:valid.id,
  username:valid.username
}
next()
} catch (error) {
 
   console.error(error


   )
   
}
}

module.exports = isAuth
