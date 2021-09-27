import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { HeaderCoverProps } from './Header.type';

export const HeaderCover = styled.header<HeaderCoverProps>`
  width: 100%;
  height: 300px;
  ${({ headerBackground }) =>
    headerBackground &&
    `
  background-image: url(${headerBackground});
  background-size: cover;
  background-position: bottom;
  `};
`;

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  padding: ${pxToRem(15)};
`;
