import React from "react";
import './Footer.css';
import boxArrowUp from '../../assets/icons/box-arrow-up-right.svg';
import github from '../../assets/icons/github.svg';
import twitter from '../../assets/icons/twitter.svg';
import linkedin from '../../assets/icons/linkeind.svg';
import ig from '../../assets/icons/instagram.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container container__contact">
        <section id="contact" className="contact">
            <h2>Get In Touch</h2>
            <a href="mailto:alfan.wahyudi98@gmail.com" className="contact-email" title="alfan.wahyudi98@gmail.com">
              <u>alfan.wahyudi98@gmail.com</u>  
              <img src={boxArrowUp} className="email-img" alt="sending email icon" />
            </a>
            <ul className="contact-social-media">
              <li className="contact-social-media-item">
                <a href="https://github.com/AlfanWahyudi" title="https://github.com/AlfanWahyudi">
                  <img src={github} alt="github icon" />
                </a>
              </li>
              <li className="contact-social-media-item">
                <a href="https://twitter.com/Wahyudi_Alfann" title="https://twitter.com/Wahyudi_Alfann">
                  <img src={twitter} alt="twitter icon" />
                </a>
              </li>
              <li className="contact-social-media-item">
                <a href="https://www.linkedin.com/in/alfanwahyudi" title="https://www.linkedin.com/in/alfanwahyudi">
                  <img src={linkedin} alt="linkedin icon" />
                </a>
              </li>
              <li className="contact-social-media-item">
                <a href="https://www.instagram.com/alfan.id/" title="https://www.instagram.com/alfan.id">
                  <img src={ig} alt="instagram icon" />
                </a>
              </li>
            </ul>
        </section>
        <section id="copyRight" className="copy-right">
          <p>&#169; {currentYear} Portfolio by Alfan Wahyudi </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;