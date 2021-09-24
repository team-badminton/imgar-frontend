import throttle from 'lodash/throttle';
import React, { ReactElement, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { SearchBarButton, SearchBarContainer, SearchBarInput } from './SearchBar.styled';
import { SearchBarProps } from './SearchBar.type';

export default function SearchBar({
  placeholder,
  onQueryChange,
  throttleTime,
  setFocus,
}: SearchBarProps): ReactElement {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const throttledSetSearchQuery = useCallback(throttle(onQueryChange, throttleTime ?? 1000), []);
  const onChangeHandler = useCallback(
    e => {
      throttledSetSearchQuery(e.target.value);
      setInputValue(e.target.value);
    },
    [setInputValue, throttledSetSearchQuery],
  );

  const onFocusHandler = useCallback(() => {
    setFocus(true);
  }, [setFocus]);

  const onBlurHandler = useCallback(() => {
    setFocus(false);
  }, [setFocus]);

  const onSubmitHandler = useCallback<React.FormEventHandler<HTMLFormElement>>(e => {
    e.preventDefault();
    history.push(`/search/${inputValue}`);
  }, []);

  return (
    <SearchBarContainer onSubmit={onSubmitHandler}>
      <SearchBarInput
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      <SearchBarButton type="submit" />
    </SearchBarContainer>
  );
}
