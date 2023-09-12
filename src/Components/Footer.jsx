import React from "react";
// import "./Footer.css";
import Wave from "../Image/wave.png";
import Github from '../Image/github.png'
import Fbook from '../Image/instagram.png';
import Mail from '../Image/mail.png';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>www.sonu1920@gmail.com / 8610772880</span>
        <div className="f-icons">

<img src={Github} alt="git hub "/>
<img src={Mail} alt="git hub "/>
<img src={Fbook} alt="git hub "/>

        </div>
      </div>
    </div>
  );
};

export default Footer;
