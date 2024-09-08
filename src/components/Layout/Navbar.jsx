import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo/white.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [view, setView] = useState(false);

  return (
    <>
      <div className="navbar-container">
        
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <ul className="list1">
          <Link to={"/"}>
            <li>home</li>
          </Link>
          <Link to={"/About"}>
            <li>about us</li>
          </Link>
          <Link>
            <li>Services</li>
          </Link>
          <Link to={"/contact"}>
            <li>contact us</li>
          </Link>
        </ul>
        {view ? (
          <div className="list2">
            <Link to={"/"}>
              <div className="NavMenuItem">home</div>
            </Link>
            <Link to={"/about"}>
              <div className="NavMenuItem">about us</div>
            </Link>
            <div className="NavMenuItem">Services</div>
            <Link to={"/contact"}>
              <div className="NavMenuItem">contact us</div>
            </Link>
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
