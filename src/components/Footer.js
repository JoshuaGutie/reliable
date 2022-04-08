import React, { Component } from "react";
import "../App.css";
import logo from "./images/logo.png"

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div id="logo">
          <img src={logo} alt="logo" className="logoF"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
