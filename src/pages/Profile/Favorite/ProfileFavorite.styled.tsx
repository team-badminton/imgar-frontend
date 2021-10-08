import { pxToRem } from '@/util/styleUtils';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const FolderIcon = styled.div`
  position: relative;
  width: ${pxToRem(74)};
  height: ${pxToRem(54)};
  border-radius: ${({ theme }) => `0 ${theme.borderRadius.xl} ${theme.borderRadius.xl} ${theme.borderRadius.xl}`};
  background-color: ${({ theme }) => theme.color.emeraldGreen};
  box-shadow: 0 ${pxToRem(10)} ${pxToRem(20)} rgba(0, 0, 0, 0.6);
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: ${pxToRem(30)};
    height: ${pxToRem(0)};
    transform: translateY(-98%);
    border: 6px solid white;
    border-color: ${({ theme }) => `transparent transparent ${theme.color.emeraldGreen} transparent`};
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: ${pxToRem(6)};
    height: ${pxToRem(6)};
    border-radius: ${({ theme }) => `${theme.borderRadius.xl} 0 0 0`};
    transform: translateY(-98%);
    background-color: ${({ theme }) => theme.color.emeraldGreen};
  }
`;

export const FoldersWrapper = styled.div<{ containerWidth: number }>`
  height: ${pxToRem(130)};
  background-color: ${({ theme }) => theme.color.backgroundDarkNavy};
  margin: 0 calc((100vw - ${({ containerWidth }) => pxToRem(containerWidth)}) / 2 * -1);
  padding: 0 calc((100vw - ${({ containerWidth }) => pxToRem(containerWidth)}) / 2);
  margin-bottom: -1px;
`;

export const FolderList = styled.ul`
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

export const FolderLink = styled(NavLink)`
  display: block;
  padding-top: ${({ theme }) => theme.spaceSize.s};
  &.isActive {
    transform: scale(1.2);
    span {
      font-weight: bold;
    }
  }
  transition: transform 0.2s;
  margin: 0 ${pxToRem(15)};
`;

export const FolderName = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;
  width: ${pxToRem(74)};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-top: ${({ theme }) => theme.spaceSize.m};
`;
