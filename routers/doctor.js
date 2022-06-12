const express = require("express");
const router=express.Router()
const {creatDoctor}= require('../controllers/doctor')


// api end points 

// creat new doctor 
router.post('/create',creatDoctor)

// read doctor data
router.get("/:id");

// delete doctor 
router.delete("/:id");

// update doctor data
router.patch("/:id");

module.exports=router