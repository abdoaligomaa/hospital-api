const express = require("express");
// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// create new doctor
const createDepartment = async (req, res, next) => {
  try {
    // const department = await prisma.department.create({
    //     data:{
    //         name:"Emergency_medicine",
    //         doctors:{
    //             create:{
    //                 email:"abdo2@gmail.com",
    //                 name:"abdo ali ",
    //                 password:"abdo pass",
    //                 role:"ADMIN",
    //             }
    //         },patients:{
    //             create:{
    //                 name:"patient2",
    //                 phone:1234622,
    //                 password:"patient pass",

    //             }
    //         }
    //     }
        
        
    // })
    const department = await prisma.department.create({
      data: {
        name: "Psychiatry",
      },
    });
    res.json({message:"success",department})
  } catch (error) {
    res.send("error in creating deparment");
    console.log(error);
  }
};

module.exports = {
  createDepartment,
};
