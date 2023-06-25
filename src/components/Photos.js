import React, { Component } from "react";
import Footer from "./Footer";
import "./css/reviews.css";
import acover2 from "./images/acover2.png"
import debris1 from "./images/debris1.png";
import debris2 from "./images/debris2.png";
import debris3 from "./images/debris3.png";
import clay2 from "./images/clay2.png";
import clay3 from "./images/clay3.png";
import clay4 from "./images/clay4.png";
import clay5 from "./images/clay5.png";



function Photos() {
  return (
    <div className="galleryContainer">
      <div className="galleryHeader">
        <h1>Our past work!</h1>
      </div>
      <div className="cardContainer">
        <div className="galCard">
          <div className="galPhotos">
            <img src={debris1} className="img" />
            <img src={debris2} className="img" />
            <img src={debris3} className="img" />
          </div>
          <h3>Repair name</h3>
          <span className="desc">
            {" "}
            Home owner maintainance via debris cleanup and sealant repair
          </span>
        </div>

        <div className="galCard">
          <div className="galPhotos">
            <img src={clay2} className="img" />
            <img src={clay3} className="img" />
            <img src={clay4} className="img" />
            <img src={clay5} className="img" />

          </div>
          <h3>Repair name</h3>
          <span className="desc">
            {" "}
            Clay roof repair through replacement of quality underlayment and carpentry necessary
          </span>
        </div>

        
      </div>
      <Footer />
    </div>
  );
}

export default Photos;
