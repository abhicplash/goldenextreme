import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo/white.png";

const Navbar = () => {
  const [view, setView] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <img src={logo} alt="logo" />
        <ul className="list1">
          <li>home</li>
          <li>about us</li>
          <li>Services</li>
          <li>contact us</li>
        </ul>
        {view ? (
          <div className="list2">
            <div className="NavMenuItem">home</div>
            <div className="NavMenuItem">about us</div>
            <div className="NavMenuItem">Services</div>
            <div className="NavMenuItem">contact us</div>
          </div>
        ) : null}
        <GiHamburgerMenu
          className="burger"
          onClick={() => {
            setView(!view);
          }}
        />
        <FaPhoneAlt className="icon" />
      </div>
    </>
  );
};

export default Navbar;
