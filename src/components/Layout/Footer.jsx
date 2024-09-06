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
        <h2>
          DRIVE WITH <br /> CONFIDENCE
        </h2>
      </div>
      <div className="FooterContact">
        <h2>Contact</h2>
        <div>
          <div className="footerIcons">
            <FaInstagram className="footicon" />
            <p>Golden Extreme</p>
          </div>
          <div className="footerIcons">
            <FaWhatsapp className="footicon" />
            <p>Golden Extreme</p>
          </div>
          <div className="footerIcons">
            <FaFacebook className="footicon" />
            <p>Golden Extreme</p>
          </div>
          <div className="footerIcons">
            <FaEnvelope className="footicon" />
            <p>Golden Extreme</p>
          </div>
        </div>
      </div>
      <div className="ShortCutLinks">
        <a href="https://wa.me/+919745861800/?text=let me know more about *Abina TA*">
          <FaWhatsapp />
        </a>
        {/* <FaWhatsapp />
        <FaWhatsapp /> */}
      </div>
    </div>
  );
};

export default Footer;
