import React, { Component } from "react";
import "../App.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Footer from "./Footer";

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
                <p>Reliable Roofing and Repairs ATX LLC</p>{" "}
                <div className="socials">
                  <a href="https://www.yelp.com/biz/reliable-roofing-and-repairs-leander-3">
                    <div id="yelp" className="icons"></div>
                  </a>
                  <a href="https://www.facebook.com/reliableroofingandrepairs512/">
                    {" "}
                    <div id="facebook" className="icons"></div>
                  </a>
                  <a href="https://www.linkedin.com/in/reliable-roofing-and-repairs-atx-llc-ba9396218/">
                    <div id="linkedin" className="icons"></div>
                  </a>
                  <a href="https://www.bbb.org/us/tx/volente/profile/roofing-contractors/reliable-roofing-repairs-0825-1000134173">
                    <div id="bbb" className="icons"></div>
                  </a>
                </div>
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
              <p>Our roofing options are top-of-the-line, using the highest grade of products and techniques to make installation and clean-up as easy as possible for the homeowners that turn to us for services. Your roof is one of the most important parts of your home, and it affects almost every other aspect of the building. When you need a roofing company that will come quickly and fix the problem efficiently, call us first.<br></br><br></br>We also offer residential roof maintenance plans to help you stay on top of your roof repairs before they become major problems. Contact us for more information.</p>
            </div>
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
          </div>
          {/*End of slideshow// start info images */}
          <div className="info-container">
            <div className="info" id="img1"></div>
            <div className="info" id="img2"></div>
            <div className="info" id="img3"></div>
          </div>
          <div className="p-container">
            <p className="p-info">
              {" "}
              We specialize in tile, asphalt, and flat roofs. With over 15 years
              of expirience!{" "}
            </p>
            <p className="p-info">
              {" "}
              We handle all types of roof repairs from fixing that little leak
              to replacing the entire roof.
            </p>
            <p className="p-info">
              {" "}
              From gutters and painting, to paperwork processing we can help!{" "}
            </p>
          </div>
        </div>
        <div className="extra">
          <div className="extra-head">
            <h3>
              <b>
                A RELIABLE TEAM <br></br>TO ENSURE <br></br>A RELAIBLE ROOF
              </b>
            </h3>
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
