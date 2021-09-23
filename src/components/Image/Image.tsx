import React, { ReactElement } from 'react';
import { StyledImage } from './Image.styled';
import { ImageProps } from './Image.type';

export default function Image({
  alt,
  fidelity,
  isCircle,
  id,
  objectFit,
  src,
  style,
  $width,
}: ImageProps): ReactElement | never {
  if (!src && !id) throw new Error('id, src 중 한 가지는 필수로 입력해야 합니다.');

  if (src) {
    return <StyledImage $width={$width} objectFit={objectFit} isCircle={isCircle} src={src} alt={alt} style={style} />;
  }

  const extensions = ['webp', 'png', 'jpg'];
  const imgUrlWithoutExt = `https://i.imgur.com/${id}${$width ? '_d' : ''}`;
  const query = `?${$width ? `maxwidth=${$width}` : ''}&${fidelity ? `fidelity=${fidelity}` : ''}`;

  return (
    <picture>
      {extensions.map((extension, index) => {
        src = `${imgUrlWithoutExt}.${extension}${query}`;

        return index !== extensions.length - 1 ? (
          <source key={index} srcSet={src} />
        ) : (
          <StyledImage
            $width={$width}
            objectFit={objectFit}
            isCircle={isCircle}
            key={index}
            src={src}
            alt={alt}
            style={style}
          />
        );
      })}
    </picture>
  );
}

Image.defaultProps = {
  alt: '',
  objectFit: 'cover',
  isCircle: false,
};
