const mongoose = require('mongoose')

const connect = ()=>{
    console.log('DB Connected');
    return mongoose.connect(`mongodb+srv://Avdhesh:Avdhesh@cluster0.kt5em.mongodb.net/Pococare`)
}

module.exports = connect;