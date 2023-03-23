const express = require('express');
const connect = require('./src/config/db')
const cors = require('cors');
require('dotenv').config()

const user = require('./src/controller/user.controller')


const PORT =  process.env.PORT || 5000;


const app = express()

app.use(express.json())
app.use(cors())


app.use('',user)



// API for home route

app.get('/',(req, res) => {
    res.status(200).send('welcome to homepage')
})

// <--- ---->

app.listen(PORT , async (req,res)=>{
    await connect();
    console.log(`listening port http://localhost:${PORT}`)
})