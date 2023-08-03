import React from "react";
import { skills } from "../data/data";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <CircularProgressbar
                strokeWidth={6.5}
                text={`${percentage}%`}
                value={percentage}
                styles={buildStyles({
                  pathColor: "blueviolet",
                  textColor: "blueviolet",
                  strokeLinecap: "butt",
                })}
              />
            </div>

            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
