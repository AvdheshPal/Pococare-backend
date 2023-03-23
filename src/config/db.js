const mongoose = require('mongoose')
require('dotenv').config()

const connect = ()=>{
    console.log('DB Connected');
    return mongoose.connect(`${process.env.DB}/Pococare`)
}

module.exports = connect;