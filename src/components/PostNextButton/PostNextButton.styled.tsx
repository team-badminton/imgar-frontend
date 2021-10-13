import styled from 'styled-components';

// components
import { Button } from '@/components';

// utils
import { pxToRem } from '@/util/styleUtils';

export const NextButton = styled(Button)`
  height: ${pxToRem(36)};
  padding: 0 ${pxToRem(11)};

  svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
  }

  .text {
    display: none;
    margin-left: ${pxToRem(5)};
  }

  @media screen and (min-width: 1025px) {
    .text {
      display: block;
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: 700;
      padding-top: ${pxToRem(1)};
      order: -1;
    }
  }
`;
