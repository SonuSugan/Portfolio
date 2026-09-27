import React from "react";
import Wrapper from "../assets/wrappers/Project";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Reveal from "../components/Reveal";

const Project = () => {
  return (
    <Wrapper>
      <div className="Project">
        <Reveal>
          <span className="span1">
            My <span className="span2">Project</span>{" "}
          </span>
        </Reveal>
        <div className="project-center">
          <Reveal direction="left">
            <div className="Project-intro">
              <div className="container">
                <div className="live-preview">
                  <span className="live-badge">
                    <span className="dot" /> Live
                  </span>
                  <iframe
                    src="https://portfolio-gold-pi-77.vercel.app/"
                    title="Live preview of the Portfolio site"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <div className="Project-detail">
              <span className="span4">Portfolio </span>
              <span className="span5">
                A responsive portfolio website built with React.js,
                JavaScript, HTML, and CSS to showcase my professional
                experience, technical skills, and project work.{" "}
              </span>
              <span className="span5">
                Implemented a secure contact form with an Express.js and
                MongoDB backend to handle and persist user-submitted messages.
              </span>
              <span className="span5">
                Designed reusable React components and responsive UI layouts to
                improve maintainability, usability, and cross-device
                compatibility.
              </span>
              <div className="button">
                <a
                  href="https://github.com/SonuSugan/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="button-17">
                    {" "}
                    <FaGithub /> Code
                  </button>
                </a>
                <a
                  href="https://portfolio-gold-pi-77.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button-17">
                    {" "}
                    <FaRegCirclePlay /> Demo{" "}
                  </button>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="project-center">
          <Reveal direction="left">
            <div className="Project-intro">
              <div className="container">
                <img src="/tour.png" alt="Tour Guide Portal preview" loading="lazy" />
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <div className="Project-detail">
              <span className="span4">Tour Guide Portal </span>
              <span className="span5">
                A Tour Guide portal for domestic tourists, featuring user
                registration, login, state selection, and a map feature using
                the Google Maps API.{" "}
              </span>
              <span className="span5">
                HTML, CSS, MySQL, and JavaScript are the technologies used in
                this project, along with Google Maps API integration for
                route finding.
              </span>
              <span className="span5">
                The Tour Guide Portal provides a convenient and cost-effective
                way to explore famous places, saving users time and money by
                eliminating the need for a human guide.
              </span>
              <div className="button">
                <a
                  href="https://github.com/SonuSugan/tourist-guide.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="button-17">
                    {" "}
                    <FaGithub /> Code
                  </button>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;
