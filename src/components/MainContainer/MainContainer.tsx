import { useTypedSelector } from '@/redux';
import { scrollSelector } from '@/redux/slices/displayReducer';
import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import { ContainerWrapper, HeaderContainer, HeaderCover, MainSection } from './MainContainer.styled';
import { HeaderProps } from './MainContainer.type';

export default function MainContainer({
  children,
  headerBackground,
  customHeader,
  headerCover,
}: HeaderProps): ReactElement {
  const headerCoverRef = useRef<HTMLDivElement>(null);
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const BODY_OFFSET = 75;
  const HEADER_HEIGHT = 70;
  const [showCustomHeader, setShowCustomHeader] = useState(false);
  const [threshold, setThreshold] = useState(0);

  useEffect(() => {
    setThreshold(headerCoverRef.current.getBoundingClientRect().height - BODY_OFFSET - HEADER_HEIGHT * 2);
  }, []);

  useEffect(() => {
    mainSectionRef.current.style.top = `${threshold + HEADER_HEIGHT * 2}px`;
    function handleScroll(): void {
      const scrollOffset = window.pageYOffset;
      const headerPosition =
        scrollOffset > threshold ? Math.max(-HEADER_HEIGHT, (scrollOffset - threshold) * (headerCover ? -1 : -3)) : 0;
      const coverPosition = scrollOffset < threshold ? -((BODY_OFFSET / threshold) * scrollOffset) : -BODY_OFFSET;
      console.log(threshold);
      console.log(scrollOffset);
      const isOverThreshold = scrollOffset >= (threshold + HEADER_HEIGHT) / (headerCover ? 1 : 3);
      setShowCustomHeader(isOverThreshold);

      headerCoverRef.current.style.position = isOverThreshold ? 'fixed' : 'absolute';
      headerCoverRef.current.style.top = isOverThreshold ? null : `${coverPosition}px`;
      headerCoverRef.current.style.height = isOverThreshold ? `${HEADER_HEIGHT}px` : null;
      headerCoverRef.current.style.zIndex = isOverThreshold ? '1' : null;
      headerCoverRef.current.style.background = isOverThreshold ? null : headerCover ? null : 'transparent';

      headerContainerRef.current.style.top = isOverThreshold ? '0' : `${headerPosition}px`;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerCover, threshold]);

  return (
    <ContainerWrapper gradient={!headerCover}>
      <HeaderCover
        headerBackground={!!headerCover && headerBackground}
        headerHeight={HEADER_HEIGHT}
        ref={headerCoverRef}
        hasShadow={showCustomHeader}
      >
        {showCustomHeader ? null : headerCover || <div style={{ height: 70 }} />}
        <HeaderContainer headerHeight={HEADER_HEIGHT} ref={headerContainerRef}>
          {showCustomHeader && customHeader ? (
            customHeader
          ) : (
            <>
              <Logo as="h1" to="/" />
              <Search />
            </>
          )}
        </HeaderContainer>
      </HeaderCover>
      <MainSection ref={mainSectionRef}>{children}</MainSection>
    </ContainerWrapper>
  );
}
