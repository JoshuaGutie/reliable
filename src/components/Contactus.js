import React, { Component } from "react";
import "./css/contactus.css";
import Footer from "./Footer"


class Contactus extends Component {
  state = {};
  render() {
    return (
      <div className="containerc">
        <div className="logoContainer">

        </div>
        <div className="banner">
<h1>Get in touch</h1>
<p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
        </div>
          <Footer />
      </div>
    );
  }
}

export default Contactus;