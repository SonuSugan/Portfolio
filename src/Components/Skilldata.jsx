import React, { useContext } from "react";
// import "./Skill.css";
import Card from "../Components/Card/Card";

// import 'Intro.jsx'

import mongo from "../Image/mongo.jpg";
import react1 from "../Image/react.png";
import hcj from "../Image/HCJ.jpg";
import mern from "../Image/mern.png";
import node from "../Image/node.png";
import { themeContext } from "./Context";
import { motion } from "framer-motion";

import Data from "./Data"

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="skilldata">
      <Data/>
    </div>
  );
};
export default Skills;
