import React, { Component } from "react";
import "./css/services.css";
import camera from "./images/camera.png";
import Types from "./cards/Types";
import Repairs from "./cards/Repairs";
import Other from "./cards/Other";
import Footer from "./Footer.js";
import title from "./images/title.png";
import { useSpring, animated as a } from 'react-spring'


function Cards() {
  const props = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 150 },
    delay: 500,
  });

  return (
    <a.div style={props} className="infoContainer">
      <Types />
      <Repairs />
      <Other />
    </a.div>
  );
}
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
<Cards />
        <Footer />
      </div>
    );
  }
}

export default Services;
