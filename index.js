const express = require("express");
// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const port = 5000;

const app = express();

app.get("/", async (req, res) => {
  const patients = await prisma.patient.findMany({});
  res.json(patients);
});
app.post("/creat", async (req, res) => {
  const department = await prisma.department.create({
    data: {
      name: "Dermatology",
      patients: {
        create: [
          {
            name: "abdo ali gomaa",
            email: "abdo@gmail.com",
            password: "abdo password",
          },
          {
            name: "abdo ali gomaa2",
            email: "abdo2@gmail.com",
            password: "abdo password2",
          },
        ],
      },
    },
  });
  res.json(department   );
});

app.listen(port, console.log("server is running on port " + port));
