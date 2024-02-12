const express =require("express");

const { verifyToken,verifyUser,verifyAdmin } = require("../utils/VerifyToken");


const router =express.Router();

const { createHotel, updateHotel, deletehotel, gethotel, gethotels } = require("../controllers/hotel");

//create
router.post("/",verifyAdmin,createHotel) // only admin can create hotel

//update
router.put("/:id",verifyAdmin,updateHotel) //only admin can update hotel

//delete
router.delete("/:id",verifyAdmin,deletehotel) //only admin can delete hotel

//get
router.get("/:id",gethotel)

//get all
router.get("/",gethotels)

module.exports =router;