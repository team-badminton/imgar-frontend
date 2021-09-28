import { pxToRem } from '@/util/styleUtils';
import React from 'react';
import styled from 'styled-components';
import { SetDisplayProps } from './ImageCard.type';

export const StyledArticle = styled.article<SetDisplayProps>`
  width: ${({ imageCardWidth }) =>
    imageCardWidth && typeof imageCardWidth === 'number'
      ? imageCardWidth + 'px'
      : imageCardWidth && typeof imageCardWidth === 'string'
      ? imageCardWidth
      : '100%'};
  background: ${({ theme }) => theme.color.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  box-shadow: 0 0 ${pxToRem(10)} ${({ theme }) => theme.color.black};
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.color.white};
    opacity: 0;
    transition: opacity 0.25s ease 0s;
  }
  &:hover::after {
    opacity: 0.2;
  }
  h3 {
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0 auto;
    padding: ${({ theme }) => theme.spaceSize.s} ${({ theme }) => theme.spaceSize.m} 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: 1.5;
    position: absolute;
    bottom: ${48 + 'px'};
    background: ${({ theme }) => theme.color.darkGray};
    width: 100%;
  }
  em {
    position: absolute;
    top: ${({ theme }) => theme.spaceSize.s};
    right: ${({ theme }) => theme.spaceSize.s};
    background: ${({ theme }) => theme.color.primaryColor};
    font-style: normal;
    padding: ${({ theme }) => theme.spaceSize.xs} ${({ theme }) => theme.spaceSize.s};
    border-radius: ${({ theme }) => theme.borderRadius.s};
    box-shadow: 0 0 ${pxToRem(10)} ${({ theme }) => theme.color.black};
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: ${({ theme }) => parseInt(theme.spaceSize.m) + 28.8 + 'px'} 0 ${({ theme }) => theme.spaceSize.m} 0;
  div {
    display: flex;
    align-items: center;
    z-index: 1;
  }
  div > span {
    margin-left: ${({ theme }) => theme.spaceSize.xs};
  }
  div:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;
