import React, { ReactElement } from 'react';

// styles
import { StyledButton } from './Button.styled';

// types
import { ButtonProps } from './Button.type';

// utils
import { pxToRem } from '@/util/styleUtils';

export default function Button({
  alt,
  backgroundColor,
  borderRadius,
  color,
  fontSize,
  size,
  hoverBackgroundColor,
  hoverColor,
  img,
  imageMargin,
  margin,
  padding,
  text,
  style,
}: ButtonProps): ReactElement {
  if (img && !alt) throw new Error('img는 alt prop과 함께 사용되어야 합니다.');
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
      fontSize={fontSize}
      size={size}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverColor={hoverColor}
      imageMargin={imageMargin}
      margin={margin}
      padding={padding}
      style={style}
    >
      {typeof img === 'undefined' ? (
        ''
      ) : typeof img === 'string' ? (
        <img className="img" src={img} alt={alt} />
      ) : (
        (() => {
          const Img = img as React.FC<React.SVGProps<SVGSVGElement>>;
          return <Img className="img" aria-label={alt} />;
        })()
      )}
      {text}
    </StyledButton>
  );
}

Button.defaultProps = {
  borderRadius: pxToRem(3),
  backgroundColor: 'primaryColor',
  color: 'white',
  size: 'medium',
  padding: `0 ${pxToRem(9)} 0 ${pxToRem(9)}`,
};
