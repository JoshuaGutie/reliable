import React, { Component } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <div class="topnav">
          {
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          }
          {
            <NavLink activeClassName="active" to="/services">
              Services{" "}
            </NavLink>
          }
          <a>Contact Us</a>
          <a>Promotions</a>
          <a>Reviews</a>
        </div>
      </div>
    );
  }
}

export default Nav;