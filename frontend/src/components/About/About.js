import React from "react";
import firstImage from "../../Images/Ecommerce campaign-pana.png";
import contactImage from "../../Images/Contact us-bro.png";
import Button from "../Button";
import Contact from ".././Contact/Contact.js";
import amazon from "../../Images/brand/amazon-2.svg";
import flipkart from "../../Images/brand/flipkart.svg";
import myntra from "../../Images/brand/myntra.svg";
import udemy from "../../Images/brand/udemy-wordmark-1.svg";
import ajio from "../../Images/brand/ajio.svg";
import adidas from "../../Images/brand/adidas-9.svg";
import shopping from "../../Images/products/shopping.svg";
import coupon from "../../Images/products/coupons.svg";
import refer from "../../Images/products/refer.svg";
import userdp from "../../Images/team/user.png";




function About() {
  return (
    <>
      <section className="sec-1">
        <div className="left-box">
          <h1 className="noselect">
            A platform for Easiest and instant Savings
          </h1>
          <span>
            <Button name={"Explore"} />
          </span>
        </div>
        <div className="right-box">
          <img src={firstImage} draggable="false" alt="" />
        </div>
      </section>

      <section className="sec-2" id="products">
      <h1>Products</h1>
        <div className="box">
          <img src={shopping} alt="shopping" draggable="false" />
          <h3>While Shopping</h3>
          <p>
            Shop form your favorite Ecommerce websites through coupondel.com and
            earn extra cashbacks.
          </p>
        </div>
        <div className="box">
          <img src={coupon} alt="coupon" draggable="false" />
          <h3>Coupons hi coupons</h3>
          <p>
            Share your unused coupons of Paytm,Phonepe  etc.. and use
            coupons shared by fellow customers.
          </p>
        </div>
        <div className="box">
          <img src={refer} alt="refer" draggable="false" />
          <h3>Invitation</h3>
          <p>
            Share our referral links of other apps and get the referal amount in
            your account when your friends signup with those links.
          </p>
        </div>
      </section>

      <section className="sec-3" id="partners">
        <div className="left-box">
          <h1>All Your Favorites in One Place</h1>
          <p>
            Spend in your all favorite sites through us and save more. All
            popular brands showing here and more will be available here. Just
            wait, <span>We are coming soon.</span>
          </p>
        </div>
        <div className="right-box">
          <div className="brand-box">
            <img src={amazon} draggable="false" alt="amazon" />
            <img src={flipkart} draggable="false" alt="flipkart" />
            <img src={ajio} draggable="false" alt="ajio" />
            <img src={myntra} draggable="false" alt="myntra" />
            <img src={adidas} draggable="false" alt="adidas" />
            <img src={udemy} draggable="false" alt="udemy" />
          </div>
        </div>
      </section>

      <section className="sec-5" id="team">
        <h1>Our Team</h1>
        <div className="card-box">
          <div className="card">
            <img src={userdp} alt="dp" />
            <h4>Mallikarjun</h4>
            <p>Developer</p>
            <div className="social">
              <a href="#">
                <i class="fi fi-brands-instagram"></i>
              </a>
              <a href="#">
              <i class="fi fi-brands-linkedin"></i>
              </a>
              <a href="#">
              <i class="fi fi-brands-twitter"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <img src={userdp} alt="dp" />
            <h4>Rajkumar</h4>
            <p>Finance & Marketing</p>
            <div className="social">
              <a href="#">
                <i class="fi fi-brands-instagram"></i>
              </a>
              <a href="#">
              <i class="fi fi-brands-linkedin"></i>
              </a>
              <a href="#">
              <i class="fi fi-brands-twitter"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <img src={userdp} alt="dp" />
            <h4>Subhadip</h4>
            <p>Developer, Designer</p>
            <div className="social">
              <a href="#">
                <i class="fi fi-brands-instagram"></i>
              </a>
              <a href="#">
              <i class="fi fi-brands-linkedin"></i>
              </a>
              <a href="#">
              <i class="fi fi-brands-twitter"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <img src={userdp} alt="dp" />
            <h4>Deepak</h4>
            <p>Developer, Designer</p>
            <div className="social">
              <a href="#">
                <i class="fi fi-brands-instagram"></i>
              </a>
              <a href="#">
              <i class="fi fi-brands-linkedin"></i>
              </a>
              <a href="#">
              <i class="fi fi-brands-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>





      <section className="sec-4" id="contact">
        <div className="left-box">
          <h1>Contact</h1>
          <img src={contactImage} draggable="false" alt="contact" />
        </div>
        <div className="right-box">
          <Contact />
        </div>
      </section>
    </>
  );
}

export default About;
