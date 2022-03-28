import React, { Component } from "react";
import "./css/reviews.css";
import Footer from "./Footer";
import stars from "./images/stars.png";

class Review extends Component {
  state = {};
  render() {
    return (
      <div className="rcontainer">
        {/* first section */}

        <div className="section">
          <div className="white">
            <h1>Joe smoe</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <p className="published">
              Published on: <b>4/23/19</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default Review;
