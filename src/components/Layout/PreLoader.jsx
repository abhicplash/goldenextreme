import React from "react";
import "./PreLoader.css";
import logo from "../../assets/logo/preload.png";

const PreLoader = () => {
  return (
    <div className="pre-loader-container">
      <img src={logo} alt="" />
      {/* <em> */}
      <h1>
        <span>golden</span>
        <span>extreme</span>
      </h1>

      {/* </em> */}
    </div>
  );
};

export default PreLoader;
