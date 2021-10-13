import styled from 'styled-components';

// utils
import { pxToRem } from '@/util/styleUtils';

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Content = styled.div`
  margin: 16px 0 24px;
`;

export const StyledPostHeader = styled.h2`
  font-size: ${pxToRem(24)};
  margin: 0;
  color: ${({ theme }) => theme.color.white};
`;
