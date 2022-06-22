const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const jwt=require('jsonwebtoken')


// log in admin 
const checkPassowrd=(user,password)=>{
    if(user.password===password){
        return true
    }
    return false

}
const generateTokne=(admin)=>{
    const token=jwt.sign({email:admin.email},"secret jwt")
    return token

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
      // genertate token
      const token=generateTokne(admin)
      res.json({ admin,token });
    } catch (error) {
        res.json({error})
    }
}

// create department
const createDepartment=async(req,res)=>{
  try {
    const department=req.body
    const oldDepartment=await prisma.department.findFirst({
      where:{
        name:department.name
      }
    })
    if(oldDepartment){
      throw "you can not creat this department because there is an other department by it's name"
    }
    const newDepartment=await prisma.department.create({
      data:department,
    })
    
    res.json(newDepartment)
    
  } catch (error) {
    res.json({error})
    // res.send('error in creat department')
  }
}

module.exports={
    LogIn,
    createDepartment
}