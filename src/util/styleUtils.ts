import { Picture, Video } from '@/components';
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

export function convertLink(text: string, withImage?: boolean) {
  let result: (string | Element | JSX.Element)[] = text
    ?.split(/(https?:\/\/[\w/.\-_=?&#$]+)|(\n)|(#.+)/)
    .filter(str => str);

  if (withImage) {
    result = result
      .map((str: string) => {
        if (str.includes('http')) {
          if (withImage && str.match(/i\.imgur.*\/.*\.(jpeg|jpg|png)$/)) {
            const splicedStr = str.split('/');
            return (
              <div>
                <Picture
                  css={`
                    margin-top: ${pxToRem(4)};
                  `}
                  imageHeight="100"
                  imageId={splicedStr[splicedStr.length - 1]}
                />
              </div>
            );
          }
          if (withImage && str.match(/i\.imgur.*\/.*\.(gif|mp4)$/)) {
            const splicedStr = str.split('/');
            return (
              <div>
                <Video
                  css={`
                    height: ${pxToRem(100)};
                    margin-top: ${pxToRem(4)};
                    width: auto;
                  `}
                  imageId={splicedStr[splicedStr.length - 1].slice(0, -4)}
                />
              </div>
            );
          }
        }
        return str;
      })
      .sort((a, b) => {
        if (React.isValidElement(a)) return 1;
        if (React.isValidElement(b)) return -1;
        return 0;
      });

    return result.map((str, index) => {
      if (typeof str === 'string' && str.includes('http')) {
        return (
          <a key={str + index} href={str} target="_blank" rel="noopener noreferrer">
            {str}
          </a>
        );
      }
      return str;
    });
  }
}
