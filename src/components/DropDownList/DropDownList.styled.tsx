import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { SetDisplayProps } from './DropDownList.type';
export const StyledDropDownButton = styled.button`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`;

export const StyledDropDownUL = styled.ul<SetDisplayProps>`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  position: absolute;
  z-index: 1; // ImageCard들이 z-index: 1;을 가지기 때문
  background: ${({ theme, themeType }) => (themeType === 'dark' ? theme.color.darkGray : theme.color.white)};
  color: ${({ theme, themeType }) => (themeType === 'dark' ? theme.color.white : theme.color.black)};
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  box-shadow: 0 0 ${pxToRem(10)} ${({ theme }) => theme.color.black};
  padding: ${({ theme }) => theme.spaceSize.m} 0;
  button {
    padding: ${({ theme }) => theme.spaceSize.s} ${({ theme }) => theme.spaceSize.m};
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
  }
  button:hover {
    background: ${({ theme }) => theme.color.lightGray};
  }
  li.selected {
    font-weight: ${({ useType }) => (useType === 'selectBox' ? 700 : 'initial')};
  }
`;
