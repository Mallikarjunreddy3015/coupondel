import React, {useState,useRef}  from "react";
import "./Contact.css";
import Button from "../Button";
/*
const scriptURL = 'https://script.google.com/macros/s/AKfycbzWO5BhvQCIl3BKBme2IgxfdQhupCrFeOi_WOl7ProkdA7wHbtlS8pNO7j7TFlcL0g-FA/exec'
        const form = document.forms['google-sheet']
        if(form){
           form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
            .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
        })

        }
       
*/

const Contact = () => {
  const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzWO5BhvQCIl3BKBme2IgxfdQhupCrFeOi_WOl7ProkdA7wHbtlS8pNO7j7TFlcL0g-FA/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
           alert("succesfully submitted")
        })
        .catch(err => console.log(err))
    }
  return (
    <>
      <div className="contact">
        <form name="google-sheet" ref={formRef} onSubmit={handleSubmit}  className="form" autoComplete="on">
          <h2>Name</h2>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
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
          <Button name={"Submit"} type="submit"  />
        </form>
      </div>
    </>
  );
};

export default Contact;
