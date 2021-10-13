import React, { ReactElement, useEffect, useState } from 'react';

// components
import { PostNextButton } from '@/components';
import Search from '@/components/Search/Search';
import Logo from '@/components/Logo/Logo';

// styles
import { ButtonConTainer, GalleryHeaderContainer, Title } from './GalleryHeader.styled';

// types
import { GelleryHeaderProps } from './GalleryHeader.type';
import { pxToRem } from '@/util/styleUtils';

// etc
import { Link } from 'react-router-dom';

export default function GalleryHeader({ positionX, width, title, username }: GelleryHeaderProps): ReactElement {
  const [headerType, setHeaderType] = useState<1 | 2>(1);
  const threshold = 100;

  useEffect(() => {
    const handleHeaderType = () => {
      window.scrollY >= threshold ? setHeaderType(2) : setHeaderType(1);
    };

    window.addEventListener('scroll', handleHeaderType);

    return () => {
      window.removeEventListener('scroll', handleHeaderType);
    };
  }, []);

  return (
    <GalleryHeaderContainer>
      <Logo as="h1" to="/" icon />
      <Search
        className="search"
        css={`
          transition: transform ease 0.5s;
          transform: translateY(0);
          ${headerType === 2 &&
          `
            transform: translateY(${pxToRem(-70)});
          `}
        `}
      />
      <div
        css={`
          display: flex;
          transition: transform ease 0.5s;
          transform: translateY(${pxToRem(60)});
          justify-content: space-between;
          width: ${pxToRem(width)};
          position: absolute;
          left: ${pxToRem(positionX)};
          ${headerType === 2 &&
          `
            transform: translateY(0);
          `}
        `}
      >
        <Title aria-hidden="true">
          <h2 className="title">{title}</h2>
          <Link to={`/user/${username}`} className="author">
            by <span className="bold">{username}</span>
          </Link>
        </Title>
        <PostNextButton
          css={`
            margin-bottom: ${pxToRem(10)};
            margin-left: ${pxToRem(20)};
          `}
        />
      </div>
      <ButtonConTainer></ButtonConTainer>
    </GalleryHeaderContainer>
  );
}
