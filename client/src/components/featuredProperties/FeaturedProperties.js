import React from "react";
import "./FeaturedProperties.css";
import { Button } from "@mui/material";

function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fbItem">
        <img
          src="https://i.pinimg.com/736x/5f/2e/6c/5f2e6c78db1e8a61ae6bba1d887973ef.jpg"
          alt="Home"
          className="fbImg"
        />
        <span className="fbName">APartHotel Stare Miasto</span>
        <span className="fbCity">Madrid</span>
        <span className="fbPrice">Starting From $120</span>
        <div className="fbRating">
          <Button>8.9</Button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fbItem">
        <img
          src="https://i.pinimg.com/736x/5f/2e/6c/5f2e6c78db1e8a61ae6bba1d887973ef.jpg"
          alt="Home"
          className="fbImg"
        />
        <span className="fbName">APartHotel Stare Miasto</span>
        <span className="fbCity">Madrid</span>
        <span className="fbPrice">Starting From $120</span>
        <div className="fbRating">
          <Button>8.9</Button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fbItem">
        <img
          src="https://i.pinimg.com/736x/5f/2e/6c/5f2e6c78db1e8a61ae6bba1d887973ef.jpg"
          alt="Home"
          className="fbImg"
        />
        <span className="fbName">APartHotel Stare Miasto</span>
        <span className="fbCity">Madrid</span>
        <span className="fbPrice">Starting From $120</span>
        <div className="fbRating">
          <Button>8.9</Button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fbItem">
        <img
          src="https://i.pinimg.com/736x/5f/2e/6c/5f2e6c78db1e8a61ae6bba1d887973ef.jpg"
          alt="Home"
          className="fbImg"
        />
        <span className="fbName">APartHotel Stare Miasto</span>
        <span className="fbCity">Madrid</span>
        <span className="fbPrice">Starting From $120</span>
        <div className="fbRating">
          <Button>8.9</Button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
