import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img className="featuredImg" src="https://media.istockphoto.com/id/1289215387/photo/austin-congress-street-bridge-and-texas-capitol-building.jpg?s=612x612&w=0&k=20&c=y4l2u5CyDboGa0IJa3OPpcMIL5oOD_caaPbh4Sd9nsE="/>
        <div className="FeaturedTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img className="featuredImg" src="https://plus.unsplash.com/premium_photo-1697729879723-1d5e65c0e9e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVibGluJTIwaXJlbGFuZHxlbnwwfHwwfHx8MA%3D%3D"/>
        <div className="FeaturedTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img className="featuredImg" src="https://cdn.britannica.com/09/153409-050-D97E6581/coast-Great-Barrier-Reef-Australia-Queensland.jpg"/>
        <div className="FeaturedTitles">
            <h1>Reno</h1>
            <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
