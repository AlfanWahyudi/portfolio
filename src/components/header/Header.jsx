import React from "react";
import './Header.css';
import menuIcon from  '../../assets/icons/menu.svg';
import gitIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkeind.svg';

function Header() {
  return (
    <header>
      <div className="container container__header">
        <a href="/" className="">Alfan Wahyudi</a>
        <button className="btn-menu">
          <img src={menuIcon} className="btn__menu-img" alt="Menu icon" />
        </button>
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
          <ul className="social-media">
            <li className="social-media-item">
              <a href="/" className="social-media-link" target="blank">
                <img src={gitIcon} className="social-media-img" alt="github icon" />
              </a>
            </li>
            <li className="social-media-item">
              <a href="/" className="social-media-link" target="blank">
                <img src={linkedinIcon} className="social-media-img" alt="linkedin icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
