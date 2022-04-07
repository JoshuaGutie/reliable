import React, { Component } from "react";
import "../App.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Footer from "./Footer";
import insol from "./images/insol.png"
import repair from "./images/repair.png"
import finish from "./images/finish.png"
import rotten from "./images/rotten.png"
import body from "./images/body.png"
import logo from "./images/logo.png"

const fadeImages = [
  "https://media.istockphoto.com/photos/roofer-picture-id451887741?s=612x612",
  "https://media.istockphoto.com/photos/general-contractor-installing-new-roof-picture-id979361764?s=612x612",
  "https://media.istockphoto.com/photos/roof-repair-construction-worker-roofer-man-roofing-security-rope-picture-id1175090625?s=612x612",
];

class Home extends Component {
  render() {
    return (
      <div className="App">
        {/*Start nav*/}

        <div className="menu">
          {/* end nav*/}
          {/*Start header */}
          <div className="header">
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <div className="outer">
              <div className="inner">
                <p>Arise Roofing and Repairs ATX LLC</p>{" "}
                <img className="logo" src={logo} alt="logo"/>
              </div>
            </div>
          </div>
          {/* end header*/}

          {/*start of slideshow */}
          <div className="duo">
            <div className="duo-info">
              <h2>LEAVE YOUR ROOF WITH ONLY THE MOST RELIABLE</h2>
              <ul>
                <li>Free estimates</li>
                <li>Free security system instalation</li>
                <li>Free upgrades</li>
                <li>Free Sloppy Toppy</li>
              </ul>
              <p>
                Over 15 years of reliable work we have under our belt here at
                reliable. You can rely on us to relay the reliable info about ur
                roof lol?6
              </p>
            </div>
            <div className="third">
              <h1>LEAVE IT TO US</h1>
              <p>Our roofing options are top-of-the-line, using the highuickly and fix the problem efficiently, call us first.<br></br><br></br>We also offer residential roof maintenance plans to help you stay on top of your roof repairs before they become major problems. Contact us for more information.</p>
            </div>
            <div className="slide-container">
              <Fade>
                <div className="each-fade">
                  <img alt="Rotten" src={rotten} />
                </div>
                <div className="each-fade">
                  <img alt="insolation" src={insol} />
                </div>
                <div className="each-fade">
                  <img alt="repair" src={repair} />
                </div>
                <div className="each-fade">
                  <img alt="finish" src={finish} />
                </div>
              </Fade>
            </div>
          </div>
          {/*End of slideshow// start info images */}
          <div className="p-container">
            <p className="p-info">
              {" "}
              roofing options are top-of-the-line, using the highest grade of products and techniques to make installation and clean-up as easy as possible for the homeowners that turn to us for services. Your roof is one of the most important parts of your home, and it affects almost every other aspect of the building. When you need a roofing company that will come quickly and fix the problem efficiently, call us first.<br></br><br></br>We also offer residential roof maintenance plans to help you stay on top of your roof repairs before they become major problems. Contact us for more information{" "}
            </p>
          </div>
          <div className="info-container">
            <img className="info" alt="body" src={body} />
          </div>
        </div>
        <div className="extra">
          <div className="extra-head">
            <p className="slogan">
              <b>
                A RELIABLE TEAM <br></br>TO ENSURE <br></br>A RELAIBLE ROOF
              </b>
            </p>
          </div>
          <div className="extra-p">
            <p>
              When you need trusted and affordable roofing services, look no
              further than Fults Roofing Company. We offer comprehensive roofing
              services that include:
            </p>
            <p>
              New construction roof installation Emergency storm damage roof
              repairs Residential and commercial roof repairs Shingle, metal or
              flat roof replacements Roof repair insurance claim assistance
            </p>
            <p>
              No matter what you need, our team can handle it. Contact Fults
              Roofing Company today for emergency roofing services in Austin &
              Hutto, TX.
            </p>
          </div>
        </div>
        {/*End of images// start of footer */}
        <Footer />
      </div>
    );
  }
}

export default Home;
