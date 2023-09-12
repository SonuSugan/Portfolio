import React from "react";
import {Link} from 'react-scroll';
import Toggle from "./Toggle/Toggle";


const Navbar = () => {
  return (
    //n-wrapper
    <div className="navbar-center">
      {/* n- */}
      <div className="nav-left">
        {/* n- */}
        <div className="nav-name">SonuSugan</div>
        <Toggle/>
      </div>
      <div className="nav-right">
        <div className="list">
          <ul>
            <Link to="home" spy={true} smooth={true} offset={-190} duration={700}>
              
            <li>Home</li>
            </Link>
            <Link to="skill" spy={true} smooth={true} offset={-120} duration={700}>
            <li>Skill</li>

            </Link>
            <Link to="experience" spy={true} smooth={true} offset={-90} duration={700}>
            <li>Experience</li>

            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-90} duration={700}>
            <li>Contact</li>

            </Link>
          </ul>
        </div>
        {/* <button className="button  n-button">Contact us</button> */}
      </div>
    </div>
  );
};

export default Navbar;
