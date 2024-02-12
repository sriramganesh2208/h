const mongoose =require("mongoose")

const {Schema} =mongoose

const HotelSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
       
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
{timestamps:true})

const User = mongoose.model("User", HotelSchema)
 
module.exports = User;