import { useTypedSelector } from '@/redux';
import { scrollSelector } from '@/redux/slices/displayReducer';
import React, { ReactElement, useLayoutEffect, useRef, useState } from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import { ContainerWrapper, HeaderContainer, HeaderCover } from './MainContainer.styled';
import { HeaderProps } from './MainContainer.type';

export default function MainContainer({
  children,
  headerBackground,
  customHeader,
  headerCover,
}: HeaderProps): ReactElement {
  const scrollOffset = useTypedSelector(scrollSelector);
  const [threshold, setThreshold] = useState(0);
  const headerCoverRef = useRef<HTMLDivElement>(null);
  const BODY_OFFSET = 75;
  const HEADER_HEIGHT = 70;

  useLayoutEffect(() => {
    setThreshold(
      headerCover
        ? Math.max(headerCoverRef.current?.getBoundingClientRect().height - BODY_OFFSET - HEADER_HEIGHT * 2)
        : 0,
    );
  }, []);

  const headerPosition =
    scrollOffset > threshold ? Math.max(-HEADER_HEIGHT, (scrollOffset - threshold) * (headerCover ? -1 : -3)) : 0;
  const coverPosition = scrollOffset < threshold ? -((BODY_OFFSET / threshold) * scrollOffset) : -BODY_OFFSET;
  const isShowCustomHeader = scrollOffset > (threshold + HEADER_HEIGHT) / (headerCover ? 1 : 3);

  return (
    <ContainerWrapper gradient={!headerCover}>
      <HeaderCover
        headerBackground={!!headerCover && headerBackground}
        style={
          isShowCustomHeader
            ? { position: 'fixed', height: HEADER_HEIGHT, zIndex: 1 }
            : { top: coverPosition, position: 'absolute', background: headerCover ? null : 'transparent' }
        }
        headerHeight={HEADER_HEIGHT}
        ref={headerCoverRef}
        hasShadow={isShowCustomHeader}
      >
        {isShowCustomHeader ? null : headerCover || <div style={{ height: 70 }} />}
        <HeaderContainer style={{ top: isShowCustomHeader ? 0 : headerPosition }} headerHeight={HEADER_HEIGHT}>
          {isShowCustomHeader && customHeader ? (
            customHeader
          ) : (
            <>
              <Logo as="h1" to="/" />
              <Search />
            </>
          )}
        </HeaderContainer>
      </HeaderCover>
      <div style={{ position: 'relative', top: threshold + HEADER_HEIGHT * 2 }}>{children}</div>
    </ContainerWrapper>
  );
}
