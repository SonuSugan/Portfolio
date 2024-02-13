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
          <span>www.sonu1920@gmail.com / 8610772880</span>
          <div className="f-icons">
            <FaGithub className='img'/>
            <FaInstagram className='img'/>
            <IoIosMail className='img'/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer