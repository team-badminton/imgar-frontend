import React, { ReactElement } from 'react';
import { StyledImage } from './Image.styled';
import { ImageProps } from './Image.type';

export default function Image({
  alt,
  fidelity,
  isCircle,
  imageId,
  objectFit,
  src,
  style,
  imageWidth,
}: ImageProps): ReactElement | never {
  if (!src && !imageId) throw new Error('imageId, src 중 한 가지는 필수로 입력해야 합니다.');

  if (src) {
    return (
      <StyledImage
        imageWidth={imageWidth}
        objectFit={objectFit}
        isCircle={isCircle}
        src={src}
        alt={alt}
        style={style}
      />
    );
  }

  const extensions = ['webp', 'png', 'jpg'];
  const imgUrlWithoutExt = `https://i.imgur.com/${imageId}${imageWidth ? '_d' : ''}`;
  const query = `?${imageWidth ? `maxwidth=${imageWidth}` : ''}&${fidelity ? `fidelity=${fidelity}` : ''}`;

  return (
    <picture>
      {extensions.map((extension, index) => {
        const imageSrc = `${imgUrlWithoutExt}.${extension}${query}`;

        return index !== extensions.length - 1 ? (
          <source key={extension} srcSet={imageSrc} />
        ) : (
          <StyledImage
            imageWidth={imageWidth}
            objectFit={objectFit}
            isCircle={isCircle}
            key={extension}
            src={imageSrc}
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
