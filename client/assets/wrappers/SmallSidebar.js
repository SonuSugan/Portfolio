import styled from 'styled-components';


const Wrapper = styled.aside`
  @media (min-width: 993px) {
    display: none;
  }
  .Sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(2px);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .show-sidebar .content {
    transform: translateX(0);
  }
  .content {
    background: #ffffff;
    width: min(80vw, 320px);
    height: 100%;
    margin-left: auto;
    border-radius: 20px 0 0 20px;
    padding: 4.5rem 1.5rem 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: -12px 0 40px rgba(20, 30, 60, 0.18);
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .close-button {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    background: #f3f5f9;
    border: none;
    border-radius: 50%;
    font-size: 1rem;
    color: var(--black);
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
  }
  .close-button:hover {
    background: #fde8e8;
    color: var(--red-dark);
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black);
    border-radius: 14px;
    padding: 0.65rem 0.75rem;
    text-transform: capitalize;
    transition: background 0.2s ease;
  }
  .nav-link:hover {
    background: #f3f8fe;
  }
  .scroll-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    font-size: 1.05rem;
  }
  .scroll-link:hover {
    color: var(--blue);
  }
  .icon {
    font-size: 1.15rem;
    margin-right: 1rem;
    width: 40px;
    height: 40px;
    flex: none;
    display: grid;
    place-items: center;
    background: #eaf6fe;
    color: var(--blue);
    border-radius: 12px;
  }
`;

export default Wrapper;