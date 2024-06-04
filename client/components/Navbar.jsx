import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Wrapper from "../assets/wrappers/Navbar";
import { useDashboardContext } from "./HomeLayout";
import { Link } from "react-scroll";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  const [click, setclick] = useState(false);
  return (
    <Wrapper>
      <div className="logo">
        <div className="logo_heading">
          <Link to="con" offset={-90} duration={800}>
            Sonusugan
          </Link>{" "}
        </div>
      </div>
      <ul className={click ? "menu active" : "menu"}>
        <li>
          <Link
            to="hero"
            // activeClass="active"
            spy={true}
            offset={-90}
            smooth={true}
            duration={800}
            className="button1"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            className="button1"
            offset={-200}
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="project"
            className="button1"
            offset={-40}
            spy={true}
            smooth={true}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to="work"
            className="button1"
            offset={-90}
            smooth={true}
            spy={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="button1"
            offset={-100}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button className="button" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </button>
    </Wrapper>
  );
};

export default Navbar;
