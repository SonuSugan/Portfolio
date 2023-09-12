import React, { useContext } from "react";
// import "./Experience.css";
// import mongo from "../../Image/mongo.png";
// import html from "../../Image/HTML5.png";
// import css from "../../Image/CSS.png";
import Tcs from "../Image/TCS.png";
// import react1 from "../../Image/react1.png";
import { motion } from "framer-motion";
import { themeContext } from "./Context";


const spinTransition = {
  loop: Infinity,
  ease: "linear",
};

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
      <div className="Work-exp" id="experience">
        <div className="Work-left">
          <div className="intro-name">

            <span className="name1" style={{ background: darkMode ? "black" : "", color: darkMode ? "White" : " ", }}>My Working</span>
            <span className="name2">Experience <br/></span>
            <span className="intro-para work-para " >
              I completed a 3 month internship at TCS iON from Jun to Aug 2022
              as a full-stack developer. The internship provided me with
              hands-on experience in full-stack development and allowed me to
              work on a project. Additionally, I learned and incorporated new
              skills like ReactJS, ExpressJS, NodeJS, and MongoDB.
            </span>
        </div>
          </div>
        <div className="Work-right">
          
          <div 
          className="logo">
          <img src={Tcs} alt="TCS" />

          </div>
          </div>
      </div>
    
  );
};

export default Experience;

