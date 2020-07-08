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

  width: 100%;
  height: 100px;

  background: #090817;
  color: #666360;
  border-radius: 10px;
  border: 2px solid #090817;

  padding: 16px;
  margin-top: 16px;

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

  textarea {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    font-size:16px;
    resize: none;

    &::placeholder {
      color: #fff;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltips)`
  height: 22px;
  margin-left: 16px;

  > svg {
    margin: 0;
  }
`;
