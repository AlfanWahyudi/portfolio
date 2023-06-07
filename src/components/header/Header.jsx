import React, { useState } from "react";
import './Header.css';
import menu from  '../../assets/icons/menu.svg';
import close from  '../../assets/icons/close.svg';
import git from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkeind.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <div className="container container__header">
        <a href="/" className="">Alfan Wahyudi</a>
        <button className="btn-menu" onClick={toggleMenu}>
          <img src={menuOpen ? close : menu} className="btn__menu-img" alt="Menu icon" />
        </button>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
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
          <div className="divider__vertical-header"></div>
          <ul className="social-media">
            <li className="social-media-item">
              <a href="/" className="social-media-link" target="blank">
                <img src={git} className="social-media-img" alt="github icon" />
              </a>
            </li>
            <li className="social-media-item">
              <a href="/" className="social-media-link" target="blank">
                <img src={linkedin} className="social-media-img" alt="linkedin icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
