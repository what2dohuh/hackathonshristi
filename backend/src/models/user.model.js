const mongoose = require('mongoose');


//This is for user schema
const Usermodel = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,   
    },
    profile:{
        type:String,
        required:false,
    },
    address:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
})

const User = mongoose.model('User',Usermodel);
module.exports = User;