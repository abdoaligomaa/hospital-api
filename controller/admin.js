const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// log in admin 
const checkPassowrd=(user,password)=>{
    if(user.password===password){
        return true
    }
    return false

}

const LogIn =async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password)
    try {
      const admin = await prisma.admin.findUnique({
        where: {
          email,
        },
      });

      // check if the email is true or not
      if (!admin) {
        throw "this email not is not admin, check other email";
      }
      const isAdmin = checkPassowrd(admin, password);

      // check if the password for this email is true or not
      if (!isAdmin) {
        throw "this password is not valid use the correct password";
      }
      res.json({ admin });
    } catch (error) {
        res.json({error})
    }
}

module.exports={
    LogIn
}