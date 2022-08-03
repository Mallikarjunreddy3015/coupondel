import React from "react";
import firstImage from "../../Images/Ecommerce campaign-pana.png";
import contactImage from "../../Images/Contact us-amico.png";
import Button from "../Button";
import Contact from ".././Contact/Contact.js";

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

      <section className="sec-2">
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

      <section className="sec-3">
        <div className="left-box"></div>
        <div className="right-box"></div>
      </section>

      <section className="sec-4">
        <div className="left-box">
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
