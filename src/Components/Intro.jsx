import React, { useContext } from "react";

import "./Intro.css";

import Github from "../Image/gitpng.png";
import Fbook from "../Image/facebookpng.png";
import Mail from "../Image/Mailpng.png";
import Victor1 from "../Image/Vector1.png";
import Victor2 from "../Image/Vector2.png";
import Boy from "../Image/boy.png";
import FloatingDiv from "./FloatingDiv";
import Micky from "../Image/Micky1.png";
import FloatingDiv2 from "./FloatingDiv2";
import { themeContext } from "./Context";

import { motion } from "framer-motion";

// const transition = (duration:2,type:'spring')

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="home">
      <div className="left1">
        <div className="name2">
          <span
            style={{
              background: darkMode ? "black" : "",
              color: darkMode ? "White" : " ",
            }}
          >
            Hi I Am{" "}
          </span>
          <span>SonuSugan</span>
          <span id="justi">
            Hello there! I am a passionate and dedicated individual with a keen
            interest in Front-end and MERN 
            development. Let me take a moment to introduce myself and share my
            educational journey.I completed my UG degree in BCA at R.K.S College
            of Arts and Science. I pursued PG degree in MCA at Amity
            University. During my time, I discovered my fascination for creating
            intuitive and visually appealing user experiences. Throughout my MCA
            journey, I had the opportunity to delve deeper into the MERN stack,
            which sparked my interest even more in full-stack development.
          </span>
        </div>
        <div className="icon">
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
        <button className="button2 i-button2"> Downlode CV</button>
      </div>
      <div className="right2">
        <div>
          {/* <img src={Victor2} alt="" /> */}
          </div>
        <div>
          <img src={Boy} alt="" />
        </div>
        <div className="icimg">
          {/* <img src={Victor1} alt="" /> */}
        </div>
        <motion.div
          initial={{ top: "15%", left: "-60%" }}
          whileInView={{ left: "-50%" }}
          transition={{ duration: 4, type: "spring" }}
        >
          <img src={Micky} alt="" />
        </motion.div>

        <motion.div
          initial={{ top: "70% ", left: "-38%" }}
          whileInView={{ left: "-45%" }}
          transition={{ duration: 4, type: "spring" }}
        >
          <FloatingDiv />
        </motion.div>
        <motion.div
          initial={{ top: "28% ", left: "58%" }}
          whileInView={{ left: "65%" }}
          transition={{ duration: 4, type: "spring" }}
        >
          <FloatingDiv2 />
        </motion.div>
      </div>
      <div className="blur"></div>
      <div className="blur2"></div>
    </div>
  );
};

export default Intro;
