import React, { ReactElement } from 'react';
import { StyledImage } from './Image.styled';
import { ImageProps } from './Image.type';

export default function Image({
  alt,
  fidelity,
  isCircle,
  hash,
  objectFit,
  src,
  style,
  $width,
}: ImageProps): ReactElement | never {
  if (!src && !hash) throw new Error('hash, src 중 한 가지는 필수로 입력해야 합니다.');

  if (src) {
    return <StyledImage $width={$width} objectFit={objectFit} isCircle={isCircle} src={src} alt={alt} style={style} />;
  }

  const extensions = ['webp', 'png', 'jpg'];
  const imgUrlWithoutExt = `https://i.imgur.com/${hash}${$width ? '_d' : ''}`;
  const query = `?${$width ? `maxwidth=${$width}` : ''}&${fidelity ? `fidelity=${fidelity}` : ''}`;

  // 수정사항 picture로 옮기기
  return (
    <picture>
      {extensions.map((extension, index) => {
        const imageSrc = `${imgUrlWithoutExt}.${extension}${query}`;

        return index !== extensions.length - 1 ? (
          <source key={extension} srcSet={imageSrc} />
        ) : (
          <StyledImage
            $width={$width}
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
