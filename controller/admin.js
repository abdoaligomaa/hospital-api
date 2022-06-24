const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const jwt=require('jsonwebtoken');
const { connect } = require("../router/admin");


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
  // note : check for name and deparment info from req.body before going in prisma code
  try {
    const {name}=req.body
    if(!name){
      throw " you should Enter the name for the department"
    }
    console.log(name)
    const oldDepartment=await prisma.department.findFirst({
      where:{
        name:name,
      }
    })
    if(oldDepartment){
      throw "you can not creat this department because there is an other department by it's name"
    }
    const newDepartment=await prisma.department.create({
      data:{
        name:name,

      },
    })
    
    res.json(newDepartment)
    
  } catch (error) {
    res.json({error})
    // res.send('error in creat department')
  }
}
// create new course
const createCourse=async(req,res)=>{
  // note : check for code ,title and course info from req.body before going in prisma code
  try {
    
    const { code,title } = req.body;
    if (!code ) {
      throw " you should Enter code for the course";
    }
    const oldCourse = await prisma.course.findFirst({
      where: {
        code: code,
        title:title
      },
    });
    if (oldCourse) {
      throw "you can not creat this course because there is an other course by it's code";
    }
    const newCourse = await prisma.course.create({
      data: {
        code: code,
        title: title,
      },
    });

    // if (!newCourse) {
    //   throw "you should provide more infromation";
    // }

    res.json(newCourse);
  } catch (error) {
    res.json({ error });
  }
}

// create new student
const createStudent=async(req,res)=>{
  // note : check for code ,title and course info from req.body before going in prisma code
  try {
    
    const { email,password,name,departmentId } = req.body;
    if (!email || !password || !departmentId) {
      throw " you should Enter email and password and department id for the student";
    }
    const oldStudent = await prisma.student.findUnique({
      where: {
        email:email
      },
    });
    if (oldStudent) {
      throw "you can not create this student because there is an other student by it's emial";
    }
    const newStudent = await prisma.student.create({
      data: {
       email,
       password,
       deptId:departmentId
      
      },
      
    });
    console.log(newStudent)

  

    res.json(newStudent);
  } catch (error) {
    res.json({ error });
  }
}
module.exports={
    LogIn,
    createDepartment,
    createCourse,
    createStudent
}