import React, { ReactElement, useLayoutEffect, useRef, useState } from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
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
  const [showCustomHeader, setShowCustomHeader] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [coverHeight, setCoverHeight] = useState(0);

  useLayoutEffect(() => {
    // 화면에 렌더링 된 헤더와 커버의 사이즈를 계산하여 상태로 등록
    const computedHeaderHeight = headerContainerRef.current?.getBoundingClientRect().height;
    console.log(computedHeaderHeight);
    const computedCoverHeight = headerCoverRef.current?.getBoundingClientRect().height;
    setHeaderHeight(computedHeaderHeight);
    setCoverHeight(computedCoverHeight);
  }, []);

  useLayoutEffect(() => {
    // 임계값을 계산 -> 임계값을 넘어가면 커스텀 헤더를 출력
    // 임계값은 header커버가 있으면 계산된 헤더 커버의 높이 - 계산된 헤더의 높이 - 패럴럭스 오프셋을 하여 계산
    const threshold = headerCover ? coverHeight - BODY_OFFSET - (customHeaderHeight ?? headerHeight) : 0;

    // 본문 내용을 패럴럭스 스크롤이 끝날 때 헤더 아래로 올 수 있도록 배치
    mainSectionRef.current.style.top = `${
      headerCover ? coverHeight : BODY_OFFSET + (customHeaderHeight ?? headerHeight)
    }px`;

    function handleScroll(): void {
      const scrollOffset = window.pageYOffset;

      // 스크롤 오프셋이 임계값보다 크면 위치를 계산하여 서서히 뒤로 빠지도록 함
      // 임계값보다 작으면 그대로 위쪽에 고정
      // * (headerCover ? -1 : -3) 하는 이유는, 커버가 없으면 3배 빠르게 임계값을 넘어가도록 만들기 위함
      const headerPosition =
        scrollOffset > threshold ? Math.max(-headerHeight, (scrollOffset - threshold) * (headerCover ? -1 : -3)) : 0;

      // 스크롤 오프셋이 임계값보다 작으면 커버가 팰럴럭스 스크롤 되도록 함
      const coverPosition = scrollOffset < threshold ? -((BODY_OFFSET / threshold) * scrollOffset) : -BODY_OFFSET;

      // 현재 스크롤이 임계값을 넘어갔는지 확인
      // / (headerCover ? 1 : 3) 하는 이유는, 커버가 없으면 3배 느리게 임계값을 넘어가도록 만들기 위함
      // 느리게 하지않으면 커버가 없을때 패럴럭스 스크롤이 전혀 일어나지 않음
      const isOverThreshold = scrollOffset >= (threshold + headerHeight) / (headerCover ? 1 : 3);

      setShowCustomHeader(isOverThreshold);

      // 명령형으로 스타일 지정
      headerCoverRef.current.style.position = isOverThreshold ? 'fixed' : 'absolute';

      // 임계점을 넘었을 때 커버가 없다면 커스텀 헤더를 높이로 고정
      // 커버가 있다면 전체 커버를 높이로 고정
      headerCoverRef.current.style.height = isOverThreshold
        ? customHeaderHeight && !headerCover
          ? `${customHeaderHeight}px`
          : `${coverHeight + headerHeight}px`
        : null;

      // 임계점을 넘으면 높이를 헤더의 커버로 고정하고 헤더의 높이만 보일만큼 올려줌
      // 헤더 커버가 없다면 높이 조정하지 않고 상단에 고정만 함
      headerCoverRef.current.style.top = isOverThreshold
        ? headerCover
          ? `-${coverHeight + headerHeight - (customHeaderHeight ?? headerHeight)}px`
          : '0'
        : `${coverPosition}px`;
      headerCoverRef.current.style.zIndex = isOverThreshold ? '1' : null;
      headerCoverRef.current.style.background = isOverThreshold ? null : headerCover ? null : 'transparent';

      headerContainerRef.current.style.top = sticky ? (isOverThreshold ? '0' : `${headerPosition}px`) : null;
      headerContainerRef.current.style.position = sticky ? 'fixed' : null;
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [coverHeight, headerHeight]);

  return (
    <ContainerWrapper gradient={!headerCover}>
      <HeaderCover
        headerBackground={!!headerCover && headerBackground}
        darkenBackground={darkenBackground}
        headerHeight={headerHeight}
        ref={headerCoverRef}
        hasShadow={showCustomHeader}
      >
        {headerCover ?? <div style={{ height: headerHeight }} />}
        <HeaderContainer ref={headerContainerRef}>{showCustomHeader ? customHeader : <BasicHeader />}</HeaderContainer>
      </HeaderCover>
      <MainSection ref={mainSectionRef}>{children}</MainSection>
    </ContainerWrapper>
  );
}
