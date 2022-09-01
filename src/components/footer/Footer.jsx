import React from "react";
import "./footer.css";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return <footer id="footer">
      <a href="#footer" className="footer__logo">
        Jonathan Wander
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Header</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portofolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/jonathanwwander" target="_blank" rel="noreferrer">
          <BsLinkedin/>
        </a>
        <a href="https://twitter.com/Johanna_Tandrew" target="_blank" rel="noreferrer">
          <BsTwitter/>
        </a>
    </div>
    
    <div className="footer__copyright">
      <small>&copy; Jonathan Wander. All rights reserved.</small>
    </div>
    </footer>;
}

export default Footer;
