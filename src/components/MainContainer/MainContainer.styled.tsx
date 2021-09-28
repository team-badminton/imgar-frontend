import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { ContainerWrapperProps, HeaderContainerProps, HeaderCoverProps } from './MainContainer.type';

export const ContainerWrapper = styled.div<ContainerWrapperProps>`
  ${({ theme, gradient }) =>
    gradient ? `background: linear-gradient(180deg, ${theme.color.backgroundNavy} 70px, rgba(0, 0, 0, 0) 450px);` : ''}
`;

export const HeaderCover = styled.header<HeaderCoverProps>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  ${({ headerBackground, theme }) =>
    headerBackground
      ? `
  background-image: url(${headerBackground});
  background-size: cover;
  background-position: bottom;
  `
      : `
  background-color: ${theme.color.backgroundNavy};
  `}
  ${({ hasShadow }) =>
    hasShadow
      ? `
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.7);
  `
      : ''}
  transition: box-shadow 0.3s;
  padding-top: ${({ headerHeight }) => pxToRem(headerHeight)};
`;

export const HeaderContainer = styled.div<HeaderContainerProps>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: ${({ headerHeight }) => pxToRem(headerHeight)};
  padding: 0 ${pxToRem(15)};
  z-index: 1;
`;

export const MainSection = styled.main`
  position: relative;
`;
