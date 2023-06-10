import React from "react";
import './Hero.css';

function Hero() {
  return(
    <section id="hero">
      <div className="container container__hero">
        <hgroup className="hero-hgroup">
          <h1 className="hero-hgroup-title">Hello, I'm Alfan Wahyudi</h1>
          <p className="hero-hgroup-subhead">Saya adalah seorang programmer, dan sekarang bekerja sebagai Junior Programmer di PT Akhdani Reka Solusi.
            Saya suka membuat website yang user friendly, dengan memperhatikan dari segi flow agar user tidak kebingungan.
            Tools yang sering digunakan ialah JavaScript, PHP, Vite, React, Laravel, MySQL.</p>
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