import React from 'react';
import styled from 'styled-components';

// assets
import WaveUnderLine from './assets/WaveUnderLine.svg';

export const StyledFigure = styled.figure`
  margin: 0;
  img,
  figcaption {
    margin-bottom: ${({ theme }) => theme.spaceSize.l};
  }
  img {
    cursor: zoom-in;
  }
`;

export const StyledFigureCaption = styled.figcaption`
  color: ${({ theme }) => theme.color.white};
  display: inline-block;
  padding: 0 ${({ theme }) => theme.spaceSize.l};
  a {
    border-bottom: 1px solid #01b96b;
    word-break: break-word;
  }
  a:hover {
    background-image: url(${WaveUnderLine});
    background-position: 0 100%;
    background-size: auto 36px;
    background-repeat: repeat;
    text-decoration: none;
    border-bottom: none;
    padding-bottom: 3px;
  }
`;
