import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { StyledSelectBoxListULProps } from './SelectBoxList.type';

export const StyledSelectBoxListUL = styled.ul<StyledSelectBoxListULProps>`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  position: absolute;
  z-index: 1; // ImageCard들이 z-index: 1;을 가지기 때문
  background: ${({ theme, themeType }) => (themeType === 'dark' ? theme.color.darkGray : theme.color.white)};
  color: ${({ theme, themeType }) => (themeType === 'dark' ? theme.color.white : theme.color.black)};
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  box-shadow: 0 0 ${pxToRem(10)} ${({ theme }) => theme.color.black};
  padding: ${({ theme }) => theme.spaceSize.m} 0;
  li {
    text-align: left;
  }
  button {
    width: 100%;
    padding: ${({ theme }) => theme.spaceSize.s} ${({ theme }) => theme.spaceSize.m};
    text-align: left;
  }
`;
