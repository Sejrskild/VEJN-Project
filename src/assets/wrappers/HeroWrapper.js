import styled from "styled-components";

const Wrapper = styled.section`
  color: white;
  background: #0d0f15;
  padding: 2em;
  text-align: center;

  img {
    width: 112px;
  }

  h1 {
    margin-top: 1em;
    font-weight: 300;
    font-size: 2.5em;
  }

  p {
    font-size: 0.8em;
  }

  span {
    color: var(--primary-blue);
    &:hover {
      color: var(--primary-blue-100);
      transition: 1s ease-in-out;
    }
  }

  .vejn-text {
    font-family: "Josefin Sans", sans-serif;
    color: white;
  }

  @media screen and (min-width: 600px) {
    h1 {
      font-size: 3em;
    }

    p {
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: 1046px) {
    padding: 4em 8em;
  }

  @media screen and (min-width: 1200px) {
    padding: 3em 12em;

    h1 {
      width: 50%;
      margin: 0 auto;
      margin-top: .3em;
    }
  }

  @media screen and (min-width: 2400px) {
    padding: 3em 12em;

    h1 {
      width: 35%;
      margin: 0 auto;
      margin-top: .3em;
    }
  }
`;

export default Wrapper;
