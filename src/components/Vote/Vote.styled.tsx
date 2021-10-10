import styled, { css } from 'styled-components';

// types
import { ContainterProps, Size } from './Vote.type';

// components
import { ReactComponent as ArrowIcon } from '@/assets/Icon/upIcon.svg';

// utils
import { pxToRem } from '@/util/styleUtils';

export const Container = styled.div<ContainterProps>`
  display: inline-flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: center;
  .up-btn,
  .down-btn {
    padding: ${({ size }) => (size === 'large' ? pxToRem(8) : pxToRem(5))};
    .img {
      stroke: ${({ theme }) => theme.color.lightGray};
      width: ${({ size }) => (size === 'large' ? pxToRem(24) : pxToRem(16))};
      height: ${({ size }) => (size === 'large' ? pxToRem(24) : pxToRem(16))};
      stroke-width: ${({ size }) => (size === 'large' ? pxToRem(1.5) : pxToRem(2))};
    }
  }
  .up-btn:hover {
    .img {
      stroke: ${({ theme }) => theme.color.primaryColor};
    }
  }
  .down-btn:hover {
    .img {
      stroke: ${({ theme }) => theme.color.crimsonRed};
    }
  }
  .up-btn {
    .img {
      stroke: ${({ selectedButton, theme }) => selectedButton === 'up-btn' && theme.color.primaryColor};
      fill: ${({ selectedButton, theme }) => selectedButton === 'up-btn' && theme.color.primaryColor};
    }
  }
  .down-btn {
    .img {
      stroke: ${({ selectedButton, theme }) => selectedButton === 'down-btn' && theme.color.crimsonRed};
      fill: ${({ selectedButton, theme }) => selectedButton === 'down-btn' && theme.color.crimsonRed};
    }
  }
`;

export const UpBtn = styled(ArrowIcon)``;

export const DownBtn = styled(ArrowIcon)`
  transform: rotate(180deg);
`;

export const Output = styled.output<Size>`
  padding: ${({ size }) => (size === 'large' ? pxToRem(8) : `0 ${pxToRem(6)}`)};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
`;
