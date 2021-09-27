import styled from 'styled-components';

// utils
import { pxToRem } from '@/util/styleUtils';

export const Container = styled.div`
  .next {
    height: ${pxToRem(36)};
    padding: 0 ${pxToRem(11)};
    svg {
      width: ${pxToRem(16)};
      height: ${pxToRem(16)};
    }

    .text {
      display: none;
    }
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    margin: 16px 0 24px;
  }

  @media screen and (min-width: 1025px) {
    .next {
      .text {
        display: block;
        font-size: ${({ theme }) => theme.fontSize.s};
        font-weight: 400;
        padding-bottom: ${pxToRem(3)};
        order: -1;
      }
    }
  }
`;

export const StyledGalleryHeader = styled.h2`
  font-size: ${pxToRem(32)};
  margin: 0;
  color: ${({ theme }) => theme.color.white};
`;
