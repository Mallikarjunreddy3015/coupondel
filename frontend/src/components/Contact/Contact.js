import React, { useState, useRef } from "react";
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Contact.css";
import Button from "../Button";
import swal from 'sweetalert';
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Contact = () => {
  const [loading, setLoading] = useState("1");
  const classes=useStyles();
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzWO5BhvQCIl3BKBme2IgxfdQhupCrFeOi_WOl7ProkdA7wHbtlS8pNO7j7TFlcL0g-FA/exec"
  const handleSubmit = (e) => {
    e.preventDefault();
  

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),
      
    }).then(
      setLoading("3")
    )
    
    .then(res => {
setLoading("2");
      swal(`Thank you ${e.target.name.value}`, "We will contact you soon!")
        .then(() => {
          window.location.reload()
        });

    })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div className="contact">
        <form name="google-sheet" ref={formRef} onSubmit={handleSubmit} className="form" autoComplete="on">
          <h2>Name</h2>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            required
          />
          <h2>Your Email</h2>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <h2>Message</h2>
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Type your message"
            required
          ></textarea>
          <Button name={"Submit"} type="submit" />

          {loading =="3" ?  <Backdrop  className={classes.backdrop} open>
            <CircularProgress color="inherit" />
          </Backdrop>:loading}

        </form>
      </div>
    </>
  );
};

export default Contact;
