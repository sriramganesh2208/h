const User =require("../models/User")
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken")


const register = async(req,res)=>{

    try{
        const salt =bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt)
        
        const newUser = new User({
            Username:req.body.Username,
            email:req.body.email,
            password:hash
        })

        await newUser.save()
        res.status(201).send("user has been created")
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
}

const login =async(req,res)=>{
    try{
        //user
        const user = await User.findOne({Username:req.body.Username});
        if(!user){
            res.status(404).send("user not found")
        }

        const isPassword= await bcrypt.compare(
            req.body.password,
            user.password
        );

        //password
        if(!isPassword){
            return res.status(400).send("wrong password")
        }

        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT)

        const {password,isAdmin,...otherDetails}=user._doc;
        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json({...otherDetails})

    }catch(err){
            res.status(500).json(err)
    }
}



module.exports ={
    register,
    login
}