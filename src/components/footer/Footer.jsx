import React from "react";
import './Footer.css';
import boxArrowUpIcon from '../../assets/icons/box-arrow-up-right.svg';
import githubIcon from '../../assets/icons/github.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkeind.svg';
import igIcon from '../../assets/icons/instagram.svg';

function Footer() {
  return (
    <footer>
      <div className="container container__contact">
        <section id="contact" className="contact">
            <h2>Get In Touch</h2>
            <p className="contact-email">
              <u>alfan.wahyudi98@gmail.com</u>  
              <img src={boxArrowUpIcon} className="email-img" alt="sending email icon" />
            </p>
            <ul className="contact-social-media">
              <li className="contact-social-media-item">
                <a href="/">
                  <img src={githubIcon} alt="github icon" />
                </a>
              </li>
              <li className="contact-social-media-item">
                <a href="/">
                  <img src={twitterIcon} alt="twitter icon" />
                </a>
              </li>
              <li className="contact-social-media-item">
                <a href="/">
                  <img src={linkedinIcon} alt="linkedin icon" />
                </a>
              </li>
              <li className="contact-social-media-item">
                <a href="/">
                  <img src={igIcon} alt="instagram icon" />
                </a>
              </li>
            </ul>
        </section>
        <section id="copyRight" className="copy-right">
          <p>copyright Alfan Wahyudi </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;