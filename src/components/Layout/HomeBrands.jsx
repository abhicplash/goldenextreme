import React from "react";
import "./HomeBrands.css";
import { tyreBrands } from "../../utils/data/tyresList";

const HomeBrands = () => {
  return (
    < div className="homeBrands-container">
      <h1> Brands</h1>
      <div className="brands-cover">
        {tyreBrands.map((tyre, index) => (
          <div key={index} className="brandcardList">
            {/* <h1>{tyre.name}</h1> */}
            <img src={tyre.image} alt={tyre.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBrands;
