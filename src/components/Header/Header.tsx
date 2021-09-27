import { useTypedSelector } from '@/redux';
import { scrollSelector } from '@/redux/slices/displayReducer';
import React, { ReactElement, useEffect, useMemo } from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import { HeaderContainer, HeaderCover } from './Header.styled';
import { HeaderProps } from './Header.type';

export default function Header({ children, headerBackground, threshold, bodyRef }: HeaderProps): ReactElement {
  const scrollOffset = useTypedSelector(scrollSelector);
  const headerPosition = scrollOffset > threshold ? Math.max(-65, (scrollOffset - threshold) * -1) : 0;
  const coverPosition = scrollOffset < threshold ? -((50 / threshold) * scrollOffset) : -50;

  return (
    <>
      <HeaderCover headerBackground={headerBackground} style={{ transform: `translate3d(0px,${coverPosition}px,0px)` }}>
        {children}
      </HeaderCover>
      <HeaderContainer style={{ top: headerPosition }}>
        <Logo as="h1" />
        <Search />
      </HeaderContainer>
    </>
  );
}
