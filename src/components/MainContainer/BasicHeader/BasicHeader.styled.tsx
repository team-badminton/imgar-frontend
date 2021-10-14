import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const BasicHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${pxToRem(75)};
  padding: 0 ${pxToRem(15)};
`;

export const SearchWindowContainer = styled.div`
  position: absolute;
  top: ${pxToRem(75)};
  left: 0;
  padding: ${({ theme }) => theme.spaceSize.m};
  background-color: ${({ theme }) => theme.color.backgroundGray};
  width: 100vw;
`;
