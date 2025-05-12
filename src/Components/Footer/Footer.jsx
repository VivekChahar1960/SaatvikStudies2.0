import React from "react";
import "./Footer.css";
import Instagram from '../../assets/instagram.png';
import Telegram from '../../assets/telegram.png';
import Gmail from '../../assets/gmail.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="upper-footer">
        <div className="footer-left">
          <a
            href="mailto:sss@saatvikstudies.com"
            className="footer-link"
          >
            <img src={Gmail} alt="Gmail" className="footer-icon" />
            sss@saatvikstudies.com
          </a>
          <a
            href="https://t.me/SaatvikStudies"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img src={Telegram} alt="Telegram" className="footer-icon" />
            Telegram
          </a>
          <a
            href="https://www.instagram.com/saatvikstudies?igsh=cnI2dWFhcm94dWZj"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img src={Instagram} alt="Instagram" className="footer-icon" />
            Instagram
          </a>
        </div>
        <div className="footer-right">
          <button onClick={scrollToTop} className="scroll-top-button">
            ⬆ Back to Top
          </button>
        </div>
      </div>
      <div className="lower-footer">
        <p>&copy; {new Date().getFullYear()} Saatvik Study Station</p>
      </div>
    </footer>
  );
};

export default Footer;