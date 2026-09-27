import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>SonuSugan</h3>
            <p>
              SaaS Implementation Specialist &amp; Front-End Developer,
              building enterprise workflows and responsive React interfaces.
            </p>
            <div className="f-icons">
              <a href="https://github.com/SonuSugan" target="_blank" rel="noopener noreferrer">
                <FaGithub className="img" />
              </a>
              <a
                href="https://www.linkedin.com/in/s-k-sugan-871756214"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="img" />
              </a>
              <a
                href="https://www.instagram.com/sonu_sugan?igsh=djVrbXdpaWJtem82"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="img" />
              </a>
              <a href="mailto:sugansk1920@gmail.com">
                <FaEnvelope className="img" />
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <a href="mailto:sugansk1920@gmail.com">sugansk1920@gmail.com</a>
            <a href="tel:+918610772880">+91 8610772880</a>
            <span>New Delhi, India</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} S.K. Sugan. All rights reserved.</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer
