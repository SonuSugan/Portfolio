import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 6rem;

  .footer {
    background: var(--black);
    color: #cfd3de;
    padding: 4rem 5% 0;
  }

  .footer-top {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-brand h3 {
    font-family: 'Merriweather', serif;
    color: #ffffff;
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
  }

  .footer-brand p {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #aab0c0;
    max-width: 32ch;
    margin-bottom: 1.25rem;
  }

  .footer-contact h4 {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 1.1rem;
    font-weight: 600;
  }

  .footer-contact {
    display: flex;
    flex-direction: column;
  }

  .footer-contact a,
  .footer-contact span {
    color: #aab0c0;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
    cursor: pointer;
    width: fit-content;
    transition: color 0.2s ease;
  }

  .footer-contact a:hover {
    color: var(--blue);
  }

  .f-icons {
    display: flex;
    gap: 1rem;
  }

  .img {
    width: 18px;
    height: 18px;
    color: #ffffff;
    transition: transform 0.25s ease, color 0.25s ease;
  }

  .f-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
  }

  .f-icons a:hover .img {
    transform: translateY(-3px);
    color: var(--blue);
  }

  .footer-bottom {
    padding: 1.5rem 0;
    text-align: center;
    font-size: 0.8rem;
    color: #7d8394;
  }

  @media (max-width: 992px) {
    margin-top: 3rem;
    .footer {
      padding: 3rem 6% 0;
    }
    .footer-top {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2.5rem;
    }
    .footer-brand p {
      max-width: none;
      margin-left: auto;
      margin-right: auto;
    }
    .footer-links,
    .footer-contact {
      align-items: center;
    }
    .f-icons {
      justify-content: center;
    }
  }
`;

export default Wrapper;
