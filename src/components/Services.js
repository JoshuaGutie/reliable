import React, { Component } from "react";
import "./css/services.css";
import camera from "./images/camera.png";
import Types from "./cards/Types";
import Repairs from "./cards/Repairs";
import Other from "./cards/Other";
import Footer from "./Footer.js";
import title from "./images/title.png";

class Services extends Component {
  render() {
    return (
      <div className="container">
        <div className="logoContainer">
          <img
            src={title}
            alt="logo"
            style={{
              width: "auto",
              height: "auto",
              alignSelf: "flex-end",
            }}
          />
        </div>
        <div className="banner">
          <h1>We are here to help</h1>
          <p>
            Promotion: A FREE security system or H-E-B gift card with every
            Re-roof
          </p>
          <img src={camera} alt="Camera" className="camera" />
        </div>
        <div className="infoContainer">
          <Types />
          <Repairs />
          <Other />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;
