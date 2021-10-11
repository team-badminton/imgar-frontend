import React from 'react';
import { css } from 'styled-components';
export function pxToRem(px: number | string): string {
  return parseFloat(px as string) / 16 + 'rem';
}

export function widthConvertor(width: number | string): string {
  return typeof width === 'number' ? pxToRem(width) : width;
}

export const a11yHidden = css`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`;

export function hexToRgb(hex: string, alpha?: number): string {
  const upperCaseHex = hex.toUpperCase().replace('#', '');

  const h = '0123456789ABCDEF';
  const r = h.indexOf(upperCaseHex[0]) * 16 + h.indexOf(upperCaseHex[1]);
  const g = h.indexOf(upperCaseHex[2]) * 16 + h.indexOf(upperCaseHex[3]);
  const b = h.indexOf(upperCaseHex[4]) * 16 + h.indexOf(upperCaseHex[5]);

  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return `rgb(${r}, ${g}, ${b})`;
}

export function convertLink(text: string) {
  return text
    ?.split(/(https?:\/\/[\w/.\-_=?&#$]+)|(\n)|(#.+)/)
    .filter(str => str)
    .map((str, index) =>
      str.includes('http') ? (
        <a key={str + index} href={str} target="_blank" rel="noopener noreferrer">
          {str}
        </a>
      ) : (
        str
      ),
    );
}
