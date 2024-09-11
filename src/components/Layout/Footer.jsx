import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/white.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer-main">
      <div className="footerFirst">
        <img src={logo} alt="" />
        <h1 className="drivefooter">
          DRIVE WITH <br /> CONFIDENCE
        </h1>
      </div>
      <div className="QuickLinks">
        <h2>Quick Links</h2>
        {/* <br /> */}
        <Link to={"/"}>
          <h4>Home</h4>
        </Link>
        <Link to={"/about"}>
          <h4>About US</h4>
        </Link>
        <Link to={"/service"}>
          <h4>Services</h4>
        </Link>
        <Link to={"/contact"}>
          <h4>Contact Us</h4>
        </Link>
      </div>
      <div className="FooterContact">
        <h2>Follow us on</h2>
        {/* <h3></h3> */}
        <div className="footerIcons">
          <div className="iconList">
            {/* <div className="footerIcons"> */}
            <a href="https://www.instagram.com/"  target="_blank">
              <FaInstagram className="footicon" />
            </a>
            {/* <p>Golden Extreme</p> */}
            {/* </div> */}
            {/* <div className="footerIcons"> */}
            <FaWhatsapp className="footicon" />
            {/* <p>Golden Extreme</p> */}
            {/* </div> */}
            {/* <div className="footerIcons"> */}
            <a href="https://www.facebook.com/share/D8jPBFsDeLo2aAPG/?mibextid=qi2Omg"  target="_blank">
              <FaFacebook className="footicon" />
            </a>
            {/* <p>Golden Extreme</p> */}
            {/* </div> */}
            {/* <div className="footerIcons"> */}
            <a href="mailto:info@goldenextreme.com" target="_blank">
              <FaEnvelope className="footicon" />
            </a>
            {/* <p>Golden Extreme</p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="ShortCutLinks">
        <a href="https://wa.me/+971504868799/?text=let me know more about *Golden Tyres*">
          <FaWhatsapp />
        </a>
        {/* <FaWhatsapp />
        <FaWhatsapp /> */}
      </div>
    </div>
  );
};

export default Footer;
