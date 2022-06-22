const Router=require('express').Router()
const {adminAuth}=require('../middleware/adminAuth')
const {LogIn}=require('../controller/admin')

Router.post('/login',LogIn)
Router.get('/test',adminAuth,(req,res,next)=>{
    res.json(req.adminEmail)
})

module.exports=Router