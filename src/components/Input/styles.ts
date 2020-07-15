import styled, { css } from 'styled-components';

import Tooltips from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrors: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #090817;
  border-radius: 10px;
  border: 3px solid #090817;
  padding: 16px;
  width: 100%;
  color: #fff;

  & + div {
    margin-top: 16px;
  }

  ${props =>
    props.isErrors &&
    css`
      border-color: #d3342d;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #2d79d3;
      border-color: #2d79d3;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #2d79d3;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    font-size:14px;
    &::placeholder {
      color: #fff;
    }
  }

  svg {
    margin-right: 16px;
  }

  @media (max-width: 375px) {
    input {
      font-size:12px;
    }

  }
`;

export const Error = styled(Tooltips)`
  height: 20px;
  margin-left: 16px;

  > svg {
    margin: 0;
    padding: 0;
  }
`;
