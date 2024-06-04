import React from "react";
import { Link } from "react-scroll";
import Links from "../utils/Link";
import { useDashboardContext } from "./HomeLayout";

const NavLinks = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <div className="nav-links">
      {Links.map((links) => {
        const { text, icon, path, set } = links;
        return (
          <div className="nav-link" onClick={toggleSidebar} key={text}>
            <Link
              to={path}
              offset={set}
              smooth={true}
              duration={500}
              onClick={toggleSidebar}
              className="scroll-link"
            >
            <span className="icon">{icon}</span>
              {text}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
