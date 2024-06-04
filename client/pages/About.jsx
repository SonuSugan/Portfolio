import React from 'react'
import Wrapper from '../assets/wrappers/About'

const About = () => {
  return (
    <Wrapper>
      <div className="About-center">
        <div className="About-intro">
          <span className="span1">
            About <span className="span2">Me </span>
          </span>
          <span className="span3 ">
            Hello there! Hello there! I am a passionate and dedicated web
            developer, keen interest in Front-end and MERN development. Let me
            take a moment to introduce myself and share my educational journey.I
            completed my UG degree in BCA from R.K.S College of Arts and Science.
            I completed PG degree in MCA from Amity University. During my time, I
            discovered my fascination for creating intuitive and visually
            appealing user experiences. Throughout my MCA journey, I had the
            opportunity to delve deeper into the MERN stack, which sparked my
            interest even more in full-stack development.
          </span>
        </div>
        <div className="About-froend">
          <img src="/MERN.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default About