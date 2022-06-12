const express = require("express");
// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const port = 5000;

const app = express();

app.get("/", async (req, res) => {
  // const patients = await prisma.patient.findMany({});
  // res.json(patients);
  res.send('welcome in my hospital api')
})

app.listen(port, console.log("server is running on port " + port));
