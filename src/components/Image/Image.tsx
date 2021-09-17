import React, { ReactElement } from 'react';
import { Picture } from './Image.styled';
import { ImageProps } from './Image.typed';

export default function Image({ id, src, width, alt, isCircle, style, objectFit }: ImageProps): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pathWithFileName, extensionInSrc, query] = src.split(/\?|\.(?=[^.]*$)/);
  const extensions = ['webp', 'png', 'jpg'];

  return (
    <Picture width={width} objectFit={objectFit} isCircle={isCircle}>
      {extensions.map((extension, index) => {
        if (extensions.includes(extensionInSrc)) {
          src = `${pathWithFileName}.${extension}.${query}`;
        }

        return index !== extensions.length - 1 ? (
          <source key={id} srcSet={src} />
        ) : (
          <img key={id} src={src} alt={alt} style={style} />
        );
      })}
    </Picture>
  );
}

Image.defaultProps = {
  width: '100%',
  objectFit: 'cover',
  isCircle: false,
};
