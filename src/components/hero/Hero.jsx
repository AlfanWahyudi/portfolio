import React from "react";
import './Hero.css';

function Hero() {
  return(
    <section id="hero">
      <div className="container container__hero">
        <hgroup className="hero-hgroup">
          <h1 className="hero-hgroup-title">Developer Who Create Amazing Website</h1>
          <p className="hero-hgroup-subhead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi corporis assumenda odio molestias, tempora quibusdam necessitatibus aut, quos at qui recusandae saepe mollitia amet cupiditate ipsam ea modi quam eius.</p>
        </hgroup>
        <div className="hero-cta">
          <button className="btn btn-link btn-link__primary-hover">
            <a href="#contact">Contact</a>
          </button>
          <button className="btn btn-link">
            <a href="/">Download CV</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;