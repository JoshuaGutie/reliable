import React, { Component } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";

class MobileNav extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
    this.createText = this.createText.bind(this);
  }

  createText() {
    console.log(this.state.isShow);
    if (this.state.isShow === false) {
      this.setState({ isShow: true });
    } else {
      this.setState({ isShow: false });
    }
  }

  render() {
    return (
      <div className="mobileC">
        <div class="mobileNav">
          <img src={logo} alt="logo" className="logo" />

          <Fab style={{ margin: "auto 0 auto 0" }}>
            <MenuIcon
              fontSize="large"
              aria-label="save"
              onClick={this.createText}
            />
          </Fab>
        </div>
        {this.state.isShow && (
          <div className="mobileLinks">
            {
              <NavLink
                onClick={this.createText}
                exact
                activeClassName="active"
                to="/"
              >
                Home
              </NavLink>
            }
            {
              <NavLink
                onClick={this.createText}
                activeClassName="active"
                to="/services"
              >
                Services{" "}
              </NavLink>
            }
            {
              <NavLink
                onClick={this.createText}
                activeClassName="active"
                to="/contact"
              >
                Contact{" "}
              </NavLink>
            }
            <NavLink
              onClick={this.createText}
              activeClassName="active"
              to="/reviews"
            >
              About{" "}
            </NavLink>
            <NavLink activeClassName="active" to="/gallery">
              Gallery{" "}
            </NavLink>
          </div>
        )}
      </div>
    );
  }
}

export default MobileNav;
