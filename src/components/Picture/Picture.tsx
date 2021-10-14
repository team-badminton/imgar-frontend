import React, { forwardRef, ReactElement } from 'react';
import { StyledImage } from './Picture.styled';
import { PictureProps } from './Picture.type';

const Picture = forwardRef<HTMLImageElement, PictureProps>(
  (
    {
      alt,
      className,
      fidelity,
      isCircle,
      imageId,
      onClick,
      objectFit,
      src,
      style,
      tabIndex,
      imageWidth,
      imageHeight,
      inView = true,
    }: PictureProps,
    ref,
  ): ReactElement => {
    if (!src && !imageId) throw new Error('imageId, src 중 한 가지는 필수로 입력해야 합니다.');

    if (src) {
      return (
        <StyledImage
          alt={alt}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          isCircle={isCircle}
          objectFit={objectFit}
          onClick={onClick}
          src={src}
          style={style}
          tabIndex={tabIndex}
          className={className}
        />
      );
    }

    const extensions = ['webp', 'png', 'jpg'];
    const imgUrlWithoutExt = `https://i.imgur.com/${imageId}${imageWidth ? '_d' : ''}`;
    const query = `?${imageWidth ? `maxwidth=${imageWidth}` : ''}&${fidelity ? `fidelity=${fidelity}` : ''}`;

    return (
      <picture className={className}>
        {extensions.map((extension, index) => {
          const imageSrc = `${imgUrlWithoutExt}.${extension}${query}`;

          return index !== extensions.length - 1 ? (
            <source
              key={extension}
              data-src={!inView ? imageSrc : null}
              srcSet={inView ? imageSrc : null}
              type={`image/${extensions[index]}`}
            />
          ) : (
            <StyledImage
              alt={alt}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              isCircle={isCircle}
              key={extension}
              loading="lazy"
              objectFit={objectFit}
              onClick={onClick}
              ref={ref}
              style={style}
              data-src={inView ? imageSrc : null}
              src={!inView ? imageSrc : null}
              tabIndex={tabIndex}
            />
          );
        })}
      </picture>
    );
  },
);

Picture.defaultProps = {
  alt: '',
  objectFit: 'cover',
  isCircle: false,
  isLazyLoading: false,
};

Picture.displayName = 'Picture';

export default Picture;
