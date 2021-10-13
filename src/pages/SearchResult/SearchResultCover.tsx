import { Button, Loading } from '@/components';
import InputBox from '@/components/InputBox/InputBox';
import { useTypedSelector } from '@/redux';
import { SearchUrlQuery } from '@/redux/api/types/queries';
import { a11yHidden } from '@/util/styleUtils';
import React, { ReactElement, useCallback, useEffect, useMemo, useRef } from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  AdvancedSearchContainer,
  SearchOptionContainer,
  SearchResultCoverContainer,
  SearchResultTitle,
} from './SearchResult.styled';

function AdvancedSearch({ isFetching }: { isFetching: boolean }): ReactElement {
  const [allOf, setAllOf] = React.useState<string>('');
  const [anyOf, setAnyOf] = React.useState<string>('');
  const [exactly, setExactly] = React.useState<string>('');
  const [not, setNot] = React.useState<string>('');
  const [tag, setTag] = React.useState<string>('');
  const [fileType, setFileType] = React.useState<string>('');
  const [imageSize, setImageSize] = React.useState<string>('');
  const containerWidth = useTypedSelector(state => state.display.masonryGalleryWidth);
  const history = useHistory();
  const formRef = useRef<HTMLFormElement>(null);

  const searchQuery = useMemo<SearchUrlQuery>(() => {
    const urlParams = new URLSearchParams(location.search);
    return {
      q: urlParams.get('q'),
      q_all: urlParams.get('q_all'),
      q_any: urlParams.get('q_any'),
      q_exactly: urlParams.get('q_exactly'),
      q_not: urlParams.get('q_not'),
      q_tags: urlParams.get('q_tags'),
      q_type: urlParams.get('q_type'),
      q_size_px: urlParams.get('q_size_px'),
      q_size_mpx: urlParams.get('q_size_mpx'),
      q_size_is_mpx: urlParams.get('q_size_is_mpx'),
    };
  }, [location.search]);

  useEffect(() => {
    setAllOf(searchQuery.q_all ?? '');
    setAnyOf(searchQuery.q_any ?? '');
    setExactly(searchQuery.q_exactly ?? '');
    setNot(searchQuery.q_not ?? '');
    setTag(searchQuery.q_tags ?? '');
  }, []);

  const submitHandler = useCallback<React.FormEventHandler<HTMLFormElement>>(
    e => {
      e.preventDefault();
      const query: SearchUrlQuery = {
        q_all: allOf,
        q_any: anyOf,
        q_exactly: exactly,
        q_not: not,
        q_tags: tag,
      };
      let queryString = '/search?';
      Object.entries(query).forEach(([key, value]) => {
        queryString += value ? `${key}=${value}&` : '';
      });
      queryString = queryString.replace(/&$/, '');
      history.push(queryString);
    },
    [allOf, anyOf, exactly, not, tag, fileType, imageSize],
  );

  return (
    <AdvancedSearchContainer columns={containerWidth <= 495 ? 1 : 2} onSubmit={submitHandler} ref={formRef}>
      <InputBox
        labelText="All of"
        placeholder="Search for all of these words (and)..."
        value={allOf}
        setValue={setAllOf}
      />
      <InputBox
        labelText="Any of"
        placeholder="Search for any of these words (or)..."
        value={anyOf}
        setValue={setAnyOf}
      />
      <InputBox
        labelText="Exactly"
        placeholder="Search for exactly this word or phrase..."
        value={exactly}
        setValue={setExactly}
      />
      <InputBox labelText="Not" placeholder="Exclude results matching this..." value={not} setValue={setNot} />
      <InputBox labelText="Tags" placeholder="Comma delimited list of tags" value={tag} setValue={setTag} />

      <Button
        text={'Submit'}
        onClick={() => formRef.current.submit()}
        fontSize="l"
        backgroundColor="primaryColor"
        size="large"
        css={`
          width: 100px;
          justify-self: ${containerWidth <= 495 ? 'center' : 'end'};
        `}
      />
      <button
        type="submit"
        css={`
          ${a11yHidden}
        `}
      />
      {isFetching ? <Loading /> : null}
    </AdvancedSearchContainer>
  );
}

export default function SearchResultCover({ isFetching }: { isFetching: boolean }): ReactElement {
  const location = useLocation();
  const searchQuery = useMemo(() => new URLSearchParams(location.search).get('q'), [location.search]);
  const [showAdvanceSearch, setShowAdvanceSearch] = React.useState<boolean>(false);

  useEffect(() => {
    setShowAdvanceSearch(searchQuery != null ? false : true);
  }, [location.search]);

  return (
    <SearchResultCoverContainer>
      <SearchResultTitle>
        {searchQuery != null ? (
          <>
            Search results for <strong>&quot;{searchQuery}&quot;</strong>
          </>
        ) : (
          'Advanced search results'
        )}
      </SearchResultTitle>
      <SearchOptionContainer>
        <Button
          text={'Advanced Search'}
          onClick={() => setShowAdvanceSearch(prev => !prev)}
          size="medium"
          hoverBackgroundColor="blue"
          {...(showAdvanceSearch ? { backgroundColor: 'blue' } : null)}
        />
      </SearchOptionContainer>
      {showAdvanceSearch && <AdvancedSearch isFetching={isFetching} />}
    </SearchResultCoverContainer>
  );
}
