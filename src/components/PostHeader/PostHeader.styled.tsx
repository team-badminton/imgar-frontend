import styled from 'styled-components';
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
  }

  @media screen and (min-width: 1025px) {
    .text {
      display: block;
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: 400;
      padding-bottom: ${pxToRem(3)};
      order: -1;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  margin: 16px 0 24px;
`;

export const StyledPostHeader = styled.h2`
  font-size: ${pxToRem(24)};
  margin: 0;
  color: ${({ theme }) => theme.color.white};
`;
