import React, { useContext } from "react";

import Github from "../Image/gitpng.png";
import Fbook from "../Image/facebookpng.png";
import Mail from "../Image/Mailpng.png";
import Boy from "../Image/boy1.png";
import FloatingDiv from "./FloatingDiv";
import FloatingDiv2 from "./FloatingDiv2";
import { themeContext } from "./Context";

import { motion } from "framer-motion";

// const transition = (duration:2,type:'spring')

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro-cont" id="home">
      <div className="intro-left">
        <div className="intro-name">
          <span className="name1">Hi I Am </span>{" "}
          <span className="name2">SonuSugan</span>
          <span className="intro-para">
            Hello there! I am a passionate and dedicated individual with a keen
            interest in Front-end and MERN development. Let me take a moment to
            introduce myself and share my educational journey.I completed my UG
            degree in BCA at R.K.S College of Arts and Science. I pursued PG
            degree in MCA at Amity University. During my time, I discovered my
            fascination for creating intuitive and visually appealing user
            experiences. Throughout my MCA journey, I had the opportunity to
            delve deeper into the MERN stack, which sparked my interest even
            more in full-stack development.
          </span>
          <div className="social-icon">
            <a href="#">
              <img src={Github} alt={Github}></img>
            </a>
            <a href="#">
              <img src={Fbook} alt={Github}></img>
            </a>
            <a href="#">
              <img src={Mail} alt={Github}></img>
            </a>
          </div>
          <div className="button-cen">
          <button className="button-click i-button1"> Downlode CV</button>

          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="boy-back">
          <div>
            <img className="boy-img" src={Boy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
