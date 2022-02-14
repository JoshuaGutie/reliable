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

          <div className="red">
            <h1>John appleseed</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <p className="published">
              Published on: <b>8/23/20</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>

          <div className="white">
            <h1>Jimbo Green</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <p className="published">
              Published on: <b>2/03/20</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>
        </div>
        {/* second section */}
        <div className="section">
          <div className="red">
            <h1>Hamila Ray</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <p className="published">
              Published on: <b>2/23/11</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>

          <div className="white">
            <h1>Jordan White</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipisci Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat."
            </p>
            <p className="published">
              Published on: <b>2/03/21</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>

          <div className="red">
            <h1>Carlos Jr</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididliqua. Ut enim ad minim veniam, quis, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat."
            </p>
            <p className="published">
              Published on: <b>2/23/23</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>
        </div>

        {/* third section */}
        <div className="section">
          <div className="white">
            <h1>Antonio Brown</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aeniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat."
            </p>
            <p className="published">
              Published on: <b>1/23/21</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>

          <div className="red">
            <h1>Ben Dover</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <p className="published">
              Published on: <b>12/23/21</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>

          <div className="white">
            <h1>Dixie Normous</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </p>
            <p className="published">
              Published on: <b>2/23/22</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>
        </div>
        {/* fourth section */}
        <div className="section">
          <div className="red">
            <h1>Stella Flatt</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore , quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex magna aliqua. Ut
              enim ad minim veniam, quis ullamco laboris nisi ut aliquip ex ea
              commodo consequat."
            </p>
            <p className="published">
              Published on: <b>7/03/21</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>

          <div className="white">
            <h1>Jay Crisp</h1>
            <p className="review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <p className="published">
              Published on: <b>6/13/21</b>
            </p>
            <img src={stars} alt="stars" className="stars" />
          </div>

          <Footer />
        </div>
        <div className="rinfo">
            <h1>hello</h1>
        </div>
      </div>
    );
  }
}

export default Review;
