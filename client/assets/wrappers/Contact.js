import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-top: 4rem;
  margin-bottom: 8rem;
  padding: var(--padding1);

  .contact-heading .span2 {
    display: block;
    margin-bottom: 0.5rem;
  }

  .contact-center {
    position: relative;
    z-index: 1;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.3fr);
    border-radius: 24px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0 20px 60px rgba(20, 30, 60, 0.12);
  }

  .contact-intro {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 3rem;
    background: linear-gradient(150deg, #eaf6fe 0%, #dcedfb 100%);
    box-sizing: border-box;
  }

  .contact-desc {
    color: var(--gray);
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 340px;
  }

  .contact-right {
    position: relative;
    padding: 4rem 3.5rem;
    background: #ffffff;
  }

  .contact-right form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 1.25rem;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
  }

  .input label {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--black);
  }

  .input label .required {
    color: #e5484d;
  }

  .input input,
  .input textarea {
    width: 100%;
    padding: 0.9rem 1rem;
    background: #fafbfc;
    border: 1px solid #d9dee6;
    border-radius: 12px;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--black);
    transition: border-color 0.25s ease, background 0.25s ease;
  }

  .input input:focus,
  .input textarea:focus {
    outline: none;
    border-color: var(--blue);
    background: #ffffff;
  }

  .input textarea {
    min-height: 130px;
    resize: vertical;
  }

  .form-status {
    margin: -0.5rem 0 0;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    font-size: 0.88rem;
    font-weight: 600;
    text-align: center;
  }

  .form-status.success {
    background: #e7f8ee;
    color: #1a8245;
  }

  .form-status.error {
    background: #fdecec;
    color: #c62828;
  }

  .contact-right .button-17 {
    align-self: center;
    margin-top: 0.5rem;
    padding: 0.9rem 2.75rem;
    height: auto;
    border-radius: 100px;
    background: var(--blue);
    color: #ffffff;
    font-weight: 700;
    font-size: 0.95rem;
    box-shadow: 0 12px 24px rgba(38, 163, 255, 0.35);
    transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  }

  .contact-right .button-17:hover {
    background: #0f8fe0;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(38, 163, 255, 0.42);
  }

  .contact-right .button-17:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
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
    .contact-center {
      grid-template-columns: minmax(0, 1fr);
    }
    .contact-intro {
      text-align: center;
      align-items: center;
      padding: 3rem 2rem;
    }
    .contact-desc {
      max-width: 100%;
    }
    .contact-right {
      padding: 3rem 1.75rem;
    }
    .form-row {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`;

export default Wrapper;
