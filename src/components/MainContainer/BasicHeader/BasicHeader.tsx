import Logo from '@/components/Logo/Logo';
import Search from '@/components/Search/Search';
import { SearchBarButton } from '@/components/SearchBar/SearchBar.styled';
import { useTypedSelector } from '@/redux';
import { pxToRem } from '@/util/styleUtils';
import React, { ReactElement, useEffect } from 'react';
import { BasicHeaderContainer, SearchWindowContainer } from './BasicHeader.styled';

function SearchToggle(): ReactElement {
  const [isShowSearchWindow, setIsShowSearchWindow] = React.useState<boolean>(false);
  return (
    <>
      <SearchBarButton onClick={() => setIsShowSearchWindow(prev => !prev)} />
      {isShowSearchWindow ? (
        <SearchWindowContainer>
          <Search />
        </SearchWindowContainer>
      ) : null}
    </>
  );
}

export default React.memo(function BasicHeader(): ReactElement {
  const innerWidth = useTypedSelector(state => state.display.innerWidth);
  const isMobile = innerWidth < 679;

  return (
    <BasicHeaderContainer>
      {isMobile ? <SearchToggle /> : null}
      <Logo as="h1" to="/" />
      {isMobile ? null : <Search />}
      <div
        css={`
          width: ${isMobile ? '0px' : '100px'};
        `}
      ></div>
    </BasicHeaderContainer>
  );
});
