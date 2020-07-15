import styled from 'styled-components';

import img from '../../assets/img.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  max-width: 700px;

  section {
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    img {
      width: 60px;
    }
  }

  p {
    color: #000;
    text-align: center;
    font-size: 25px;

    width: 100%;
    max-width: 500px;
  }

  form {
    width: 400px;

    button {
      background: #090817;
      border-radius: 10px;
      border: 2px solid #090817;

      width: 100px;

      font-size: 14px;

      margin-top: 16px;
      padding: 15px;
      color: #fff;
      display: flex;
      align-items: center;

      svg {
        margin-left: 10px;
        color: #d3342d;
      }
    }
  }

  @media (max-width: 1228px) {
    max-width: 100%;

    section {
      img {
        width: 100px;
      }
    }

    p {
      font-size: 35px;

      width: 100%;
      max-width: 700px;
    }

    form {
      width: 700px;
    }
  }

  @media (max-width: 505px) {
    height: 90vh;

    section {
      img {
        width: 50px;
      }
    }

    p {
      font-size: 20px;

      width: 100%;
      max-width: 400px;
    }
  }

  @media (max-width: 420px) {
    form {
      width: 350px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 375px) {
    form {
      width: 300px;
    }
    p {
      font-size: 16px;

      width: 100%;
      max-width: 300px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${img}) no-repeat center;
  background-size: cover;

  @media (max-width: 1228px) {
    display: none;
  }
`;
