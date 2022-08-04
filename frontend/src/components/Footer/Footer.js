import React from "react";
import "./Footer.css";
import icon from "../../icons/footer-logo-icon-white.png";
const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="footer-main">
          <img src={icon} alt="icon" />
          <div className="footer-links"></div>
        </div>
        <div className="back-top">
          <a href="#header">
            <span className="material-symbols-outlined">expand_less</span>
          </a>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy;CouponDel {year} All rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
