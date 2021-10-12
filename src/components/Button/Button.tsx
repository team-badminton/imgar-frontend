import React, { ReactElement } from 'react';

// styles
import { StyledButton } from './Button.styled';

// types
import { ButtonProps } from './Button.type';

export default function Button({
  alt,
  backgroundColor,
  color,
  className,
  fontSize,
  size,
  hoverBackgroundColor,
  hoverColor,
  img,
  onClick,
  onKeyUp,
  text,
  style,
  to,
}: ButtonProps): ReactElement {
  if (img && alt !== '' && !alt) throw new Error('img는 alt prop과 함께 사용되어야 합니다.');

  return (
    <StyledButton
      as={!to && 'a'}
      $backgroundColor={backgroundColor}
      className={className}
      $color={color}
      fontSize={fontSize}
      size={size}
      to={to}
      role={!to ? 'button' : null}
      $hoverBackgroundColor={hoverBackgroundColor}
      $hoverColor={hoverColor}
      onClick={onClick}
      onKeyUp={onKeyUp}
      style={style}
      tabIndex={0}
    >
      {!img ? (
        ''
      ) : typeof img === 'string' ? (
        <img className="img" src={img} alt={alt} />
      ) : (
        (() => {
          const Img = img as React.FC<
            {
              title?: string;
              titleId?: string;
            } & React.SVGProps<SVGSVGElement>
          >;
          return <Img className="img" title={alt} />;
        })()
      )}
      {text && <span className="text">{text}</span>}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'white',
};
