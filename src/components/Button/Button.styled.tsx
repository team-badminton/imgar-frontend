import styled from 'styled-components';

// types
import { StyledButtonProps } from './Button.type';

// utils
import { pxToRem } from '@/util/styleUtils';

import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor, theme }) => theme.color[backgroundColor]};
  border: 0;
  border-radius: ${pxToRem(3)};
  box-sizing: border-box;
  color: ${({ color, theme }) => theme.color[color]};
  cursor: pointer;
  font-size: ${({ fontSize, size, theme }) =>
    fontSize ? theme.fontSize[fontSize] : size === 'large' ? pxToRem(15) : pxToRem(12)};
  gap: ${({ size }) => (size === 'large' ? pxToRem(13) : pxToRem(5))};
  height: ${({ size }) => (size === 'medium' ? pxToRem(24) : size === 'large' ? pxToRem(36) : pxToRem(16))};
  margin: ${({ margin }) => margin};
  padding: 0 ${pxToRem(9)} 0 ${pxToRem(9)};
  :hover {
    background-color: ${({ hoverBackgroundColor, theme }) => theme.color[hoverBackgroundColor]};
    color: ${({ hoverColor, theme }) => theme.color[hoverColor]};
  }
  > .img {
    width: ${({ size }) => (size === 'medium' ? pxToRem(15) : size === 'large' ? pxToRem(22) : pxToRem(10))};
    height: ${({ size }) => (size === 'medium' ? pxToRem(15) : size === 'large' ? pxToRem(22) : pxToRem(10))};
  }
`;
