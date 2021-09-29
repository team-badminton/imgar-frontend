import Logo from '@/components/Logo/Logo';
import Search from '@/components/Search/Search';
import React, { ReactElement } from 'react';
import { BasicHeaderContainer } from './BasicHeader.styled';

export default function BasicHeader(): ReactElement {
  return (
    <BasicHeaderContainer>
      <Logo as="h1" to="/" />
      <Search />
      베이직헤더
    </BasicHeaderContainer>
  );
}
