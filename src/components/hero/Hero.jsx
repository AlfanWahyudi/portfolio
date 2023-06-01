import React from "react";
import './Hero.css';

function Hero() {
  return(
    <section id="hero">
      <div className="container container__hero">
        <hgroup className="hero-hgroup">
          <h1 className="hero-hgroup-title">Developer Who Create Amazing Website</h1>
          <p className="hero-hgroup-subhead">Membuat aplikasi dengan memahami kebutuhan user. 
            Memilih teknologi yang tepat dan memperhatikan user experince.</p>
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