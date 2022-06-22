const jwt=require('jsonwebtoken')

const adminAuth=(req,res,next)=>{
   let token = req.headers.authorization;
   if (!token) {
     return next("Error in Auth");
   }
   token=token.split(' ')[1]
   
    const decode = jwt.verify(token, "secret jwt")
    req.adminEmail=decode.email
    next()   
  
}

module.exports={
    adminAuth,
}