import React, { useState } from "react";
import "./Footer.css";
import Lottie from "lottie-react";
import scrollTopAnim from "../../assets/ScrollTop_Lottie.json";

import Instagram from '../../assets/instagram.png';
import Telegram from '../../assets/telegram.png';
import Gmail from '../../assets/gmail.png';
import YouTube from '../../assets/youtube.png';
import WhatsApp from '../../assets/whatsapp.png';
import Twitter from '../../assets/twitter.png';

const socialLinks = [
  { href: "https://www.instagram.com/saatvikstudies", icon: Instagram, alt: "Instagram" },
  { href: "https://www.youtube.com", icon: YouTube, alt: "YouTube" },
  { href: "https://t.me/SaatvikStudies", icon: Telegram, alt: "Telegram" },
  { href: "mailto:sss@saatvikstudies.com", icon: Gmail, alt: "Gmail" },
  { href: "https://wa.me/918700348696", icon: WhatsApp, alt: "WhatsApp" },
  { href: "https://twitter.com", icon: Twitter, alt: "Twitter" },
];

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="social-icons">
        {socialLinks.map((link, index) => {
          let scale = 1;

          if (hoveredIndex === index) {
            scale = 1.4;
          }

          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}
            >
              <img src={link.icon} alt={link.alt} className="social-icon" />
            </a>
          );
        })}
      </div>

      {/* Combined Lottie and Hover Text */}
      <div className="hover-scroll-combined">
        <div style={{width:40}}>
          <p></p>
        </div>
        <div className="hover-label">
          {hoveredIndex !== null ? `${socialLinks[hoveredIndex].alt}` : ""}
        </div>
        <div className="lottie-wrapper" onClick={scrollToTop}>
          <Lottie animationData={scrollTopAnim} loop={true} style={{ height: 40 }} />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Saatvik Study Station. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
