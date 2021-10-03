import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const BasicHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${pxToRem(75)};
  padding: 0 ${pxToRem(15)};
`;
