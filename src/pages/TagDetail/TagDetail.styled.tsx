import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${pxToRem(100)};
  height: ${pxToRem(375)};
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  h2 {
    font-size: ${pxToRem(52)};
  }
  .description {
    font-size: ${pxToRem(22)};
  }
  .postCount {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-top: ${({ theme }) => theme.spaceSize.m};
  }
`;
