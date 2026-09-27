import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 4rem;
  padding: 4% 5%;

  .cert-center {
    margin-top: 2rem;
  }

  .cert-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 1.25rem;
  }

  .cert-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.9rem;
    padding: 1.1rem 1.25rem;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 24px rgba(20, 30, 60, 0.07);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .cert-badge {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 6px 16px rgba(20, 30, 60, 0.18);
    font-size: 1.3rem;
  }

  .cert-badge.gold {
    color: #d98c00;
  }

  .cert-badge.blue {
    color: var(--blue);
  }

  .cert-card:hover {
    box-shadow: 0 16px 32px rgba(20, 30, 60, 0.12);
    transform: translateY(-4px);
  }

  .cert-card.has-image {
    cursor: pointer;
  }

  .cert-card.has-badge {
    padding-top: 1.6rem;
  }

  .cert-thumb {
    position: relative;
    width: 100%;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #ececec;
  }

  .cert-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .cert-thumb-overlay {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(15, 23, 42, 0.45);
    color: #ffffff;
    font-size: 1.1rem;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .cert-card.has-image:hover .cert-thumb-overlay {
    opacity: 1;
  }

  .cert-lightbox {
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: rgba(15, 23, 42, 0.8);
    cursor: pointer;
  }

  .cert-lightbox img {
    max-width: 90vw;
    max-height: 85vh;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    cursor: default;
  }

  .cert-lightbox-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .cert-lightbox-close:hover {
    background: rgba(255, 255, 255, 0.28);
  }

  .cert-placeholder {
    width: 100%;
    height: 150px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    font-size: 2.75rem;
  }

  .cert-placeholder.gold {
    background: #fff4e0;
    color: #f0c37a;
  }

  .cert-placeholder.blue {
    background: #eaf6fe;
    color: #a9d8f7;
  }

  .cert-text {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .cert-title {
    color: var(--black);
    font-weight: 700;
    font-size: 0.98rem;
  }

  .cert-subtitle {
    color: var(--gray);
    font-size: 0.82rem;
  }

  @media (max-width: 992px) {
    text-align: center;
    .cert-center {
      max-width: 100%;
    }
    .cert-card {
      text-align: left;
    }
  }
`;

export default Wrapper;
