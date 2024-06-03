import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 8rem;
  .contact-center {
    padding: var(--padding1);
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    /* height: 100vh; */
    gap: 2rem;
  }

  .contact-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3% 3%;
  }
  .contact-right {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5%;
    border-radius: 15px;
    background: var(--blue3);
  }

  .contact-right {
    box-shadow: 0 2px 3px 0 rgb(60 64 67 / 30%),
      0 1px 15px 1px rgb(60 64 67 / 15%);
    outline: none;
  }
  .About-froend > img {
    width: 450px;
    height: 320px;
    display: block;
    margin: 0 auto;
  }
  .input {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 1rem;
    /* justify-content: center; */
    align-items: center;
  }

  .input input {
    justify-content: center;
    width: 400px;
    /* height: 50px; */
    padding: 3% 3%;
    border-color: white;
    border-radius: 15px;
  }

  .input textarea {
    /* justify-content: center; */
    /* text-align: center; */
    /* align-items: center; */
    /* background: var(--blue3); */
    border: white;
    width: 380px;
  }

  @media only screen and (min-width: 300px) and (max-width: 500px) {
    .span1 {
      font-size: 2.4rem;
    }
    .span2 {
      font-size: 3.2rem;
    }
    .input input {
      /* justify-content: center; */
      width: 260px;
      /* height: 50px; */
      /* padding: 3% 3%; */
      /* border-color: white; */
      /* border-radius: 15px; */
    }
    .input textarea {
      /* justify-content: center; */
      /* text-align: center; */
      /* align-items: center; */
      /* background: var(--blue3); */
      /* border: white; */
      width: 240px;
    }
  }
  @media (max-width: 992px) {
    .contact1 {
      display: flex;
      flex-direction: column;
    }
    .contact-center {
      display: flex;
      flex-direction: column;
    }
    .contact-center {
      align-items: center;
    }
  }
`;

export default Wrapper;
