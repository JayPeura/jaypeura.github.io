import React from "react";
import Profile from "../../assets/smile.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img
        src={Profile}
        alt=""
        className="home__img"
        style={{ width: "90%" }}
      />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Jay Peura</span>
          </h1>

          <p className="home__description">
            I am a 25-year-old woman from Tampere, Finland. I focus on front-end
            development but I pretty much handle back-end as well. I am very
            passionate about programming and it shows from all my different
            projects!
          </p>

          <Link to="/about" className="button">
            More about me here{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
