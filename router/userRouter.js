const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/userController')
userRouter.get('/login', userController.handleLogin)
userRouter.post('/home', userController.handleInserUser)
userRouter.get('/userinfo', userController.handleGetUser)
userRouter.post('/deleteUser', userController.handleDeleteUser)
module.exports = userRouter