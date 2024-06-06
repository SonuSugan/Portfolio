import React from 'react'
import Wrapper from "../assets/wrappers/work";

const Work = () => {
  return (
    <Wrapper>
      <div className="Work">
        <span className="span1">
          Work <span className="span2"> Experience</span>{" "}
        </span>
        <div className="Work-center">
          <div className="Work-detail">
            <span className="span4">TCS iON </span>
            <span className="span5">
              During my internship at TCS iON Noida, I developed a tour guide
              portal for domestic tourists.{" "}
            </span>
            <span className="span5">
              This portal included user registration, login, state selection,
              and a map feature using the Google Maps API. I utilized HTML, CSS,
              JavaScript, and integrated the Google Maps API for route finding.
            </span>
            <span className="span5">
              The impact of this project is that it offers a convenient and
              cost-effective solution for exploring famous places, eliminating
              the need for a human guide and saving time and money for users
            </span>
          </div>
          <div className="Work-intro">
            <div className="container">
              <img src="/TCS.png" alt="" />
            </div>
          </div>
        </div>
        <div className="Work-center">
          <div className="Work-detail">
            <span className="span4">NEXT Education</span>
            <span className="span5">
              During my internship at Next Education, Developed and implemented
              report cards and certificates for the school using HTML and CSS.{" "}
            </span>
            <span className="span5">
              Uploading and managing student, staff, and school data provided by
              the institution in the Learning Management System (LMS).
            </span>
            <span className="span5">
              Maintaining the LMS, ensuring the integrity and accuracy of school
              data, and providing ongoing support and updates.
            </span>
          </div>
          <div className="Work-intro">
            <div className="container">
              <img src="/Next.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Work