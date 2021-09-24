import styled from 'styled-components';

// types
import { StyledButtonProps } from './Button.type';

// utils
import { pxToRem } from '@/util/styleUtils';

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor, theme }) => theme.color[backgroundColor]};
  border: 0;
  border-radius: ${({ borderRadius }) => borderRadius};
  box-sizing: border-box;
  color: ${({ color, theme }) => theme.color[color]};
  cursor: pointer;
  font-size: ${({ fontSize, size, theme }) =>
    fontSize ? theme.fontSize[fontSize] : size === 'large' ? pxToRem(15) : pxToRem(12)};
  height: ${({ size }) => (size === 'medium' ? pxToRem(24) : size === 'large' ? pxToRem(36) : pxToRem(16))};
  margin: ${({ margin }) => margin ?? '0'};
  padding: ${({ padding }) => padding};
  :hover {
    background-color: ${({ hoverBackgroundColor, theme }) => theme.color[hoverBackgroundColor]};
    color: ${({ hoverColor, theme }) => theme.color[hoverColor]};
  }
  > .img {
    width: ${({ size }) => (size === 'medium' ? pxToRem(15) : size === 'large' ? pxToRem(22) : pxToRem(10))};
    height: ${({ size }) => (size === 'medium' ? pxToRem(15) : size === 'large' ? pxToRem(22) : pxToRem(10))};
    margin: ${({ imageMargin }) => imageMargin};
  }
`;
