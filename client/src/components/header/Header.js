import React, { useState } from "react";
import "./Header.css";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Header({type}) {
  const [destination,setDestination] =useState(false)
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption=(name,operation)=>{
    setOptions((prev)=>{
        return{
            ...prev,
            [name]: operation === "i" ? options[name] +1 : options[name] -1
        }
    })
  }

  const navigate =useNavigate()

  const handleSearch =()=>{
    navigate("/hotels",{state:{destination,date,options}})
  }

  return (
    <div className="header">
      <div  className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <HotelIcon />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FlightIcon />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <DirectionsCarIcon />
            <span>Car Rents</span>
          </div>
          <div className="headerListItem">
            <HotelIcon />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <LocalTaxiIcon />
            <span>Airport Taxis</span>
          </div>
        </div>
        { type !== "list" &&
          <>
        
       
        <h1 className="headerTitle">A LifeTime of discount? It's Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels unlock instant savings of 10% or with a
          free Sriramsbooking account
        </p>

        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <HotelIcon></HotelIcon>
            <input
              type="text"
              placeholder="Where Are You Going?"
              className="headerSearchInput"
              onChange={(e)=> setDestination(e.target.value)}
            />
          </div>

          <div className="headerSearchItem">
            <CalendarMonthIcon />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>

          <div className="headerSearchItem">
            <PersonIcon />
            <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
          
            {openOptions &&<div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button 
                  disabled={options.adult <=1}
                  className="optionCounterButton" 
                  onClick={()=>handleOption("adult","d")}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Childern</span>
                <div className="optionCounter">
                  <button
                  disabled={options.children <=0}
                   className="optionCounterButton" 
                   onClick={()=> handleOption("children","d")}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={()=> handleOption("children","i")}>+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                  disabled={options.room <=1}
                   className="optionCounterButton"
                   onClick={()=> handleOption("room","d")}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterButton" onClick={()=> handleOption("room","i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
          <Button className="headerBtn" onClick={handleSearch}>Submit</Button>
          </div>
         
        </div> </>}
      </div>
    </div>
  );
}

export default Header;
