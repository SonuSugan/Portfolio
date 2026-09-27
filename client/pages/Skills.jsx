import React from "react";
import Wrapper from "../assets/wrappers/Skills";
import {
  SiJavascript,
  SiJquery,
  SiReact,
  SiHtml5,
  SiMongodb,
  SiJson,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiOpenai,
  SiClaude,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaAws, FaPlug, FaClipboardCheck, FaToolbox } from "react-icons/fa";
import { FaWandMagicSparkles, FaRobot } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
  { name: "Java", Icon: FaJava, color: "#007396" },
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "JSON", Icon: SiJson, color: "#000000" },
  { name: "API", Icon: FaPlug, color: "#6B7280" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#181717" },
  { name: "Vercel", Icon: SiVercel, color: "#000000" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Render", Icon: SiRender, color: "#46E3B7" },
  { name: "ChatGPT", Icon: SiOpenai, color: "#412991" },
  { name: "Claude AI", Icon: SiClaude, color: "#D97757" },
  { name: "Prompt Engineering", Icon: FaWandMagicSparkles, color: "#8B5CF6" },
  { name: "AI-Assisted Development", Icon: FaRobot, color: "#0EA5E9" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
  { name: "UAT", Icon: FaClipboardCheck, color: "#6B7280" },
  { name: "STS", Icon: FaToolbox, color: "#6B7280" },
];

const Skills = () => {
  return (
    <Wrapper>
      <span className="span1">
        Skills <span className="span2">&amp; Tools</span>
      </span>
      <div className="glass-panel">
        <div className="marquee">
          <div className="marquee-track">
            {[...skills, ...skills].map(({ name, Icon, color }, i) => (
              <div className="card" key={`${name}-${i}`}>
                <Icon className="card-icon" style={{ color }} />
                <span className="card-label">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
