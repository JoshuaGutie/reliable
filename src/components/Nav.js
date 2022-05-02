import React, { Component } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import social from "./images/social.png"


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
          {
            <NavLink activeClassName="active" to="/contact">
              Contact{" "}
            </NavLink>
          }
            <NavLink activeClassName="active" to="/reviews">
              About{" "}
            </NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
