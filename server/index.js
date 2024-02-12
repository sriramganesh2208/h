const express =require("express")
const dotenv= require("dotenv")
const mongoose =require("mongoose")
const app =express()

const authRoute =require("./routes/auth")
const usersRoute =require("./routes/User")
const hotelsRoute =require("./routes/hotel")
const roomsRoute=require("./routes/rooms")
const cookieParser = require("cookie-parser")

dotenv.config()

const connect = async()=>{
try {
    await mongoose.connect("mongodb+srv://sriramg002:sriram22@cluster0.ef3xcbm.mongodb.net/?retryWrites=true&w=majority");
    console.log("connected to mongodb")
} catch (error) {
    throw error
  }
};

app.get("/get",(req,res)=>{
  res.send("hi")
})
//middleware
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)






mongoose.connection.on("disconnected",()=>{
  console.log("mongodb is disconnected")  
})



app.listen(3000,()=>{
    connect()
    console.log("server is connected")
})