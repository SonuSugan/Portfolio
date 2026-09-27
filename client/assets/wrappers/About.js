import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  /* height: 50vh; */
  margin-top: 5rem;
  .About-center {
    position: relative;
    z-index: 1;
    padding: var(--padding1);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    justify-content: space-between;
    /* height: 100vh; */
    gap: 2rem;
  }

  .About-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3% 3%;
  }
  .About-froend {
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: transform 0.35s ease;
  }
  .About-froend:hover {
    transform: translateY(-4px);
  }
  .About-froend > img {
    width: 450px;
    height: 320px;
    display: block;
    margin: 0 auto;
  }
  @media only screen and (min-width: 300px) and (max-width: 500px) {
    .span1 {
      font-size: 2.4rem;
    }
    .span2 {
      font-size: 3.2rem;
    }
    .About-froend > img {
      width: 350px;
      height: 250px;
    }
  }
  @media (max-width: 992px) {
    .About-center {
      display: flex;
      flex-direction: column;
    }
    .About-intro {
      align-items: center;
    }
    .social-icon > * {
      transform: scale(0.9);
    }
    .About-froend > img {
      width: 350px;
      height: 250px;
    }
  }
`;

export default Wrapper;
