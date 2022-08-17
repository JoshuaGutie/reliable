import React, { Component, useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png"
import { useSpring, animated as a} from 'react-spring'



function Links() {
  const props = useSpring({
    to: { opacity: 1, y:0 },
    from: { opacity: 0, y:150 },
    delay: 800,
  })

  return <a.div style={props} class="topnav">
          
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
</a.div>
}
class Nav extends Component {
  render() {
    return (
      <div className="navContainer">
        <img src={logo} alt="logo" className="logo"/>
        <Links/>
      </div>
    );
  }
}

export default Nav;
