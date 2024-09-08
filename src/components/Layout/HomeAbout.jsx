import React from "react";
import "./HomeAbout.css";


const HomeAbout = ({image}) => {
  return (
    <div className="HomeAbout-container">
      <img src={image} alt="" />
      <div className="aboutDetails">
        <h1>About us</h1>
        <p>
          Welcome to <span className="GoldenExtreme"> Golden Extreme </span>, where innovation meets reliability. Since
          [Year of Establishment], we've been dedicated to delivering
          high-quality tires for every road and terrain. Our extensive range
          combines cutting-edge technology with durability and performance. We
          also offer eco-friendly options, ensuring sustainability without
          compromising quality. Our expert team provides personalized service to
          find the perfect tire for your vehicle.  
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
