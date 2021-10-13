import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { LogoContainerProps } from './Logo.type';

export const LogoContainer = styled.div<LogoContainerProps>`
  width: ${({ icon }) => (icon ? pxToRem(34) : pxToRem(94))};
  margin-right: ${({ theme }) => theme.spaceSize.m};
  padding: 0;
  line-height: 0;
  img {
    display: block;
  }
`;
