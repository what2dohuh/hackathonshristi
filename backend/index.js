const express = require('express')
const app = express()
const route = require('./src/route/auth.route')
const port = 5173
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
//Middlewere
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//This is for mongodb connections
mongoose.connect("mongodb+srv://deepsharm17:ScZQKFtIpnHHFz1b@cluster0.2ylxzx2.mongodb.net/?retryWrites=true&w=majority").then(app.listen(port, () => {
    console.log(`listening on port ${port} `)
  })).catch((err)=> console.log(err))


  //This is for routing routes
app.use('/',route)




