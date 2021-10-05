import { hexToRgb, pxToRem } from '@/util/styleUtils';
import styled, { keyframes } from 'styled-components';

export const LoadingModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: '';
    display: block;
    width: ${({ theme }) => theme.spaceSize.xl};
    height: ${({ theme }) => theme.spaceSize.xl};
    border-radius: 50%;
    border: ${pxToRem(3)} solid;
    border-color: ${({ theme }) => hexToRgb(theme.color.blue, 0.3)} ${({ theme }) => theme.color.blue}
      ${({ theme }) => hexToRgb(theme.color.blue, 0.3)} ${({ theme }) => hexToRgb(theme.color.blue, 0.3)};
    animation: ${rotate} 1s infinite;
  }
`;
