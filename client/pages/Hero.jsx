import React from "react";
import Wrapper from "../assets/wrappers/Hero";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiMysql,
  SiGit,
  SiHtml5,
} from "react-icons/si";
import Reveal from "../components/Reveal";

const Hero = () => {
  return (
    <Wrapper>
      <div className="Hero-center">
        <Reveal direction="left" className="Hero-intro">
          <span className="span1">Hi I Am </span>{" "}
          <span className="span2">SonuSugan</span>
          <span className="span3">
            Front-End Developer and SaaS Implementation Specialist with 2+
            years building responsive, user-focused interfaces with React
            and JavaScript. I specialize in workflow automation, CRM/VPA/Score
            Card configuration, and UAT coordination for enterprise go-lives
            &mdash; based in New Delhi, India.
          </span>
          <div className="social-icon">
            <a href="https://github.com/SonuSugan" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/s-k-sugan-871756214"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:sugansk1920@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <div className="Tec-class">
            <div className="image-font">Tech Stack</div>
            <span className="images">
              <span className="tech-badge">
                <SiJavascript title="JavaScript" style={{ color: "#F7DF1E" }} />
              </span>
              <span className="tech-badge">
                <SiReact title="React" style={{ color: "#61DAFB" }} />
              </span>
              <span className="tech-badge">
                <SiHtml5 title="HTML5" style={{ color: "#E34F26" }} />
              </span>
              <span className="tech-badge">
                <SiMongodb title="MongoDB" style={{ color: "#47A248" }} />
              </span>
              <span className="tech-badge">
                <SiMysql title="MySQL" style={{ color: "#4479A1" }} />
              </span>
              <span className="tech-badge">
                <SiGit title="Git" style={{ color: "#F05032" }} />
              </span>
            </span>
          </div>
          <div className="button-cv ">
            <a href="/S.K.Sugan.pdf" download>
              <button className="button-17 glow" type="button">
                Download CV
              </button>
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" delay={100} className="Hero-boy">
          <img src="/boy.png" alt="S.K. Sugan" />
        </Reveal>
      </div>
    </Wrapper>
  );
};

export default Hero;
