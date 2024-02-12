const express =require("express")
const User = require("../models/User")

// create user
 const createUser =async(req,res)=>{
    const newUser =  new User(req.body)

    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
}

//update user
const updateUser =async(req,res)=>{

    try{
        const updateuser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body},
          { new:true})
        res.status(200).json(updateuser)
    }catch(err){
        res.status(500).json(err)
    }
}

//delete user
const deleteUser =async(req,res)=>{
    
    try{
        await User.findByIdAndDelete(req.params.id)
         res.status(200).json("User has Succesfully Deleted")
     }catch(err){
         res.status(500).json(err)
     }
}

//get user
const getUser =async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}


//get all users
const getUsers =async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers
}