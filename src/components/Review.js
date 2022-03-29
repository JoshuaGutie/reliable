import React, { Component } from "react";
import "./css/reviews.css";
import Footer from "./Footer";
import Rev from "./Rev";
import logo from "./images/logo.png";
import acover from "./images/acover.png";
import acover2 from "./images/acover2.png";
import acover3 from "./images/acover3.png";
import star from "./images/star.png";

class Review extends Component {
  render() {
    return (
      <div>
      <div className="acontainer">
        <div className="rcontainer">
          <Rev />
        </div>
        <div className="icontainer">
          <div className="cover">
            <img
              src={logo}
              alt="logo"
              style={{
                width: "200px",
                height: "200px",
                alignSelf: "center",
              }}
            />
            <h4
              style={{
                color: "#DFDFDF",
                fontSize: "30px",
                margin: "0px",
                alignSelf: "center",
              }}
            >
              Know More
            </h4>
            <h1
              style={{
                color: "#15908e",
                fontSize: "70px",
                margin: "0px",
                alignSelf: "center",
              }}
            >
              About Us
            </h1>
            <p
              style={{
                color: "#DFDFDF",
                fontSize: "20px",
                alignSelf: "center",
                textAlign: "center",
                width: "600px",
              }}
            >
              Nisi aliquip culpa sint incididunt labore commodo veniam. Duis
              sunt nisi qui mollit voluptate excepteur et sunt anim deserunt
              dolore.
            </p>
          </div>
          {/*End of cover photo and start of 6 info boxes */}

          <div className="sixbox">
            <img
              src={acover}
              alt="cover"
              className="covers"
              style={{
                gridArea: "i3",
                height: "100%",
              }}
            />

            <img
              src={acover2}
              alt="cover"
              className="covers"
              style={{
                gridArea: "i1",
                height: "100%",
              }}
            />

            <img
              src={acover3}
              alt="cover"
              className="covers"
              style={{
                gridArea: "i2",
                height: "100%",
              }}
            />

            {/*all 3 photos for 6 boxes*/}

            <div
              className="reviewp"
              style={{
                gridArea: "p1",
              }}
            >
              <h3>Our Expirience</h3>
              <span> Serving the greater austin area for 20 years</span>
              <span>
                {" "}
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco"
              </span>
              <img src={star} alt="stars" style={{
                width:"300px", alignSelf: "center"
              }} />
            </div>

            <div
              className="reviewp"
              style={{
                gridArea: "p2",
              }}
            >
              <h3>Our Expirience</h3>
              <span> Serving the greater austin area for 20 years</span>
              <span>
                {" "}
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco"
              </span>
              <span>
                {" "}
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco
              </span>
            </div>
            <div
              className="reviewp"
              style={{
                gridArea: "p3",
              }}
            >
              <h3>Our Expirience</h3>
              <span> Serving the greater austin area for 20 years</span>
              <span>
                {" "}
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco"
              </span>
              <span>
                {" "}
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default Review;
