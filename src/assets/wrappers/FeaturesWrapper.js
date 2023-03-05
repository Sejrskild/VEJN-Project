import styled from "styled-components";

export default styled.section`
  position: relative;
  padding: 10em 0 5rem 0;

  /* Waves */
  .custom-shape-divider-top-1677856791 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1677856791 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 55px;
  }

  .custom-shape-divider-top-1677856791 .shape-fill {
    fill: var(--primary-background);
  }

  /* Features */
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 1400px;
  }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    position: relative;
    height: 8em;

    &:hover {
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
      transition: 1s ease-in-out;
    }
  }

  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    position: absolute;
    top: -1.5rem;
    color: var(--primary-blue);
  }

  span {
    font-family: "Josefin Sans", sans-serif;
  }

  @media screen and (min-width: 2400px) {
    .feature {
      &:hover {
        .feature-icon {
          top: -2rem;
          scale: 1.2;
          transition: .3s ease-in-out;
        }
      }
    }
  }
`;
