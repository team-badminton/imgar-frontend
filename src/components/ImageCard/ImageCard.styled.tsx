import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../theme/themes';

import { SetWidthProps } from './ImageCard.type';

export const LinkContainer = styled.a<SetWidthProps>`
  display: block;
  width: ${({ width }) =>
    width && typeof width === 'number' ? width + 'px' : width && typeof width === 'string' ? width : '100%'};
`;

export const StyledImageCard = styled.article<SetWidthProps>`
  width: ${({ width }) =>
    width && typeof width === 'number' ? width + 'px' : width && typeof width === 'string' ? width : '100%'};
  background: ${defaultTheme.color.darkGray};
  border-radius: 5px;
  box-shadow: 0 0 10px ${defaultTheme.color.black};
  cursor: pointer;
  position: relative;
  h3 {
    color: ${defaultTheme.color.white};
    font-size: ${defaultTheme.fontSize.s};
    margin: 0 auto;
    padding: ${defaultTheme.spaceSize.s} ${defaultTheme.spaceSize.m} 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  em {
    position: absolute;
    top: ${defaultTheme.spaceSize.s};
    right: ${defaultTheme.spaceSize.s};
    background: ${defaultTheme.color.primaryColor};
    font-style: normal;
    padding: ${defaultTheme.spaceSize.xs} ${defaultTheme.spaceSize.s};
    border-radius: 5px;
    box-shadow: 0 0 10px ${defaultTheme.color.black};
  }
`;

export const StyledImageCardFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  color: ${defaultTheme.color.lightGray};
  font-size: ${defaultTheme.fontSize.xs};
  padding: ${defaultTheme.spaceSize.m} 0;
  div {
    display: flex;
    align-items: center;
  }
  div > span {
    margin-left: ${defaultTheme.spaceSize.xs};
  }
  div:hover {
    color: ${defaultTheme.color.white};
  }
`;
