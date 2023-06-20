const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json())
app.all('*', (req, res, next) => {
    res.header({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "content-type",
        "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
    })
    next()
})
const userRouter = require('./router/userRouter')
app.use('/user', userRouter)
app.listen(8888, () => {
    console.log('8888端口启动===>>>>>');
})