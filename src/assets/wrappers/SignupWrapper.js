import styled from "styled-components";

export default styled.section`
  background-color: #d6dfef;
  padding: 4em;

  .container {
    display: flex;
    flex-direction: column;
  }

  .left-col {
    order: 2;
  }

  .right-col {
    order: 1;
    margin-right: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    margin-top: 1em;

    input[type="text"] {
      border: none;
      border-radius: 0.3em;
      padding: 0.5em;
      margin-bottom: 0.5em;

      &:focus {
        outline: none;
      }
    }

    button[type="submit"] {
      border: none;
      border-radius: 0.3em;
      padding: 0.5em;
      background-color: #065bff;
      width: 40%;
      color: white;
      text-align: center;
      font-weight: 200;
    }
  }

  .left-col {
    font-size: 0.6em;
    margin-bottom: 1em;

    .created {
      margin-top: 1em;
    }
  }

  h3 {
    font-weight: 300;
  }

  span {
    font-family: "Josefin Sans", sans-serif;
  }

  @media screen and (min-width: 696px) {

    padding: 0;
    margin:0;
    width: 100%;


    .container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 2em;
      margin: 0;

      .right-col {
        order: 2;


      }

      .left-col {
        order: 1;
        max-width: 400px;

        p {
          font-size: 1.4em;
        }
      }
    }
  }
`;
