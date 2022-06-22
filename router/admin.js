const Router=require('express').Router()
const {adminAuth}=require('../middleware/adminAuth')
const {LogIn,createDepartment}=require('../controller/admin')

Router.post('/login',LogIn)

Router.post('/department',createDepartment)

module.exports=Router