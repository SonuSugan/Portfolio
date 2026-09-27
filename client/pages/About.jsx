import React from 'react'
import Wrapper from '../assets/wrappers/About'
import Reveal from '../components/Reveal'

const About = () => {
  return (
    <Wrapper>
      <div className="About-center">
        <Reveal direction="left">
          <div className="About-intro">
            <span className="span1">
              About <span className="span2">Me </span>
            </span>
            <span className="span3 ">
              I'm a SaaS Implementation Specialist based in New Delhi, India,
              with 2+ years configuring enterprise client CRM and admissions
              platforms for large-scale clients. I specialize in workflow
              automation, JavaScript custom handling, CRM/VPA/Score Card
              configuration, UAT coordination, and secure infra/IP whitelisting
              for enterprise go-lives, and I've mentored 15+ interns and 3+
              full-time employees along the way. Alongside that, I work as a
              front-end developer, building responsive UIs with React,
              JavaScript, HTML, and CSS. I hold a
              Master of Computer Applications from Amity University, Noida
              (2021&ndash;2023), and a Bachelor of Computer Applications from
              Dr. R.K. Shanmugam College of Arts and Science, Kallakurichi
              (2018&ndash;2021).
            </span>
          </div>
        </Reveal>
        <Reveal direction="right" delay={100} className="About-froend">
          <img src="/MERN.png" alt="" loading="lazy" />
        </Reveal>
      </div>
    </Wrapper>
  );
}

export default About
