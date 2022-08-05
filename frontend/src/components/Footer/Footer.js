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
            <div className="social-Media footer-col">
              <div>
                <img src={icon} draggable="false" alt="icon" />
                <li>
                  <a href="#">
                    <i className="fi fi-brands-linkedin"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fi fi-brands-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fi fi-brands-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fi fi-brands-twitter"></i>
                  </a>
                </li>
              </div>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">email</a>
                </li>
                <li>
                  <a href="#">phone</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">How to use</a>
                </li>
                <li>
                  <a href="#">some more</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li><a>important links</a></li>
                <li>
                  <a href="#">explore amazone</a>
                </li>
                <li>
                  <a href="#">extra discount</a>
                </li>
              </ul>
            </div>
          </div>
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
