import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Coding</small>
            </article>

            <a
              href="https://www.codecademy.com/users/Jonathanwander/achievements"
              target="_blank"
              rel="noreferrer"
            >
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>40+ completed</small>
            </article>
            </a>
          </div>

          <p>
            I'm a Sydney based Full Stack developer focused on
            writing clean code. I am passionate about
            building excellent software that improves the lives of those
            around me.
          </p>

          <div className="button">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>;
}

export default About;
