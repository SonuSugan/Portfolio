import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 4rem;
  .Project {
    padding: 4% 5%;
  }
  .project-center {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    justify-content: center;
    align-items: center;
    padding: 3% 2%;
    gap: 2rem;
  }

  .Project-intro {
    width: 100%;
    justify-content: center;
  }
  .container {
    padding: 3%;
    background: #ffffff;
    border: 1px solid #ececec;
    box-shadow: 0 8px 32px rgba(20, 30, 60, 0.08);
    justify-content: center;
    text-align: center;
    border-radius: 18px;
    overflow: hidden;
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }

  .container:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 40px rgba(20, 30, 60, 0.14);
  }

  .container img {
    width: 90%;
    height: 90%;
    border-radius: 10px;
  }

  .live-preview {
    position: relative;
    width: 75%;
    margin: 0 auto;
    padding-top: 50%;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #ececec;
    background: #fafbfc;
  }

  .live-preview iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 300%;
    height: 300%;
    border: 0;
    transform: scale(0.3333);
    transform-origin: 0 0;
  }

  .live-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 100px;
    background: rgba(20, 30, 60, 0.75);
    backdrop-filter: blur(4px);
    color: #ffffff;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.03em;
  }

  .live-badge .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6);
    animation: live-pulse 1.8s ease-in-out infinite;
  }

  @keyframes live-pulse {
    0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); }
    70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
    100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
  }
  .Project-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .button {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  @media only screen and (min-width: 300px) and (max-width: 500px) {
    .span1 {
      font-size: 2.4rem;
    }
    .span2 {
      font-size: 3.2rem;
    }

    .button {
      justify-content: space-evenly;
      align-items: center;
    }
  }
  @media (max-width: 992px) {
    .project-center {
      display: flex;
      flex-direction: column-reverse;
      align-items: stretch;
    }
    .span4 {
      font-size: 1.8rem;
    }
    .Project {
      align-items: center;
      text-align: center;
    }
  }
`;

export default Wrapper;


