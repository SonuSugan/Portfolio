import styled, { keyframes } from "styled-components";

const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(38, 163, 255, 0.45), rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px; }
  50% { box-shadow: 0 0 0 8px rgba(38, 163, 255, 0), rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px; }
`;

const Wrapper = styled.div`
  margin-top: 5rem;
  .Hero-center {
    padding: var(--padding1);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    justify-content: space-between;
    /* height: 100vh; */
    gap: 2rem;
  }

  .Hero-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3% 3%;
  }

  .social-icon {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    justify-content: center;
  }

  .social-icon > * {
    transform: scale(1);
  }

  .social-icon svg {
    font-size: 2rem;
    color: var(--black);
  }

  .social-icon > *:hover {
    cursor: pointer;
  }

  .social-icon a {
    display: inline-flex;
    transition: transform 0.25s ease;
  }

  .social-icon a:hover {
    transform: translateY(-4px);
  }

  .social-icon a:hover svg {
    color: var(--blue);
  }

  .Tec-class {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .button-cv {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }

  .Hero-boy {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .Hero-boy > img {
    width: 100%;
    display: block;
    margin: 0 auto;
    /* box-shadow: 0 2px 3px 0 rgb(60 64 67 / 30%),
      0 1px 15px 1px rgb(60 64 67 / 15%); */
  }

  .image-font {
    color: var(--black);
    font-weight: bold;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .images {
    display: inline-flex;
    align-items: center;
    gap: 14px;
  }

  .tech-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #eceef2;
    box-shadow: 0 6px 16px rgba(20, 30, 60, 0.08);
    animation: ${bob} 2.6s ease-in-out infinite;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .tech-badge:hover {
    transform: translateY(-6px) scale(1.08);
    box-shadow: 0 12px 24px rgba(20, 30, 60, 0.14);
    border-color: var(--blue);
  }

  .tech-badge svg {
    width: 28px;
    height: 28px;
    transition: transform 0.3s ease;
  }

  .tech-badge:hover svg {
    transform: rotate(-8deg) scale(1.12);
  }

  .images .tech-badge:nth-child(2) { animation-delay: 0.15s; }
  .images .tech-badge:nth-child(3) { animation-delay: 0.3s; }
  .images .tech-badge:nth-child(4) { animation-delay: 0.45s; }
  .images .tech-badge:nth-child(5) { animation-delay: 0.6s; }
  .images .tech-badge:nth-child(6) { animation-delay: 0.75s; }

  .button-17.glow {
    animation: ${glowPulse} 2.5s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .tech-badge,
    .button-17.glow {
      animation: none;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 500px) {
    .span1 {
      font-size: 2.4rem;
    }
    .span2 {
      font-size: 3.2rem;
    }
    .image-font {
      font-size: 0.85rem;
    }
    .images {
      gap: 10px;
    }
    .tech-badge {
      width: 46px;
      height: 46px;
    }
    .tech-badge svg {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 992px) {
    .Hero-center {
      display: flex;
      flex-direction: column-reverse;
    }
    .Hero-intro {
      align-items: center;
    }
    .Tec-class {
      align-items: center;
    }
    .social-icon > * {
      transform: scale(0.9);
    }
    .image-font {
      font-size: 1rem;
    }
    .tech-badge {
      width: 52px;
      height: 52px;
    }
    .tech-badge svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default Wrapper;
