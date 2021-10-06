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
    padding: ${pxToRem(5)};
    .img {
      stroke: ${({ theme }) => theme.color.lightGray};
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

const commonBtnCss = css<Size>`
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  stroke-width: ${pxToRem(2)};

  stroke: ${({ theme }) => theme.color.primaryColor};
`;

export const UpBtn = styled(ArrowIcon)`
  ${commonBtnCss}
`;

export const DownBtn = styled(ArrowIcon)`
  transform: rotate(180deg);
  ${commonBtnCss}
`;

export const Output = styled.output`
  color: ${({ theme }) => theme.color.white};
  padding: 0 ${pxToRem(6)};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
`;
