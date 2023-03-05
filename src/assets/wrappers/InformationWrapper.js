import styled from "styled-components";

export default styled.section`
  background: var(--primary-background);
  color: white;
  text-align: center;
  width: 100%;
  padding-bottom: 2em;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 1em;
  }

  .left-col {
    /* text col */
    order: 2;
    margin-top: 3em;
  }

  .right-col {
    /* iphone col */
    order: 1;
  }

  h1 {
    font-weight: 400;
    font-size: 1.6em;
  }

  p {
    margin: 2em;
    font-size: 1.2em;
  }

  .blue {
    color: var(--primary-blue-100);
  }

  span {
    font-family: "Josefin Sans", sans-serif;
  }

  img {
    width: 70%;
    margin-top: 0.3em;
  }

  svg {
    fill: var(--primary-blue);
    width: 48px;
    height: 48px;
    margin-bottom: 0.4em;
  }

  @media screen and (min-width: 940px) {
    .container {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 8em;

      .left-col {
        /* text-col */
        margin-top: 0;
        order: 1;
        text-align: left;
      }

      .right-col {
        /* iphone col */
        order: 2;
      }

      .left-col-header {
        margin: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      img {
        width: 360px;
      }
    }
  }

  @media screen and (min-width: 1080px) {
    .left-col {
      padding: 0 4em;
    }

    img {
      width: 400px;
    }
  }

  @media screen and (min-width: 1280px) {
    .left-col {
      padding: 0 8em;

      img {
        width: 600px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .container {
      padding: 0 16em;
      max-width: 1200px;
    }

    .left-col {
      padding: 0 6em;

      img {
        width: 600px;
      }
    }
  }
`;
