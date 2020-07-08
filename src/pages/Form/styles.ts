import styled from 'styled-components';

import img from '../../assets/img.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Contact = styled.div`
  display: grid;
  grid-template-rows: 65px 200px auto;
  grid-gap: 30px;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  img {
    margin-left: 85%;
    width: 60px;
  }

  p {
    color: #000;
    text-align: center;
    font-size: 30px;

    width: 100%;
    max-width: 500px;
  }

  button {
    background: #090817;
    border-radius: 10px;
    border: 2px solid #090817;

    width: 120px;

    margin-top: 50px;
    margin-left: 75%;
    padding: 15px;
    color: #fff;
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
  background: url(${img}) no-repeat center;
  background-size: cover;
`;
