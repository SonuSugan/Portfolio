import React, { useContext } from "react";

// import 'Intro.jsx'

import { themeContext } from "./Context";

const Skill = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="skills" id="skill">
      {/* left side */}
        <span
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "White" : " ",
          }}
          className="name1"
        >
          My Awsome{" "}
        </span>
        <span className="name2">Skills </span>
        <span className="intro-para">
          Passionate front-end web developer innovating user experiences with
        
          react, HTML, CSS, JavaSCript having 2 years of self experience in{" "}
          
          web development
        </span>
    </div>
  );
};

export default Skill;
