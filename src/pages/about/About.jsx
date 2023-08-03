import React from "react";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import Skills from "../../components/Skills";
import { resume } from "../../data/data";
import ResumeItem from "../../components/ResumeItem";
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Info</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <h2 style={{ fontSize: "20px", fontWeight: "lighter" }}>
              Description
            </h2>
            <p className="about__description">
              {" "}
              My cat M'aiq is the main target of my caretaking. I have always
              been excited about computers ever since my uncle and dad got me
              into it at a young age.
              <br />I am a self-taught programmer (over 3 years as a hobby),
              about 1 year of work experience and I am either practicing
              programming or searching for information about it almost every
              day.
              <br />I livestream on my free time or I play video games. I am a
              good team player because I play games like Divinity: Original Sin
              2, Gunfire Reborn and especially World of Warcraft where teamwork
              is really important when raiding or doing dungeons!
            </p>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>
      <div className="separator"></div>
      <section className="experience">
        <h3 className="section__subtitle subtitle__center">
          Experience and Education
        </h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "exp") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
