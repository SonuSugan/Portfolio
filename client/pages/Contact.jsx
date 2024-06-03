import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Contact";

const defaultContactForm = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);
  const [userData, setUserData] = useState(true);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
           `https://portfolio-edps.onrender.com/api/contact`, // while pushing 
        // "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        }
      );

      if (response.ok) {
        setContact(defaultContactForm);
        const data = await response.json();
        console.log(data);
        alert("Message sent successfully");
      }
    } catch (error) {
      alert("Message not sent");
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="contact-center">
        <div className="contact-intro">
          <span className="span1">Get in Touch</span>
          <span className="span2">Contact Me</span>
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={contact.name}
                onChange={handleInput}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                id="message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                placeholder="Type your message here"
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
