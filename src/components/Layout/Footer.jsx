import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/white.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer-main">
      <div className="footerFirst">
        <img src={logo} alt="" />
        <h2>DRIVE WITH <br /> CONFIDENCE</h2>
      </div>
      <div className="FooterContact">
        <h2>Contact</h2>
        <div>
          <div className="footerIcons">
            <FaInstagram className="icon" />
            <p>Golden Extreme</p>
          </div>
          <div className="footerIcons">
            <FaWhatsapp  className="icon"/>
            <p>Golden Extreme</p>
          </div>
          <div className="footerIcons">
            <FaFacebook className="icon" />
            <p>Golden Extreme</p>
          </div>
          <div className="footerIcons">
            <FaEnvelope  className="icon"/>
            <p>Golden Extreme</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
