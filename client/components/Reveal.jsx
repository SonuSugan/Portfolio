import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../assets/wrappers/Reveal";

const Reveal = ({ children, delay = 0, direction = "up", className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    // Safety net: some environments (older browsers, certain automation/
    // emulation contexts) never fire the observer callback. Never leave
    // content permanently invisible because of that.
    const fallback = setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <Wrapper
      ref={ref}
      className={`${className} ${visible ? "is-visible" : ""}`}
      $direction={direction}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Wrapper>
  );
};

export default Reveal;
