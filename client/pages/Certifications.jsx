import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Certifications";
import { FaCertificate, FaTrophy, FaTimes, FaExpand } from "react-icons/fa";
import Reveal from "../components/Reveal";

const certifications = [
  {
    title: "React 18 - Tutorial and Projects Course",
    subtitle: "Udemy · 2023",
    Icon: FaCertificate,
    color: "gold",
    image: null,
    badge: true,
  },
  {
    title: "Full Stack Java Developer",
    subtitle: "Udemy · 2023",
    Icon: FaCertificate,
    color: "gold",
    image: null,
    badge: true,
  },
  {
    title: "Brahmastra Award - Bringing Quality Excellence",
    subtitle: "Meritto Zabardast Awards · Q2 FY25 (Jul-Sep '25)",
    Icon: FaTrophy,
    color: "blue",
    image: "/meritto-award.jpeg",
    badge: true,
  },
];

const Certifications = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <Wrapper>
      <Reveal>
        <span className="span1">
          My Certifications <span className="span2">and Awards</span>
        </span>
      </Reveal>
      <div className="cert-center">
        <Reveal direction="left">
          <div className="cert-list">
            {certifications.map(({ title, subtitle, Icon, color, image, badge }) => (
              <div
                className={`cert-card ${image ? "has-image" : ""} ${badge ? "has-badge" : ""}`}
                key={title}
                onClick={() => image && setActiveImage(image)}
              >
                {badge && (
                  <span className={`cert-badge ${color}`}>
                    <Icon />
                  </span>
                )}
                {image ? (
                  <span className="cert-thumb">
                    <img src={image} alt={title} />
                    <span className="cert-thumb-overlay">
                      <FaExpand />
                    </span>
                  </span>
                ) : (
                  <span className={`cert-placeholder ${color}`}>
                    <Icon />
                  </span>
                )}
                <span className="cert-text">
                  <span className="cert-title">{title}</span>
                  <span className="cert-subtitle">{subtitle}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {activeImage && (
        <div className="cert-lightbox" onClick={() => setActiveImage(null)}>
          <button className="cert-lightbox-close" onClick={() => setActiveImage(null)}>
            <FaTimes />
          </button>
          <img src={activeImage} alt="Certificate" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </Wrapper>
  );
};

export default Certifications;
