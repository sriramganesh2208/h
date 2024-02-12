const express =require("express")

const router =express.Router()

const { createUser, updateUser, deleteUser, getUser, getUsers } = require("../controllers/user");
const { verifyToken,verifyUser,verifyAdmin } = require("../utils/VerifyToken");

//router.get("/checkauthentication",verifyToken,(req,res,next)=>{
 //   res.send("hello user,you are logged in")
//})

//router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
 //   res.send("hello user,you are logged in and can delete your account")
//})

//router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
  //  res.send("hello admin,you are logged in and can delete all account")
//})


//create
//router.post("/",verifyUser,createUser)

//update
router.put("/:id",verifyUser,updateUser) //particular user can update his profile

//delete
router.delete("/:id",verifyUser,deleteUser) //particular user can delelte his profile

//get
router.get("/:id",verifyUser,getUser) //particular user can get his profile

//get all
router.get("/",verifyAdmin,getUsers) // only admin can get all user's

module.exports =router;