import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 5rem;
  .Hero-center {
    padding: var(--padding1);
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    justify-content: flex-start;
  }

  .social-icon > * {
    transform: scale(1);
  }

  .social-icon > *:hover {
    cursor: pointer;
  }

  .Tec-class {
    display: flex;
    justify-content: flex-start;
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
    font-size: 1.5rem;
    /* margin-bottom: 0.1rem; */
    /* text-shadow: var(--boxShadow); */
  }

  .images > img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .button-cv{
margin-top: 0.5rem;
  } 
  @media only screen and (min-width: 300px) and (max-width: 500px) {
    .span1 {
      font-size: 2.4rem;
    }
    .span2 {
      font-size: 3.2rem;
    }
    .image-font {
      font-size: 1rem;
    }
    .images > img {
      width: 22px;
      height: 22px;
      margin-right: 4px;
    }
  }
  @media (max-width: 992px) {
    margin-top: -25rem;
    .Hero-center {
      margin-top: 30rem;
      display: flex;
      flex-direction: column-reverse;
    }
    .Hero-intro {
      align-items: center;
    }
    .social-icon > * {
      transform: scale(0.9);
    }
    .image-font {
      font-size: 1.2rem;
    }
    .images > img {
      width: 25px;
      height: 20px;
      margin-right: 5px;
    }
  }
`;

export default Wrapper;
