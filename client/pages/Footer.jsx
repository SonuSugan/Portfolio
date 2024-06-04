import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <img src="wave.png" alt="" />
        <div className="f-content">
          <span>www.sonu1920@gmail.com & 8610772XXX</span>
          <div className="f-icons">
            <a href="https://github.com/SonuSugan">
              {" "}
              <FaGithub className="img" />
            </a>
            <a href="https://www.instagram.com/sonu_sugan?igsh=djVrbXdpaWJtem82">
              <FaInstagram className="img" />
            </a>
            <a href="mailto:www.sonu1920@gmail.com">
              {" "}
              <IoIosMail className="img" />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer