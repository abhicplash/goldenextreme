import React from "react";
import Layout from "../Layout/Layout";
import "./Home.css";
import logo from "../../assets/logo/white-removebg-preview.png";
import HomeCards from "../Layout/HomeCards";

const Home = () => {
  return (
    <Layout>
      <div className="home-conatiner">
        <div className="home-details">
          <img src={logo} alt="logo" />
          <div className="home-details-left">
            <h1>
              Drive with confidence <br />
            </h1>
            <p>
              "Tires aren't just about performance—they ensure safety, enhance
              efficiency, and provide peace of mind on every drive."
            </p>
            {/* <div className="btncover"> */}
            <button>Explore </button>
            {/* </div> */}
          </div>
        </div>
      </div>
      <HomeCards />
    </Layout>
  );
};

export default Home;
