import React, { Component } from "react";
import "./css/reviews.css";
import Footer from "./Footer";
import Rev from "./Rev";
import logo from "./images/logo.png";
import { width } from "@mui/system";

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
            <p style={{
                color: "#DFDFDF",
                fontSize: "20px",
                alignSelf: "center",
                textAlign: "center",
                width:"600px"
              }}>
              Nisi aliquip culpa sint incididunt labore commodo veniam. Duis
              sunt nisi qui mollit voluptate excepteur et sunt anim deserunt
              dolore.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
