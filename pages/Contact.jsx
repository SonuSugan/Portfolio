import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Contact";




const Contact = () => {
const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [message , setMess] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });




  // Handle the response as needed
};


  return (
    <Wrapper>
      <div className="contact-center">
        <div className="contact-intro">
          <span className="span1"> Get in Touch </span>
          <span className="span2 ">Contact Me </span>
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                id="name"
                placeholder="sonu"
              />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="www.sonu1920@gmail.com"
              />
            </div>
            <div className="input">
              <label htmlFor="message">Message </label>
              <textarea
                id="message"
                onChange={(e) => setMess(e.target.value)}
                value={message}
                placeholder="Type your message hear "
              ></textarea>
            </div>
            <button className="button-17" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
