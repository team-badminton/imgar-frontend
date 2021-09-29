import { useSuggestQuery } from '@/redux/api/v3';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { SearchBar, SuggestList } from '..';
import { SearchContainer } from './Search.styled';

export default React.memo(function Search(): ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchQueryOption, setSearchQueryOption] = useState<'all' | 'tag' | 'user'>('all');
  const [focus, setFocus] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const location = useLocation();
  const clearInputRef = useRef<{ clearInput: () => void }>();

  const { data, isSuccess } = useSuggestQuery(searchQuery.replace(/^[@#]/, ''), {
    skip: !searchQuery && !focus,
  });

  console.log(isSuccess);

  useEffect(() => {
    setFocus(false);
    clearInputRef?.current.clearInput();
  }, [location.pathname]);

  useEffect(() => {
    if (searchQuery.match(/^#/)) {
      setSearchQueryOption('tag');
    } else if (searchQuery.match(/^@/)) {
      setSearchQueryOption('user');
    } else {
      setSearchQueryOption('all');
    }
    setKeyword(searchQuery.replace(/^[@#]/, ''));
  }, [data]);

  const isShowSuggestList =
    !!searchQuery && focus && !!(data?.posts?.length || data?.users?.length || data?.tags?.length);

  const keyboardHandler: React.KeyboardEventHandler<HTMLDivElement> = e => {
    if (isShowSuggestList) {
      const anchorArray = Array.from(e.currentTarget.querySelectorAll<HTMLAnchorElement>('li > a'));

      const currentAnchorIndex = anchorArray.findIndex(li => li === document.activeElement);

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentAnchorIndex === -1) {
          anchorArray[0].focus();
        }
        if (currentAnchorIndex === anchorArray.length - 1) {
          return;
        }
        anchorArray[currentAnchorIndex + 1].focus();
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentAnchorIndex <= 0) {
          e.currentTarget.querySelector('input')?.focus();
          return;
        }
        anchorArray[currentAnchorIndex - 1].focus();
      }
    }
  };

  return (
    <SearchContainer
      className="search-container"
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={e => {
        const relatedTarget = e.relatedTarget;
        if (!e.currentTarget.contains(relatedTarget as Node)) {
          setFocus(false);
        }
      }}
      onKeyDown={keyboardHandler}
    >
      <SearchBar
        placeholder="Images, #tags, @users oh my!"
        onQueryChange={setSearchQuery}
        setFocus={setFocus}
        ref={clearInputRef}
      />
      {isShowSuggestList && (
        <SuggestList
          keyword={keyword}
          posts={searchQueryOption === 'all' ? data?.posts : []}
          tags={searchQueryOption !== 'user' ? data?.tags : []}
          users={searchQueryOption !== 'tag' ? data?.users : []}
        />
      )}
    </SearchContainer>
  );
});
