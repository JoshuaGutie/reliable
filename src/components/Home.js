import React, { Component } from "react";
import "../App.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import insol from "./images/insol.png";
import repair from "./images/repair.png";
import finish from "./images/finish.png";
import rotten from "./images/rotten.png";
import body from "./images/body.png";
import logo from "./images/logo.png";

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
                <p>Arbiiter Roofing and Repairs</p>{" "}
                <img className="logo" src={logo} alt="logo" />
              </div>
            </div>
          </div>
          {/* end header*/}

          {/*start of slideshow */}
          <div className="duo">
            <div className="duo-info">
              <h2>Professional and Reliable Roofing Contractors</h2>
              <ul>
                <li>Free Estimates</li>
                <li>Professional and Courteous Service</li>
                <li>Upgrades Available</li>
                <li>Full Inspection of Every Job Upon Completion</li>
              </ul>
              <p>
                We are a family owned business with over 44 years of experience.
                We strive to provide only the most exceptional service to ensure
                customer satisfaction.{" "}
              </p>
            </div>
            <div className="third">
              <h1>We Will Rise To The Challenge</h1>
              <p>
                With our full documentation and photos we will ensure full
                confidence on the work that was performed on your roof.<br></br>
                <br></br>We also offer residential roof maintenance plans to
                help you stay on top of your roof repairs before they become
                major problems. Contact us for more information.
              </p>
              <NavLink
                style={{
                  color: "#063d74",
                  textDecoration: "none",
                  fontSize: "30px",
                  fontWeight: "500",
                }}
                to="/contact"
              >
                Contact us{" "}
              </NavLink>{" "}
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
              roofing options are top-of-the-line, using the highest grade of
              products and techniques to make installation and clean-up as easy
              as possible for the homeowners that turn to us for services. Your
              roof is one of the most important parts of your home, and it
              affects almost every other aspect of the building. When you need a
              roofing company that will come quickly and fix the problem
              efficiently, call us first.<br></br>
              <br></br>We also offer residential roof maintenance plans to help
              you stay on top of your roof repairs before they become major
              problems.{" "}
              <NavLink
                style={{
                  color: "#063d74",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                to="/contact"
              >
                Contact us{" "}
              </NavLink>{" "}
              for more information{" "}
            </p>
          </div>
          <div className="info-container">
            <img className="info" alt="body" src={body} />
          </div>
        </div>
        <div className="extra">
          <div className="extra-head">
            <p className="slogan">
              <b style={{ textAlign: "center" }}>
                A Reliable Team<br></br> To Ensure A Reliable Roof.
              </b>
            </p>
          </div>
          <div className="extra-p">
            <p>
              When you need trusted and affordable roofing services, look no
              further than Arbiter Roofing Company. We offer comprehensive roofing
              services that include:
            </p>
            <p>Roof installation,</p>
            <p>
              No matter what you need, our team can handle it.{" "}
              <NavLink
                style={{
                  color: "#252525",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                to="/contact"
              >
                Contact{" "}
              </NavLink>{" "}
              Arbiter Roofing Company today for emergency roofing services in
              Austin.
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
