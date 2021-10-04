import React, { ReactElement, useLayoutEffect, useRef, useState } from 'react';
import BasicHeader from './BasicHeader/BasicHeader';
import { ContainerWrapper, HeaderContainer, HeaderCover, MainSection } from './MainContainer.styled';
import { HeaderProps } from './MainContainer.type';

export default function MainContainer({
  children,
  headerBackground,
  customHeader,
  headerCover,
  sticky,
  customHeaderHeight,
  darkenBackground,
}: HeaderProps): ReactElement {
  const headerCoverRef = useRef<HTMLDivElement>(null);
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const BODY_OFFSET = 75;
  const BASIC_HEADER_HEIGHT = 75;
  const [showCustomHeader, setShowCustomHeader] = useState<boolean>(false);
  const [coverHeight, setCoverHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const computedCoverHeight = headerCoverRef.current?.scrollHeight;
    setCoverHeight(computedCoverHeight);
    const observer = new ResizeObserver(() => {
      const computedCoverHeight = headerCoverRef.current?.scrollHeight;
      setCoverHeight(computedCoverHeight);
    });

    observer.observe(headerCoverRef.current);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    // 두 개의 임계값을 갖고있음
    // 첫번째는 스티키 헤더가 사라지는 타이밍 -> 커버 사이즈에서 사라질 스티키 헤더의 높이와 커스텀 헤더의 높이를 뺀다
    // 두번째는 커스텀 헤더가 나타나는 타이밍 ->
    // 첫 번째 임계값에서 스티키 헤더의 높이를 더한다. 첫번째 임계점이 지나고 스티키 헤더까지 완전히 사라지는 시점까지
    const headerHeight = customHeaderHeight ?? BASIC_HEADER_HEIGHT;
    const threshold1 = headerCover ? coverHeight - BASIC_HEADER_HEIGHT - headerHeight : 0;
    const threshold2 = threshold1 + BASIC_HEADER_HEIGHT;

    // 본문 내용을 패럴럭스 스크롤이 끝날 때 헤더 아래로 올 수 있도록 배치
    mainSectionRef.current.style.top = `${headerCover ? coverHeight - BODY_OFFSET : BODY_OFFSET + headerHeight}px`;

    function handleScroll(): void {
      const scrollOffset = window.pageYOffset;

      // 계산된 스크롤 오프셋이 필요함 임계점1를 기준으로 패럴럭스 스크롤이 되도록 추가로 이동하는 값을 계산
      const scrollOffsetWithBodyOffset = (BODY_OFFSET / threshold1) * scrollOffset;

      // 스크롤 오프셋이 임계값보다 크면 위치를 계산하여 서서히 뒤로 빠지도록 함
      // 임계값보다 작으면 그대로 위쪽에 고정
      // * (headerCover ? -1 : -2) 하는 이유는, 커버가 없으면 2배 빠르게 임계값을 넘어가도록 만들기 위함
      const headerPosition =
        scrollOffset > threshold1 - scrollOffsetWithBodyOffset
          ? (scrollOffset + scrollOffsetWithBodyOffset - threshold1) * (headerCover ? -1 : -2)
          : 0;

      // 스크롤 오프셋이 임계값보다 작으면 커버가 패럴럭스 스크롤 되도록 함
      const coverPosition = -scrollOffsetWithBodyOffset;

      // 현재 스크롤이 두번째 임계값을 넘어갔는지 확인 넘어갔다면 커스텀 헤더가 나타나도록 함
      const isOverThreshold2 = scrollOffset >= threshold2 - scrollOffsetWithBodyOffset;
      setShowCustomHeader(isOverThreshold2);

      headerCoverRef.current.style.position = isOverThreshold2 ? 'fixed' : 'absolute';

      // 임계점을 넘으면 헤더의 높이를 올려서 커스텀헤더의 높이가 보일만큼 올려줌
      // 헤더 커버가 없다면 높이 조정하지 않고 상단에 고정만 함
      headerCoverRef.current.style.top = isOverThreshold2 ? `-${coverHeight - headerHeight}px` : `${coverPosition}px`;
      headerCoverRef.current.style.zIndex = isOverThreshold2 ? '1' : null;
      headerCoverRef.current.style.background = isOverThreshold2 ? null : headerCover ? null : 'transparent';

      headerContainerRef.current.style.top = sticky ? (isOverThreshold2 ? '0' : `${headerPosition}px`) : null;
      headerContainerRef.current.style.position = sticky ? 'fixed' : null;
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [coverHeight, customHeaderHeight]);

  return (
    <ContainerWrapper gradient={!headerCover}>
      <HeaderCover
        headerBackground={!!headerCover && headerBackground}
        darkenBackground={darkenBackground}
        headerHeight={BASIC_HEADER_HEIGHT}
        ref={headerCoverRef}
        hasShadow={showCustomHeader}
      >
        {headerCover ?? <div style={{ height: BASIC_HEADER_HEIGHT }} />}
        <HeaderContainer ref={headerContainerRef}>{showCustomHeader ? customHeader : <BasicHeader />}</HeaderContainer>
      </HeaderCover>
      <MainSection ref={mainSectionRef}>{children}</MainSection>
    </ContainerWrapper>
  );
}
