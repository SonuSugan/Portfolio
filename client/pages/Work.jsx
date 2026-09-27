import React from 'react'
import Wrapper from "../assets/wrappers/work";
import Reveal from "../components/Reveal";

const Work = () => {
  return (
    <Wrapper>
      <div className="Work">
        <Reveal>
          <span className="span1">
            Work <span className="span2"> Experience</span>{" "}
          </span>
        </Reveal>
        <div className="Work-center">
          <Reveal direction="left">
            <div className="Work-detail">
              <span className="span4">Meritto - Implementation Specialist III</span>
              <span className="span5">
                Dec 2024 &ndash; Present, Gurugram, India. Configure forms, Exam,
                Workflows, and VPA/CRM/Score Card configurations, landing pages,
                and widgets for enterprise client implementations, ensuring
                secure and compliant roll-outs.{" "}
              </span>
              <span className="span5">
                Manage IP/domain whitelisting, infrastructure access
                provisioning, and UAT coordination with client IT and security
                teams, reducing go-live delays caused by access and compliance
                gaps.
              </span>
              <span className="span5">
                Developed JavaScript-based automation utilities &mdash;
                including a Test Expander and Backup Module &mdash; cutting
                human error in this workflow by 100%, and mentored 15+ interns
                and 3+ full-time employees on implementation best practices.
              </span>
            </div>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <div className="Work-intro">
              <div className="container">
                <img src="/meritto.png" alt="Meritto logo" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="Work-center">
          <Reveal direction="left">
            <div className="Work-detail">
              <span className="span4">Capgemini - Software Engineer</span>
              <span className="span5">
                Jul 2024 &ndash; Sep 2024, Bengaluru, India. Maintained and
                optimized a suite of applications using Spring Boot and MySQL,
                boosting backend service performance and reliability.{" "}
              </span>
              <span className="span5">
                Built and tested React UI modules with JUnit-covered
                integrations, improving system efficiency in an agile
                environment.
              </span>
              <span className="span5">
                Developed responsive UI components using React, HTML, and CSS
                to create engaging user experiences.
              </span>
            </div>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <div className="Work-intro">
              <div className="container">
                <img src="/capgemini.svg" alt="Capgemini logo" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Wrapper>
  );
}

export default Work
