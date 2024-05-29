import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 6rem;
  .footer {
    display: flex;
    align-items: center;
    /* margin: -0.5rem -3.5rem; */
    position: relative;
    margin-top: -7rem;
    height: 40;
  }

  .footer > img {
    height: 40vh;
    width: 100%;
  }
  .f-content {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
    gap: 4rem;
    color: white;
  }
  .f-icons {
    display: flex;
    gap: 2rem;
    margin-top: -2rem;
  }
  .img {
    width: 50px;
    height: 50px;
  }
  @media only screen and (min-width: 300px) and (max-width: 500px) {
  }
  @media (max-width: 992px) {
    .img {
      width: 30px;
      height: 30px;
    }
  }
`;

export default Wrapper;
