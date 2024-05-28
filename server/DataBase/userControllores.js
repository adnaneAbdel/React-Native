const mongoose = require('mongoose')


const UserTable = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxLength: 20,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    }
});

const UserModel  = mongoose.model('User', UserTable);

module.exports = UserModel