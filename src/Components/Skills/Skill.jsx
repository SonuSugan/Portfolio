import React, { useContext } from "react";
import "./Skill.css";
import Card from "../Card/Card";

// import 'Intro.jsx'

import mongo from "../../Image/mongo.jpg";
import react1 from "../../Image/react.png";
import hcj from "../../Image/HCJ.jpg";
import mern from "../../Image/mern.png";
import node from "../../Image/node.png";
import { themeContext } from "../Context";
import { motion } from "framer-motion";

const Skill = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="skills" id='skill'>
      {/* left side */}

      <div className="leftskill">
        <span
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "White" : " ",
          }}
        >
          My Awsome{" "}
        </span>
        <span>Skills </span>
        <span>
          Passionate front-end web developer innovating user experiences with<br/>
          react, HTML, CSS, JavaSCript having 2 years of self experience in <br/>
          web development
        </span>
        <div className="skde">
          <motion.div
            initial={{ marginLeft: "-4rem" }}
            whileInView={{ marginLeft: "1rem" }}
            transition={{ duration: 3, type: "spring" }}
            whileHover={{ scale: 1.2 }}
            className="left223"
          >
            <Card
              emoji={hcj}
              heading={"HTML,CSS and JS"}
              detail={
                "HTML, CSS, and JavaScript are the foundational technologies used in web development to create and design websites with interactive features"
              }
            />
          </motion.div>
          <motion.div
            initial={{ marginLeft: "2rem" }}
            whileInView={{ marginLeft: "5rem" }}
            transition={{ duration: 3, type: "spring" }}
            whileHover={{ scale: 1.2 }}
            className="left224"
          >
            <Card
              emoji={mern}
              heading={"MERN"}
              detail={"he MERN stack is a popular and powerful technology stack used for web development, and it stands for MongoDB, Express.js, React, and Node.js."}
            />
          </motion.div>
        </div>
      </div>

      {/* rightside */}
      <div className="rightskill">
        <motion.div
          initial={{ left: "19rem" }}
          whileInView={{ left: "33rem" }}
          transition={{ duration: 3, type: "spring" }}
          whileHover={{ scale: 1.2 }}
          className="left11"
        >
          <Card
            emoji={mongo}
            heading={"Database"}
            detail={"MongoDB is a popular NoSQL database which is flexible and efficient way to store or manage data. As of 2023, MongoDB has gained significant traction in the developer community.."}
          />
        </motion.div>

        <motion.div
          initial={{ left: "4rem" }}
          whileInView={{ left: "14.8rem" }}
          transition={{ duration: 3, type: "spring" }}
          whileHover={{ scale: 1.2 }}
          className="right11"
        >
          <Card
            emoji={react1}
            heading={"React Developer"}
            detail={"React is a popular JavaScript library for building UI for both web and app. It a collection of components, which can be combined to form complete screens, pages, and apps."}
          />
        </motion.div>
        <motion.div
          initial={{ left: "19rem" }}
          whileInView={{ left: "33rem" }}
          transition={{ duration: 3, type: "spring" }}
          whileHover={{ scale: 1.2 }}
          className="left22"
        >
          <Card
            emoji={node}
            heading={"Node.js"}
            detail={"Node.js is a popular open-source runtime environment for executing JavaScript code on the server-side. It allows developers to build scalable network applications efficiently and effectively."}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;

{
  /* <div>
  <Card emoji={react1} heading={"design"} detail={"figma"} />

  <div className="secondcard">
    <Card emoji={hcj} heading={"check"} detail={"nill"} />
  </div>
</div> */
}
