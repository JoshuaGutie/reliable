import React, { Component } from "react";
import "./css/reviews.css";
import Footer from "./Footer";
import Rev from "./Rev";

class Review extends Component {
  render() {
    return (
      <div className="acontainer">
        <div className="rcontainer">
          <Rev />
        </div>
      </div>
    );
  }
}

export default Review;
