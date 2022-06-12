const express = require("express");
// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// create new doctor 
const creatDoctor=async(req,res,next)=>{
    try {
        const doctor = await prisma.doctor.create({
          data: {
            email: "abdo3@gmial.com",
            name: "abdo ali100 ",
            password: "abdo pass",
            role: "ADMIN",
            // department_id:13
            department:{
                create:{
                    name:"Emergency_medicine",
                }
            }

          },
        });
        // const doctor=await prisma.doctor.create({
        //     data: {
        //          email:"abdo"
        //     }
        // })
        res.json({message:"success",doctor})
    } catch (error) {
        res.send('error in creating doctor')
        console.log(error)
    }    
}

module.exports={
    creatDoctor,

}
