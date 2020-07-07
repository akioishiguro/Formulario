import styled from 'styled-components';

import city from '../../assets/city.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Contact = styled.div`
  display: grid;
  grid-template-rows: 65px 100px auto auto;
  grid-gap: 30px;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;

  img {
    margin-left: 85%;
    width: 60px;
    opacity: 50%;
  }

  p {
    color: #000;
    text-align: center;
    font-size: 30px;

    width: 100%;
    max-width: 500px;
  }

  span {
    color: #666360;
    font-size: 20px;
  }

  input {
    background: #fdcdcc;
    border-radius: 10px;
    border: 2px solid #fdcdcc;
    padding: 16px;
    width: 100%;
    color: #666360;
    display: flex;
    align-items: center;
  }

  textarea {
    display: flex;
    align-items: center;

    width: 100%;
    height: 100px;

    background: #fdcdcc;
    color: #666360;
    border-radius: 10px;
    border: 2px solid #fdcdcc;

    padding: 16px;

    resize: none;
  }

  button {
    background: #fdcdcc;
    border-radius: 10px;
    border: 2px solid #fdcdcc;

    width: 120px;

    margin-top: 10px;
    margin-left: 75%;
    padding: 15px;
    color: #000;
    display: flex;
    align-items: center;

    svg {
      margin-left: 10px;
      color: #d3342d;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${city});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: rgba(26, 33, 38, 0.95);
    height: 100%;
    width: 100%;

    h1 {
      color: #d3342d;
      font-size: 60px;
      text-align: center;
    }

    img {
      width: 772px;
    }
  }
`;
