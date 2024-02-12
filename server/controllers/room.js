const Room =require("../models/Room")
const Hotel =require("../models/Hotel")



const createRoom =async(req,res,next)=>{

    const hotelId = req.params.hotelid;
    const newRoom =new Room(req.body)

    try{
        const savedRoom =await newRoom.save()

        try{
            await Hotel.findByIdAndUpdate(hotelId, 
                {$push : {rooms: savedRoom._id},
            })
        }catch(err){
            res.status(500).json(err)
        }

        res.status(200).json(savedRoom)
    }catch(err){
        res.status(500).json(err)
    }
}