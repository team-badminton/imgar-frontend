import React from 'react';
import { Picture, Video } from '@/components';
import { pxToRem } from './styleUtils';

export function convertLink(text: string, withImage?: boolean) {
  let result: (string | Element | JSX.Element)[] = text
    ?.split(/(https?:\/\/[\w/.\-_=?&#$]+)|(\n)|(#.+)/)
    .filter(str => str);

  if (withImage) {
    result = result
      .map((str: string, index) => {
        if (str.includes('http')) {
          if (withImage && str.match(/i\.imgur.*\/.*\.(jpeg|jpg|png)/)) {
            const splicedStr = str.split('/');
            return (
              <Picture
                key={index}
                css={`
                  margin-top: ${pxToRem(4)};
                  display: block;
                `}
                imageHeight="100"
                imageId={splicedStr[splicedStr.length - 1]}
              />
            );
          }
          if (withImage && str.match(/i\.imgur.*\/.*\.(gifv?|mp4)/)) {
            const splicedStr = str.split('/');
            return (
              <Video
                key={index}
                css={`
                  height: ${pxToRem(100)};
                  margin-top: ${pxToRem(4)};
                  width: auto;
                  display: block;
                `}
                imageId={splicedStr[splicedStr.length - 1].replace(/\?.*$/, '').replace(/\.(gifv?|mp4)/, '')}
              />
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
