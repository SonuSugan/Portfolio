import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aebpfz1",
        "template_esw9j89",
        form.current,
        "aLTqRzM6H4a9TO08g"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact1">
      <div className="left123">
        <div className="contact">
          <span
            style={{
              background: darkMode ? "black" : "",
              color: darkMode ? "White" : " ",
            }}
          >
            Get in Touch
          </span>
          <span>Contact Me </span>
          <div className="blur5"></div>
        </div>
      </div>
      <div className="right123">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button2  button3" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div className="blur4"></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
