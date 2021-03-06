import { pxToRem } from '@/util/styleUtils';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { TooltipBoxProps } from './Tooltip.type';

const TooltipAppearAnimation = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const TooltipWrapper = styled(Link)`
  position: relative;
  display: block;
  height: auto;
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const TooltipBox = styled.div<TooltipBoxProps>`
  position: absolute;
  display: flex;
  z-index: 6;
  justify-content: center;
  align-items: center;
  animation: ${TooltipAppearAnimation} 0.2s backwards;
  width: ${pxToRem(362)};
  padding: ${pxToRem(30)};
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.color.primaryColor};
  ${({ arrow, arrowOffset }) => {
    if (arrow === 'up') {
      return `
        bottom: 0; 
        left: 50%;
        transform: translateX(calc(-50% - ${pxToRem(arrowOffset ?? 0)})) translateY(calc(100% + ${pxToRem(25)}));
        margin-top: ${pxToRem(25)};
      `;
    }
    if (arrow === 'down') {
      return `
        top: 0; 
        left: 50%;
        transform: translateX(calc(-50% - ${pxToRem(arrowOffset ?? 0)})) translateY(calc(-1 * (100% + ${pxToRem(25)})));
      `;
    }
  }}
  &::after {
    content: '';
    display: block;
    position: absolute;
    border: solid ${pxToRem(5)};
    border-color: ${({ theme }) => theme.color.primaryColor} ${({ theme }) => theme.color.primaryColor} transparent
      transparent;
    ${({ arrow, arrowOffset }) => {
      if (arrow === 'up') {
        return `
          top: 0px;
          transform: translateX(${pxToRem(arrowOffset ?? 0)}) translateY(-48%) rotate(-45deg);
        `;
      }
      if (arrow === 'down') {
        return `
          bottom: 0px;
          transform: translateX(${pxToRem(arrowOffset ?? 0)}) translateY(48%) rotate(135deg);
        `;
      }
    }}
  }
`;
