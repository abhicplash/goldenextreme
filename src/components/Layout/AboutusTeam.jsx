import React from "react";
import "./AboutusTeam.css";
import manager from "../../assets/aboutteam/manager.JPG";
import { aboutTeam } from "../../utils/data/TeamData";

const AboutusTeam = () => {
  return (
    <div className="aboutusTeam">
      <div className="aboutteamtop">
        <h2 className="ourTeam">Our Team</h2>
        <p className="teampara">
          Experienced industry professionals leading the way. Technicians
          trained to the highest standards. Friendly staff dedicated to helping
          you. Together, we'll get you back on the road quickly and safely{" "}
        </p>
      </div>
      <div className="team-member-details">
        {aboutTeam.map((list, index) =>
          <div key={index}>
            <img className="memberphoto" src={list.image} alt="" />
            <h3 className="memberName">
              {list.memberName}
            </h3>
            <h4 className="mamberPosition">
              {list.Position}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutusTeam;
