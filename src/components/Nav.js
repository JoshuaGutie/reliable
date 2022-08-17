import React, { Component } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png"

class Nav extends Component {
  render() {
    return (
      <div className="navContainer">
        <img src={logo} alt="logo" className="logo"/>
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
