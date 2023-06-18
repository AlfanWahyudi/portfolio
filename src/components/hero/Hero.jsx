import React from "react";
import './Hero.css';
import cv from '../../assets/file/cv.pdf';

function Hero() {
  return(
    <section id="hero">
      <div className="container container__hero">
        <hgroup className="hero-hgroup">
          <h1 className="hero-hgroup-title">Hi, I am Alfan Wahyudi</h1>
          <p className="hero-hgroup-subhead">I'm a computer science graduate with programming and software development skills based in Indonesia.
            Tools that are often used are JavaScript, PHP, Webpack, React, Laravel, and MySQL.</p>
        </hgroup>
        <div className="hero-cta">
          <button className="btn btn-link btn-link__primary-hover">
            <a href="#contact">Contact</a>
          </button>
          <button className="btn btn-link">
            <a href={cv} target="__blank">Download CV</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;