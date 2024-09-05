import React from "react";
import "./HomeCards.css";
import { Arraylist } from "../../utils/data/categories";

const HomeCards = () => {
  return (
    <div className="HomeCards-container">
      <h1>Categories</h1>
      <div className="cardLists">
        {Arraylist.map((list) => (
          <div className="card">
            <img src={list.image} alt="" />
            <h4>{list.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
