import React from "react";
import "./Searchitem.css";
import { Button } from "@mui/material";

function Searchitem() {
  return (
    <div className="searchItem">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/396/394/415/city-apartment-design-wallpaper-preview.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air Conditioning
        </span>
        <span className="siFeatures">
          Entire Studio = 1 bathroom .21sq.meter 1 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later,So lock in this great price Today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <Button>8.9</Button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siPriceText">Includes taxed and Fees</span>
          <Button className="siCheckButton">See Availability</Button>
        </div>
      </div>
      
    </div>
  );
}

export default Searchitem;
