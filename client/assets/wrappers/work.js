import styled from "styled-components";

const Wrapper = styled.div`
  /* height: 50vh; */
  margin-top: 3rem;
  .Work {
    /* display: flex; */
    padding: 4% 5%;
  }
  .Work-center {
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

  .Work-intro {
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    /* border: 2px solid black; */
    text-align: center;
    align-items: center;
  }
  .container {
    /* border: 2px solid black; */
    display: flex;
    padding: 2% 2%;
    /* backdrop-filter: var(--blue) saturate(180%) blur(10px); */
    /* background-color: var(--blue); */
    /* background: var(--blue3); */
    justify-content: center;
    /* text-align: center; */
    align-items: center;
  }

  .container img {
    width: 50%;
    height: 50%;
  }
  .Work-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    .Work-center {
      display: flex;
      flex-direction: column-reverse;
    }
    .span4 {
      font-size: 1.8rem;
    }
    .Work {
      align-items: center;
      text-align: center;
    }
  }
`;

export default Wrapper;
