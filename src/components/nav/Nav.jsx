import React, {useState} from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { RiFolderOpenLine } from "react-icons/ri";
import { FiSettings } from 'react-icons/fi'

function Nav() {

  const [activeNav, setActiveNav] = useState('header');

  return <nav>
      <a href="#header" onClick={() => setActiveNav("header")} className={activeNav === "header" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("about")} className={activeNav === "about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav("experience")} className={activeNav === "experience" ? "active" : ""}>
        <FiSettings />
      </a>
      <a href="#portofolio" onClick={() => setActiveNav("portofolio")} className={activeNav === "portofolio" ? "active" : ""}>
        <RiFolderOpenLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav("contact")} className={activeNav === "contact" ? "active" : ""}>
        <BsChatDots />
      </a>
    </nav>;
}

export default Nav;
