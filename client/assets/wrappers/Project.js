import styled from "styled-components";

const Wrapper = styled.div`
  /* height: 50vh; */
  margin-top: 5rem;
  .Project {
    /* display: flex; */
    padding: 4% 5%;
  }
  .project-center {
    padding: var(--padding1);
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    /* height: 100vh; */
    padding: 3% 2%;
    gap: 2rem;
    /* height: 30vh; */
    /* width: 90%; */
  }

  .Project-intro {
    /* display: flex; */
    justify-content: center;
    /* flex-direction: column; */
    /* border: 2px solid black; */
  }
  .container {
    /* border: 2px solid black; */
    padding: 2% 2%;
    backdrop-filter: var(--blue) saturate(180%) blur(10px);
    /* background-color: var(--blue); */
    background: var(--blue3);
    justify-content: center;
    text-align: center;
  }

  .container img {
    width: 90%;
    height: 90%;
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
  .button-17 > span {
    /* align-items: center;
    justify-content: center;
    text-align: center; */
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


