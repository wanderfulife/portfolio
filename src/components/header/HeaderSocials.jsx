import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";


function HeaderSocials() {
  return <div className="header__socials">
      <a href="https://www.linkedin.com/in/jonathanwwander" target="-blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/wanderfulife" target="-blank">
        <BsGithub />
      </a>
    </div>;
}

export default HeaderSocials