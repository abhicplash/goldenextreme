import React from "react";
import "./Services.css";
import Layout from "../Layout/Layout";
import { Arraylist } from "../../utils/data/categories";

const Services = () => {
  return (
    <Layout>
      <div className="Page-Top">
        <h2>Services</h2>
      </div>
      <div className="service-main">
        <h1 className="servicehead">We Provides</h1>
        <p className="servicepara">
          We offer high-performance tires for speed and agility. Durable
          off-road tires for rugged terrain and adventure. Eco-friendly tires
          for a smoother, fuel-efficient ride. Premium comfort tires for a quiet
          and comfortable journey
        </p>
        <div className="servicesLst">
          {Arraylist.map(tyre =>
            <div className="tireCard">
              <img src={tyre.image} alt="" />
              <h3>
                {tyre.name}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, sed!
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
