import styled from "styled-components";

const Reveal = styled.div`
  opacity: 0;
  transform: ${({ $direction }) =>
    $direction === "left"
      ? "translateX(-28px)"
      : $direction === "right"
      ? "translateX(28px)"
      : "translateY(28px)"};
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;

  &.is-visible {
    opacity: 1;
    transform: translate(0, 0);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export default Reveal;
