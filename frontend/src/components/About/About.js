import React from "react";
//import Team from "./Team.js";
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

function About() {
  return (
    <>
      <section className="sec-1">
        <div className="left-box">
          <h1>
            A platform for Easiest and instant Savings via Cashbacks and Coupons
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
        <div className="goals">
          <h3 className="goal-1">
            Shop form your favorite Ecommerce websites through coupondel.com and
            earn extra cashbacks.
          </h3>
          <img className="goal-img1" src="#" alt="img1" />
        </div>

        <div>
          <h3 className="goal-2">
            Share your unused coupons from Paytm,Phonepe,zomato etc.. and use
            coupons shared by fellow customers.
          </h3>
          <img
            className="goal-img2"
            src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/06/coupon-banner-graphic.png"
            alt="img2"
          />
        </div>

        <div>
          <h3 className="goal-3">
            Share our referal links of other apps and get the referal amount in
            your account when your friends signup with those links.
          </h3>
          <img
            className="goal-img3"
            src="https://hello.pricelabs.co/wp-content/uploads/2021/04/refer-3-1024x658.png"
            alt="img3"
          />
        </div>
      </section>

      <section className="sec-3" id="about">
        <div className="left-box">
          <h1>All Your Favorites in One Place</h1>
          <p>
            Spend in your all favorite sites through us and save more.
            All popular brands showing here and more will available here.
            Just wait, <span>We are coming soon.</span>
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

      <section className="sec-5" id="team"></section>

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
