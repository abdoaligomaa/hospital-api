const express=require('express')
// import { PrismaClient } from '@prisma/client'
const {PrismaClient}=require("@prisma/client")
const prisma = new PrismaClient()


const port=5000

const app=express()

app.get('/',(req,res)=>{
    res.send('welcome in my project')
})

app.get('/creatDoctor',async(req,res)=>{
    const doctor=await prisma
})

app.listen(port,console.log('server is running on port '+port))