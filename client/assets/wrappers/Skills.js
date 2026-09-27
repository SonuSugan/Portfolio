import styled, { keyframes } from "styled-components";

const scrollRTL = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Wrapper = styled.div`
  margin-top: 4rem;
  padding: 4% 5%;

  .glass-panel {
    position: relative;
    margin-top: 2rem;
    padding: 2.75rem 0;
    overflow: hidden;
  }

  .marquee {
    position: relative;
    z-index: 1;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(
      90deg,
      transparent 0%,
      #000 8%,
      #000 92%,
      transparent 100%
    );
    mask-image: linear-gradient(
      90deg,
      transparent 0%,
      #000 8%,
      #000 92%,
      transparent 100%
    );
  }

  .marquee-track {
    display: flex;
    width: max-content;
    gap: 1rem;
    padding: 20px 4px;
    animation: ${scrollRTL} 32s linear infinite;
  }

  .marquee:hover .marquee-track {
    animation-play-state: paused;
  }

  .card {
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 150px;
    height: 150px;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0 10px 24px rgba(20, 30, 60, 0.07);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 16px 32px rgba(20, 30, 60, 0.12);
    transform: translateY(-6px);
  }

  .card-icon {
    width: 46px;
    height: 46px;
    flex: none;
  }

  .card-label {
    color: var(--black);
    font-weight: 600;
    font-size: 0.85rem;
    text-align: center;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee-track {
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
  }

  @media (max-width: 992px) {
    text-align: center;
    .glass-panel {
      padding: 1.75rem 0;
    }
    .card {
      width: 110px;
      height: 110px;
      gap: 8px;
    }
    .card-icon {
      width: 34px;
      height: 34px;
    }
    .card-label {
      font-size: 0.72rem;
    }
  }
`;

export default Wrapper;
