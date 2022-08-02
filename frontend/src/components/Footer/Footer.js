import React from "react";
import "./Footer.css";
import icon from "../../icons/footer-logo-icon-white.png";
const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-links">
            <img src={icon} alt="icon" />
            <div className="social-Media">
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </div>
            <ul>
              <li>About</li>
              <li>Partners</li>
              <li>Team</li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>Partners</li>
              <li>Team</li>
            </ul>
            <ul>
              <li>Policy</li>
              <li>Partners</li>
              <li>Team</li>
            </ul>
            <ul>
              <li>More</li>
              <li>Partners</li>
              <li>Team</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; CouponDel {year}</p>
      </div>
    </>
  );
};

export default Footer;
