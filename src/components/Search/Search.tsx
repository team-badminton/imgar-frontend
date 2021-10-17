import { useSuggestQuery } from '@/redux/api';
import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { SearchBar, SuggestList } from '..';
import { SearchContainer } from './Search.styled';
import { SearchProps } from './Search.type';

export default React.memo(function Search({ className }: SearchProps): ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchQueryOption, setSearchQueryOption] = useState<'all' | 'tag' | 'user'>('all');
  const [focus, setFocus] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const clearInputRef = useRef<{ clearInput: () => void }>();

  const { data } = useSuggestQuery(searchQuery.replace(/^[@#]/, ''), {
    skip: !searchQuery && !focus,
  });

  const suggestClickHandler = useCallback(e => {
    if (e.target.closest('a')) {
      clearInputRef?.current.clearInput();
    }
  }, []);

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

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentAnchorIndex === -1) {
          anchorArray[0].focus();
        }
        if (currentAnchorIndex === anchorArray.length - 1) {
          return;
        }
        anchorArray[currentAnchorIndex + 1].focus();
      }
      if (e.key === 'ArrowUp') {
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
      className={`search-container ${className ?? ''}`}
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
          onClick={suggestClickHandler}
        />
      )}
    </SearchContainer>
  );
});
