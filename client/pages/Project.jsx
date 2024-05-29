import React from "react";
import Wrapper from "../assets/wrappers/Project";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <Wrapper>
      <div className="Project">
        <span className="span1">
          My <span className="span2">Project</span>{" "}
        </span>
        <div className="project-center">
          <div className="Project-intro">
            <div className="container">
              <img src="/port.png" alt=""  />
            </div>
          </div>
          <div className="Project-detail">
            <span className="span4">Portfolio </span>
            <span className="span5">
              This Portfolio Website project is a showcase of my skills,
              projects, and achievements, presented in the form of a modern and
              interactive website.{" "}
            </span>
            <span className="span5">
              React, HTML, CSS, JavaScript and Framer Motion are the technology
              used in this project.
            </span>
            <span className="span5">
              The impact of portfolio project is a visually appealing and
              interactive website showcasing my skills and work.
            </span>
            <div className="button">
              <button className="button-17">
                {" "}
                <FaGithub /> Code
              </button>
              <button className="button-17">
                {" "}
                <FaRegCirclePlay /> Demo{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="project-center">
          <div className="Project-intro">
            <div className="container">
              <img src="/tour.png" alt=""  />
            </div>
          </div>
          <div className="Project-detail">
            <span className="span4">Toure Guide Portal </span>
            <span className="span5">
              This Tour Guide portal for domestic tourists that includes user
              registration, login, state selection, and a map feature using the
              Google Maps API.{" "}
            </span>
            <span className="span5">
              HTML, CSS, MySQL, JavaScript and map feature using Google Maps API
              integration for route finding this are the technology used in this
              project.
            </span>
            <span className="span5">
              The impact of tour guide portal is that it provides a convenient
              and cost-effective solution to explore famous places, saving them
              time and money by eliminating the need for a human guide.
            </span>
            <div className="button">
              <button className="button-17">
                {" "}
                <FaGithub /> Code
              </button>
              <button className="button-17">
                {" "}
                <FaRegCirclePlay />
                Demo{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;
