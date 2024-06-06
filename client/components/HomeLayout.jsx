import React, { createContext, useContext, useState } from "react";
import Wrapper from "../assets/wrappers/HomeLayout";
import Navbar from "./Navbar";
import SmallSidebar from "./SmallSidebar";
import BigSidebar from "./BigSidebar";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Project from "../pages/Project";
import Footer from "../pages/Footer";
import Contact from "../pages/Contact";
import Work from "../pages/Work";

const DashboardContext = createContext();

const HomeLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  



  return (
    <DashboardContext.Provider value={{ toggleSidebar, showSidebar }}>
      <Wrapper>
        <div className="HomeLay">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="Content" id="con">
              <div id="hero">
                <Hero />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="project">
                <Project />
              </div>
              <div id="work">
                <Work />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default HomeLayout;

// little alingment need in contatc us and about page 