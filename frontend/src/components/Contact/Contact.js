import React from "react";
import "./Contact.css";
import Button from "../Button";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <form action="#" className="form" autoComplete="off">
          <h2>Name</h2>
          <input type="name" placeholder="First Name" name="fname" />
          <h2>Your Email</h2>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <h2>Message</h2>
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Type your message"
          ></textarea>
          <Button name={"Submit"} type={"submit"} />
        </form>
      </div>
    </>
  );
};

export default Contact;
