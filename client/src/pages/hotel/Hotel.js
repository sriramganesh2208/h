import React,{useState} from 'react'
import './Hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'

import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Hotel() {

  const [slideNumber,setSlideNumber] =useState(0)
  const [open,setOpen] =useState(false)

  const photos=[
    {
      src:"https://images.unsplash.com/photo-1521607630287-ee2e81ad3ced?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHR2JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"

    },
    {
      src:"https://media.istockphoto.com/id/1344083240/photo/modern-living-room.webp?b=1&s=170667a&w=0&k=20&c=uSN2t4oCxtpVokTWnA2pKoL36Gyl-7gPUzr45igGWrE="
    },
    {
      src:"https://media.istockphoto.com/id/1440781882/photo/interior-design-and-decoration-of-a-modern-living-room-with-a-dining-table.webp?b=1&s=170667a&w=0&k=20&c=LygFtCNU2nHb_P5PLVQchz1ujm2KZt4BWX341x-cvak="
    },
    {
      src:"https://thumbs.dreamstime.com/b/two-hairpin-tables-fresh-tulips-standing-bright-living-room-interior-potted-plants-windows-corner-couch-carpet-116944132.jpg"
    },
    {
      src:"https://media.istockphoto.com/id/962158098/photo/modern-scandinavian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=EFBzOCPh5xCv8LasIi1lFg8p9jBRkCqd95CvUpmF4ro="
    },
    {
      src:"https://media.istockphoto.com/id/1178826957/photo/large-and-open-living-room-den-sun-room.webp?b=1&s=170667a&w=0&k=20&c=Hlr32F4l93ktvVyeV05cU3uDQO6NL8z8iLMwiqFfnWU="
    }
  ]

  const handleopen=(i)=>{
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove=(direction)=>{
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0? 5 :slideNumber-1;
    }else{
      newSlideNumber = slideNumber === 5?0 :slideNumber+1;
    }

    setSlideNumber(newSlideNumber)
  }



  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open &&<div className="slider">
          <CloseIcon className='close' onClick={()=>setOpen(false)}/>
          <ArrowBackIosIcon className='arrow' onClick={()=> handleMove("l")}/>
          <div className="slideWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <ArrowForwardIosIcon className='arrow' onClick={()=> handleMove("r")}/>

         
        </div>}
        <div className="hotelWrapper">
          <Button className='bookNow'>Reserve Or Book Now!</Button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
              <LocationOnIcon/>
              <span>Elton St 125 New York</span>
          </div>

          <span className='hotelDistance'>
            Excellent location - 500m from center
          </span>

          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {photos.map((photo,i)=>{
              return(
                <div className="hotelImgWrapper">
                  <img onClick={()=> handleopen(i)} src={photo.src} alt="" className="hotelImg" />
                </div>
              )
            })}
          </div>
          
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                <p>
                  Located a 5-minutes walk from St.Florian's gate in krakow,Tower
                  Street Apartments has accomaodation with air conditioner accomaodation
                  free wifi. The units come with hardwood floors and features a 
                  fully equipped kitchenette with a microwave ,a flat-screen Tv,
                  and a private bathroom with shower and a hairdryer.
                </p>
              </div>

              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of krakow, this property has an 
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b>(9 nights)
                </h2>
                <Button>Reserve or Book Now!</Button>
              </div>
            </div>
          
        </div>

        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel