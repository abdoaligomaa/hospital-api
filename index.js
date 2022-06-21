const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

const express=require('express')
const app=express()


// create department
//get all department 
// get deparment info 
// update deparment info 

// create student
//get all student in deparment 
//get all student for teacher 
//get all student in cours 
// get student info 
// update student info

// create teacher
//get all teacher in deparment 
// get teacher info 
// update teacher info
 

// create coure
// get all coures
// get all course in the deparment
// get all course for one student
// update coures
// delete course

app.listen('3000',()=>console.log('server is listen to port 3000'))
