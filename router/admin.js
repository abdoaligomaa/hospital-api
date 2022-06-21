const Router=require('express').Router()

const {LogIn}=require('../controller/admin')

Router.post('/login',LogIn)

module.exports=Router