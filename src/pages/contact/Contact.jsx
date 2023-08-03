import React from "react";
import {
  FaDiscord,
  FaEnvelopeOpen,
  FaLinkedin,
  FaTwitch,
} from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        <span>Contact </span>me
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">No need to be shy!</h3>
          <p className="contact__description">
            I don't bite! Feel free to contact me via my email that I listed
            below and/or visit any of the provided socials!
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Email me</span>
                <h4 className="info__desc">jay.peura@hotmail.com</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://twitch.tv/ailurah"
              className="contact__social-link"
            >
              <FaTwitch />
            </a>
            <a
              href="https://www.linkedin.com/in/jay-peura-0ba446185/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
