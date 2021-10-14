import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const ProfilePostsHeaderContainer = styled.div`
  display: flex;
  height: ${pxToRem(49)};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`;

export const ProfilePostsHeaderTitle = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
