import React from "react";
import './Header.css';

function Header() {
  return (
    <header>
      <div class="container">
        <h1 class="title">Hi, I am Alfan Wahyudi</h1>
        <div class="about">
          <p>
            I'm a computer science graduate with programming and software
            development skills based in Indonesia. After graduation, I often
            practice programming skills to be better than before.
          </p>
          <p>
            Apart from that, I focus on making websites that are modern and
            efficient to use.
          </p>
        </div>
        <div class="more_info">
          <button class="btn_icon">
            <a href="https://twitter.com/Wahyudi_Alfann" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </button>
          <button class="btn_icon">
            <a href="https://www.instagram.com/alfan.id/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </button>
          <button class="btn_icon">
            <a href="https://github.com/AlfanWahyudi" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </button>
          <button class="btn">
            <a href="#contact">Contact</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
