import React, { Component } from "react";
import "../App.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://media.istockphoto.com/photos/roofer-picture-id451887741?s=612x612",
  "https://media.istockphoto.com/photos/general-contractor-installing-new-roof-picture-id979361764?s=612x612",
  "https://media.istockphoto.com/photos/roof-repair-construction-worker-roofer-man-roofing-security-rope-picture-id1175090625?s=612x612",
];

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <div className="outer">
            <div className="inner">
              <p>Reliable Roofing and Repairs ATX LLC</p>{" "}
            </div>
          </div>
        </div>
        {/* end header*/}
        <div className="menu">
          <div class="topnav">
            <a class="active">About</a>
            <a>Services</a>
            <a>Contact Us</a>
            <a>Promotions</a>
            <a>Reviews</a>
          </div>
          {/*End of navigation bar // start of slideshow */}
          <div className="slide-container">
            <Fade>
              <div className="each-fade">
                <img src={fadeImages[0]} />
              </div>
              <div className="each-fade">
                <img src={fadeImages[1]} />
              </div>
              <div className="each-fade">
                <img src={fadeImages[2]} />
              </div>
            </Fade>
          </div>
          {/*End of slideshow// start info images */}
          <div className="info-container">
              
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
