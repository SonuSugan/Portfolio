import styled from "styled-components";

const Wrapper = styled.nav`
  background: #ffffff;
  border-bottom: 1px solid #ececec;
  box-shadow: 0 4px 24px rgba(20, 30, 60, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding);
  height: 7vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 50;
  transition: var(--transition);

  // logo and toggle design

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black);
    font-size: 2rem;
    font-weight: bold;
  }

  .logo_heading_tex {
    font-size: 2rem;
    color: var(--black);
  }

  // list menu design

  .menu {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
  li {
    color: var(--black);
    gap: 1rem;
    padding: 5% 0%;
    font-size: 1.1rem;
    position: relative;
  }

  .button1 {
    color: var(--black);
    position: relative;
    transition: color 0.25s ease;
  }

  .button1::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: var(--blue);
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  // hover effect for menu

  .button1:hover {
    cursor: pointer;
    color: var(--blue);
  }

  .button1:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  li > .active {
    color: var(--blue);
  }

  li > .active::after {
    transform: scaleX(1);
  }



  Link {
    color: var(--black);
  }

  // toggle button style

  .button {
    display: none;
    flex: none;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    background-color: #f3f5f9;
    color: var(--black);
    font-size: 1.35rem;
    transition: background 0.2s ease, color 0.2s ease;
  }

  // hover effect for toggle button

  .button:hover {
    cursor: pointer;
    background-color: #eaf6fe;
    color: var(--blue);
  }

  // displaying none the menu
  // and display the toggle menu button
  // on small tab and mobile

  @media (max-width: 992px) {
    .menu {
      display: none;
    }
    .button {
      display: flex;
    }
    .logo_heading {
      font-size: 1.7rem;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 550px) {
    .logo_heading_tex  {
      font-size: 1.2rem;
    }
  }
`;

export default Wrapper;
