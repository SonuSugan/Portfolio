import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Contact";
import Reveal from "../components/Reveal";

const defaultContactForm = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);
  const [status, setStatus] = useState("idle");
  const [sending, setSending] = useState(false);

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
    setStatus("idle");
    setSending(true);

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
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.log(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <Wrapper>
      <Reveal>
        <span className="span1 contact-heading">
          Get in Touch <span className="span2">Contact Me</span>
        </span>
      </Reveal>
      <div className="contact-center">
        <Reveal direction="left">
          <div className="contact-intro">
            <p className="contact-desc">
              Have a project in mind or a question about my work? Send me a
              message and I'll get back to you as soon as I can.
            </p>
          </div>
        </Reveal>
        <Reveal direction="right" delay={100} className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Smith"
                  autoComplete="off"
                  value={contact.name}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
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
            {status === "success" && (
              <p className="form-status success">
                Message sent successfully — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-status error">
                Something went wrong. Please try again.
              </p>
            )}
            <button className="button-17" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </button>
          </form>
        </Reveal>
      </div>
    </Wrapper>
  );
};

export default Contact;
