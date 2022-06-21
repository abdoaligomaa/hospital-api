const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const app = express();

// create department
app.post("/createDepartment", async (req, res) => {
  try {
    const deparment = await prisma.department.create({
      data: {
        name: "Secondary",
        description: "this is for student from 13to 16 years",
      },
    });
    res.json({ deparment });
  } catch (error) {
    res.json({ error });
    
  }
});
//get all department
app.get("/allDepartment", async (req, res) => {
     try {
       const deparments = await prisma.department.findMany({
         select: {
           id: true,
           name: true,
           description: true,
        //    students:true
        createdAt:true

         },
       });
       res.json({ deparments });
     } catch (error) {
        console.log(error)
       res.json({ error });
     }
     

    
})


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

app.listen("3000", () => console.log("server is listen to port 3000"));
