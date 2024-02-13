import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from "react-icons/fa";
import NavLinks from './NavLink';
import { useDashboardContext } from './HomeLayout';

const SmallSidebar = () => {

  
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "Sidebar-container show-sidebar" : "Sidebar-container"
        }
      >
        <div className="content">
          <button className="close-button" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            {/* <div>portfolio</div> */}
            <NavLinks />
          </header>
        </div>
      </div>
    </Wrapper>
  );
}

export default SmallSidebar