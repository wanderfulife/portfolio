import React from 'react'
import './portofolio.css'
import NFT from "../../assets/nft.webp";
import TWEET from "../../assets/twitter.webp";
import TINDER from "../../assets/tinder.webp";



const data = [
  {
    id: 1,
    image: TWEET,
    title: "Twitter",
    subtitle: "React / Next.js / Sanity",
    github: "https://github.com/wanderfulife/Twitter",
    demo: "https://twitter.com/home"
  },
  {
    id: 2,
    image: NFT,
    title: "The Squirrelz",
    subtitle: "React / Solidity",
    github: "https://github.com/wanderfulife/NFTCollectible",
    demo: "https://thesquirrelz.herokuapp.com/"
  },
  {
    id: 3,
    image: TINDER,
    title: "Tinder",
    subtitle: "React Native / Firebase",
    github: "https://github.com/wanderfulife/MPV2",
    demo: "https://github.com/wanderfulife/MPV2"
  }
  
];


function Portofolio() {
  return <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portofolio__container">

      {data.map(({ id, image, title,subtitle, github, demo }) => {
        return <article className="portofolio__item" key={id}>
            <div className="portofolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>
              {title}
            </h3>
            <small className="text-light">
              {subtitle}
            </small>
            <div className="portofolio__items-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>;
      })}
      </div>
    </section>;
}

export default Portofolio