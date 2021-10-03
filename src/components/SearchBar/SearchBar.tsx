import useThrottle from '@/hooks/useThrottle';
import { a11yHidden } from '@/util/styleUtils';
import React, { ReactElement, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { SearchBarButton, SearchBarContainer, SearchBarInput } from './SearchBar.styled';
import { SearchBarProps } from './SearchBar.type';

export default React.forwardRef(function SearchBar(
  { placeholder, onQueryChange, throttleTime }: SearchBarProps,
  ref: React.Ref<{ clearInput: () => void } | HTMLInputElement>,
): ReactElement {
  const [inputValue, setInputValue] = useState<string>();
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>();

  const throttledSetSearchQuery = useThrottle(onQueryChange, throttleTime ?? 500, { leading: false });
  const onChangeHandler = useCallback(
    e => {
      throttledSetSearchQuery(e.target.value);
      setInputValue(e.target.value);
    },
    [setInputValue, throttledSetSearchQuery],
  );

  const onSubmitHandler = useCallback<React.FormEventHandler<HTMLFormElement>>(
    e => {
      e.preventDefault();
      history.push(`/search/${inputValue}`);
    },
    [inputValue],
  );

  const clearInput = useCallback(() => {
    setInputValue('');
    throttledSetSearchQuery('');
    inputRef.current.blur();
  }, []);

  useImperativeHandle(ref, () => ({
    clearInput,
  }));

  return (
    <SearchBarContainer onSubmit={onSubmitHandler}>
      <label
        htmlFor="search-bar-input"
        css={`
          ${a11yHidden}
        `}
      >
        Search Posts, Tags, Users
      </label>
      <SearchBarInput
        id="search-bar-input"
        type="text"
        placeholder={placeholder}
        value={inputValue ?? ''}
        onChange={onChangeHandler}
        ref={inputRef}
      />
      <SearchBarButton type="submit" aria-label="Submit" />
    </SearchBarContainer>
  );
});
