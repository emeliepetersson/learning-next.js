import css from "styled-jsx/css";

export default css.global`
  body {
    margin: 0;
    padding: 0 0 100px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: #333;
    font-family: sans-serif;
    background-color: salmon;
  }
  main {
    width: 100vw;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    margin-top: 100px;
  }
  p {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  img {
    width: 600px;
  }
`;
