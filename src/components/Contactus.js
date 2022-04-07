import React, { Component } from "react";
import "./css/contactus.css";
import Footer from "./Footer";
import logo from "./images/logo.png";
import Email from "./cards/Email";
import phone from "./images/phone.png";
import Button from "@mui/material/Button";

class Contactus extends Component {
  state = {
    textToCopy: "5128455283",
  };
  render() {
    return (
      <div className="containerc">
        <div className="logoContainer">
          {" "}
          <img
            src={logo}
            alt="logo"
            style={{
              width: "auto",
              height: "auto",
              alignSelf: "flex-end",
            }}
          />
        </div>
        <div className="cBody">
          <div className="banner">
            <h1>Get in touch</h1>
            <p>
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us.
            </p>
          </div>

          <div
            className="phoneEmail"
            style={{
              gridArea: "phone",
            }}
          >
            <img src={phone} className="img" />
            <h3> Talk To Sales</h3>
            <p>
              Interested in receiving an estimate? Just pick up the phone to
              speak with an estimator{" "}
            </p>
            <span>(512)845-5283</span>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(this.state.textToCopy);
              }}
              className="copy"
              variant="outlined"
              style={{
                color: "#242424",
                borderColor: "#242424",
                margin: "25px",
              }}
            >
              Copy To Clipboard
            </Button>
          </div>
          <Email />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contactus;
