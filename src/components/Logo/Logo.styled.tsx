import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { LogoContainerProps } from './Logo.type';

export const LogoContainer = styled.div<LogoContainerProps>`
  width: ${({ icon }) => (icon ? pxToRem(34) : pxToRem(94))};
  margin: 0;
  padding: 0;
  img {
    display: block;
  }
`;
