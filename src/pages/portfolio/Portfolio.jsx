import React from "react";
import { projects } from "../../data/data";
import ProjectItem from "../../components/ProjectItem";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Projects</span>
      </h2>
      <div className="portfolio__container container grid">
        {projects.map((item) => {
          return <ProjectItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
