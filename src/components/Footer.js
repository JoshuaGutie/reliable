import "./css/footer.css";
import { NavLink } from "react-router-dom";
import titleBlack from "./images/titleBlack.svg"



function Footer() {
    return ( 
        <div className="footer">

            <div className="flexibleInfo">
                <img src={titleBlack} alt='title' className="titleBlack"/>
                <p className="footerSpan">When you need trusted and affordable roofing services, look no further than Arbiter Roofing Company.</p>
            </div>
            <div className="footerLinks">
                <span className="footerSpan">LINKS</span>
            {
            <NavLink exact to="/">
              Home
            </NavLink>
          }
                    {
            <NavLink exact activeClassName="active" to="/services">
              Services
            </NavLink>
          }
                    {
            <NavLink exact activeClassName="active" to="/contact">
              Contact
            </NavLink>
          }
                    {
            <NavLink exact activeClassName="active" to="/reviews">
              About
            </NavLink>
          }
            </div>
            <div className="footerContact">
          <span className="footerSpan">Contact</span>
          <p className="footerSpan">Email: Josh.gvtie@gmail.com</p>

            </div>

        </div>
     );
}

export default Footer;