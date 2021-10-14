import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  position: relative;
  height: ${pxToRem(70)};
  width: 100%;
  min-width: ${pxToRem(450)};
  align-items: center;
  justify-content: end;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledTadDetailHeader = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: initial;
`;
