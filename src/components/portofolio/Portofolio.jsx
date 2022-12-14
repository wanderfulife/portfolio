import React from 'react'
import './portofolio.css'
import NFT from "../../assets/nft.webp";
import TINDER from "../../assets/tinder.webp";
import NTFLX from "../../assets/netflix-ptflio.webp";




const data = [
  {
    id: 1,
    image: NTFLX,
    title: "Netflix",
    subtitle: "React / Firebase / Redux / axios",
    github: "https://github.com/wanderfulife/netflix-clone",
    demo: "https://netflix-2f31d.firebaseapp.com/"
  },
  {
    id: 2,
    image: NFT,
    title: "The Squirrelz",
    subtitle: "React / Solidity",
    github: "https://github.com/wanderfulife/NFTCollectible",
    demo: "https://thesquirrelz.herokuapp.com/"
  }

  
];

const image = TINDER
const title= "More Pay"
const subtitle= "React Native / Firebase"
const github= "https://github.com/wanderfulife/MPV2"



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
          </article>
      })}
      <article className="portofolio__item">
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
            </div>
          </article>
      </div>
    </section>;
}

export default Portofolio