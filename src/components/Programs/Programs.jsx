import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData.jsx";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* header  */}
      <div className="programs-header">
        <span className="stroke-text">Explore Our </span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-catagories">
        {programsData.map((program, index) => {
          return (
            <div className="category" key={index}>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span> <img src={RightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
