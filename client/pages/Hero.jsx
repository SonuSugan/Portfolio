import React from "react";
import Wrapper from "../assets/wrappers/Hero";
// import Image from "next/image";

const Hero = () => {
  const imageStyle = {
    width: "50",
    border: "1px solid #fff",
  };
  return (
    <Wrapper>
      <div className="Hero-center">
        <div className="Hero-intro">
          <span className="span1">Hi I Am </span>{" "}
          <span className="span2">SonuSugan</span>
          <span className="span3">
            Hello there! I am a passionate and dedicated web developer, keen
            interest in Front-end and MERN development.
            {/* Let me take a moment to
            introduce myself and share my educational journey.I completed my UG
            degree in BCA at R.K.S College of Arts and Science. I pursued PG
            degree in MCA at Amity University. During my time, I discovered my
            fascination for creating intuitive and visually appealing user
            experiences. Throughout my MCA journey, I had the opportunity to
            delve deeper into the MERN stack, which sparked my interest even
            more in full-stack development. */}
          </span>
          <div className="social-icon">
            <a href="https://github.com/SonuSugan">
              <img src="/gitpng.png" alt="git"></img>
            </a>
            <a href="https://www.instagram.com/sonu_sugan?igsh=djVrbXdpaWJtem82">
              <img src="/facebookpng.png" alt="facebookpng"></img>
            </a>
            <a href="#">
              <img src="/Mailpng.png" alt="mail"></img>
            </a>
          </div>
          <div className="Tec-class">
            <div className="image-font">
              Tec Stack |{" "}
              <span className="images">
                <img src="/html.png" alt="" />
                <img src="/css.png" alt="" />
                <img src="/js.png" alt="" />
                <img src="/java.png" alt="" />
                <img src="/ex.png" alt="" />
                <img src="/mongo.png" alt="" />
              </span>
            </div>
          </div>
        </div>

        <div className="Hero-boy">
          <img src="/boy.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
