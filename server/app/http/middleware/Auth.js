const config = require("config")
const jwt = require("jsonwebtoken")
module.exports=function(req,res,next){
const token=req.header("x-auth-token")
if(!token) return res.status(401).send("No token provided!")

try{
    const result=jwt.verify(token,config.get("userWebToken"))
    req.user=result
}catch(err){
    return res.status(401).send("Error! ", err)
}
next()
}