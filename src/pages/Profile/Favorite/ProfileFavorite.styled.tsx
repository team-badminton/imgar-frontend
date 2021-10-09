import { pxToRem } from '@/util/styleUtils';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ScrollButtonProps } from './ProfileFavorite.type';

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
    top: ${pxToRem(1)};
    left: ${pxToRem(23)};
    width: ${pxToRem(0)};
    height: ${pxToRem(0)};
    transform: translateY(-100%);
    border: 7px solid white;
    border-color: ${({ theme }) => `transparent transparent ${theme.color.emeraldGreen} transparent`};
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: ${pxToRem(1)};
    width: ${pxToRem(30)};
    height: ${pxToRem(7)};
    border-radius: ${({ theme }) => `${theme.borderRadius.xl} 0 0 0`};
    transform: translateY(-100%);
    background-color: ${({ theme }) => theme.color.emeraldGreen};
  }
`;

export const FoldersWrapper = styled.div`
  width: 100%;
  height: ${pxToRem(130)};
  position: relative;
`;

export const FolderList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  padding-right: ${pxToRem(60)};
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    width: 52px;
    height: 4px;
    border-radius: 2px;
    background-color: #9fa9c4;
  }
  &::-webkit-scrollbar-track {
    background-color: #3b4257;
  }
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

export const ScrollButton = styled.button<ScrollButtonProps>`
  height: 100%;
  width: ${pxToRem(60)};
  position: absolute;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.white};
  ${({ $direction, theme }) =>
    $direction === 'prev'
      ? `
  left: 0;
  background-image: linear-gradient(to left, transparent, ${theme.color.backgroundDarkNavy});
  `
      : `
  right: 0;
  background-image: linear-gradient(to right, transparent, ${theme.color.backgroundDarkNavy});
  `}
  z-index: 1;
  svg {
    position: absolute;
    ${({ $direction }) =>
      $direction === 'prev'
        ? `
  left: 0;
  `
        : `
  right: 0;
  `}
    transform: translateY(-50%);
  }
  &:focus {
    outline-offset: ${pxToRem(-8)};
  }
`;
