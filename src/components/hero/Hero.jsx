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
          <button className="btn btn__primary">
            <a href="#contact">Contact</a>
          </button>
          <button className="btn">
            <a href="/">Download CV</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;