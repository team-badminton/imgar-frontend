import React, { ReactElement, useState } from 'react';
import { useSuggestQuery } from '@/redux/api/v3';
import { SearchBarButton, SearchBarContainer, SearchBarInput } from './SearchBar.styled';
import { SearchBarProps } from './SearchBar.type';

export default function SearchBar({ placeholder }: SearchBarProps): ReactElement {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <SearchBarButton />
    </SearchBarContainer>
  );
}
