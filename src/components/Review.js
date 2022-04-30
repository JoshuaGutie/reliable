import React, { Component } from "react";
import "./css/reviews.css";
import Footer from "./Footer";
import Rev from "./Rev";
import logo from "./images/logo.png";
import acover from "./images/acover.png";
import acover2 from "./images/acover2.png";
import acover3 from "./images/acover3.png";
import star from "./images/star.png";
import Email from "./cards/Email";

class Review extends Component {
  render() {
    return (
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
                width: "300px",
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
              We are a dedicated and passionate team, only satisfied with perfection! Learn more about why you should choose us
            </p>
          </div>
          {/*End of cover photo and start of 6 info boxes */}

          {/*all 3 photos for 6 boxes*/}

          <div className="sixbox">
            <div
              className="reviewp"
              style={{
                gridArea: "p1",
                width:"550px"
              }}
            >
              <h3>Why Choose Arise?</h3>
              <span>
                {" "}
                We are roofing and construction experts for every roofing
                situation or problem. If your home or building has roof damage
                and you need roof repairs or complete roof replacement, we can
                help. This includes metal roofing, shingle roofs, tile roofs,
                flat roofs and more. Arise Roofing Co. is your go-to roofing contractor in
                Austin Texas.
              </span>
              <img
                src={star}
                alt="stars"
                style={{
                  width: "300px",
                  alignSelf: "center",
                }}
              />
            </div>

            <img
              src={acover2}
              alt="cover"
              className="covers"
              style={{
                gridArea: "i1",
                height: "100%",
              }}
            />

            <div
              className="reviewp"
              style={{
                gridArea: "p2",
                width:"550px"
              }}
            >
              <h3>Our Expirience</h3>
              <span> Serving the greater austin area for 40 years</span>
              <span> </span>
              <span>
                {" "}
              Owner of Arise Roofing, Jimmy Gutierrez is a second generation roofing contractor. With over 45 years of commercial, liscensed expirience, we are confident there is no challenge we will not arise to.
              </span>
            </div>
            <img
              src={acover3}
              alt="cover"
              className="covers"
              style={{
                gridArea: "i2",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
