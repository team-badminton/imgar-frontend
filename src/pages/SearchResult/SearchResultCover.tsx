import { Button } from '@/components';
import InputBox from '@/components/InputBox/InputBox';
import React, { ReactElement, useMemo } from 'react';
import { useLocation } from 'react-router';
import {
  AdvancedSearchContainer,
  SearchOptionContainer,
  SearchResultCoverContainer,
  SearchResultTitle,
} from './SearchResult.styled';

function AdvancedSearch(): ReactElement {
  const [allOf, setAllOf] = React.useState<string>('');
  const [anyOf, setAnyOf] = React.useState<string>('');
  const [exactly, setExactly] = React.useState<string>('');
  const [not, setNot] = React.useState<string>('');
  const [tag, setTag] = React.useState<string>('');
  const [fileType, setFileType] = React.useState<string>('');
  const [imageSize, setImageSize] = React.useState<string>('');

  return (
    <AdvancedSearchContainer>
      <InputBox
        labelText="All of"
        placeholder="Search for all of these words (and)..."
        value={allOf}
        setValue={setAllOf}
      />
      <InputBox
        labelText="Any of"
        placeholder="Search for all of these words (and)..."
        value={anyOf}
        setValue={setAnyOf}
      />
      <InputBox
        labelText="Exactly"
        placeholder="Search for all of these words (and)..."
        value={exactly}
        setValue={setExactly}
      />
      <InputBox labelText="Not" placeholder="Search for all of these words (and)..." value={not} setValue={setNot} />
      <InputBox
        labelText="In these tags"
        placeholder="Search for all of these words (and)..."
        value={tag}
        setValue={setTag}
      />
      {/* <InputBox labelText="All of" placeholder="Search for all of these words (and)..." value /> */}
    </AdvancedSearchContainer>
  );
}

export default function SearchResultCover(): ReactElement {
  const location = useLocation();
  const searchQuery = useMemo(() => new URLSearchParams(location.search).get('q'), [location.search]);
  const [showAdvanceSearch, setShowAdvanceSearch] = React.useState<boolean>(false);

  return (
    <SearchResultCoverContainer>
      <SearchResultTitle>
        Search results for <strong>&quot;{searchQuery}&quot;</strong>
      </SearchResultTitle>
      <SearchOptionContainer>
        <Button
          text={'Advanced Search'}
          onClick={() => setShowAdvanceSearch(prev => !prev)}
          size="medium"
          hoverBackgroundColor="blue"
          {...(showAdvanceSearch ? { backgroundColor: 'blue' } : null)}
        />
        {}
      </SearchOptionContainer>
    </SearchResultCoverContainer>
  );
}
