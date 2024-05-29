import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Wrapper from "../assets/wrappers/Navbar";
import { useDashboardContext } from "./HomeLayout";



const Navbar = () => {
  const {toggleSidebar} =useDashboardContext();
  return (
    <Wrapper>
      <div className="logo">
        <div className="logo_heading">Sonusugan</div>
        {/* <h6>toggle</h6> */}
      </div>

      <ul className="menu">
        <li>Home</li>
        <li>Skill</li>
        <li>Experence</li>
        <li>Contact</li>
      </ul>
      <button className="button" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </button>
    </Wrapper>
  );
};

export default Navbar;
