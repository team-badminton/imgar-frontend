import React from 'react';
import styled from 'styled-components';

import { SetWidthProps } from './ImageCard.type';

export const LinkContainer = styled.a<SetWidthProps>`
  display: block;
  width: ${({ width }) =>
    width && typeof width === 'number' ? width + 'px' : width && typeof width === 'string' ? width : '100%'};
`;

export const StyledImageCard = styled.article<SetWidthProps>`
  width: ${({ width }) =>
    width && typeof width === 'number' ? width + 'px' : width && typeof width === 'string' ? width : '100%'};
  background: ${({ theme }) => theme.color.darkGray};
  border-radius: 5px;
  box-shadow: 0 0 10px ${({ theme }) => theme.color.black};
  cursor: pointer;
  position: relative;
  h3 {
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0 auto;
    padding: ${({ theme }) => theme.spaceSize.s} ${({ theme }) => theme.spaceSize.m}; 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  em {
    position: absolute;
    top: ${({ theme }) => theme.spaceSize.s};
    right: ${({ theme }) => theme.spaceSize.s};
    background: ${({ theme }) => theme.color.primaryColor};
    font-style: normal;
    padding: ${({ theme }) => theme.spaceSize.xs} ${({ theme }) => theme.spaceSize.s};
    border-radius: 5px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.black};
  }
`;

export const StyledImageCardFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: ${({ theme }) => theme.spaceSize.m} 0;
  div {
    display: flex;
    align-items: center;
  }
  div > span {
    margin-left: ${({ theme }) => theme.spaceSize.xs};
  }
  div:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;
