import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  button {
    margin: 0 ${pxToRem(5)};
  }
`;
