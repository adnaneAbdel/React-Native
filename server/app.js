const express = require('express')
const port = 3000
const app = express()
//importing router
const router = require('../server/Router/Routers');
//import mongoose 
const mongoose = require('mongoose')
// import cokie parser
const cookieParser = require('cookie-parser');
// import cors parser
const cors = require('cors')
// import dotenv 
require('dotenv').config();

app.get('/',(req,res) =>{
    res.send('the back-end done ')
})

app.use(cors({
  origin: 'http://172.20.10.2:8081',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/auth', router)

mongoose.connect('mongodb://localhost:27017/users')

app.listen(port , () => console.log('the server run in '+ port))