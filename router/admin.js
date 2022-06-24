const Router=require('express').Router()
const {adminAuth}=require('../middleware/adminAuth')
const {LogIn,createDepartment,createCourse, createStudent}=require('../controller/admin')

Router.post('/login',LogIn)

Router.post('/department',createDepartment)
Router.post("/course", createCourse)
Router.post("/student", createStudent)

module.exports=Router