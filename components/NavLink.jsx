import React from "react";
import { NavLink } from "react-router-dom";
import Links from "../utils/Link";
import { useDashboardContext } from "./HomeLayout";

const NavLinks = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <div className="nav-links">
      {Links.map((links) => {
        const { text, icon } = links;
        return (
          <NavLink
            className="nav-link"
            onClick={ toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
