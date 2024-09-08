import React from "react";
import "./About.css";
import Layout from "../Layout/Layout";
import HomeAbout from "../Layout/HomeAbout";
import tyreImg from "../../assets/Golden-Extreme/About/aboutImage.png";
import AboutusTeam from "../Layout/AboutusTeam";

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <div className="Page-Top">
          <h2>About Us</h2>
        </div>
        <HomeAbout image={tyreImg} />
        <AboutusTeam />
      </div>
    </Layout>
  );
};

export default About;
