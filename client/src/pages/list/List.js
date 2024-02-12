import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./List.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { Button } from "@mui/material";
import Searchitem from "../../components/searchitem/Searchitem";


function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  console.log(location);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>

            <div className="lsItem">
              <label>Check-In Date</label>
              <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
            {openDate&& ( <DateRange
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                minDate={new Date()}
              />)}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsoptions">
                
             
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price <small>per Night</small></span>
                <input type="number" className="lsOptionInput"/>
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Max Price <small>per Night</small></span>
                <input type="number" className="lsOptionInput"/>
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="number" className="lsOptionInput" placeholder={options.adult} min={1}/>
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" className="lsOptionInput" placeholder={options.childern} min={0}/>
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" className="lsOptionInput" placeholder={options.room} min={1}/>
              </div>
            </div>
            </div>
            <Button>Search</Button>
          </div>

          <div className="listResult">
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
