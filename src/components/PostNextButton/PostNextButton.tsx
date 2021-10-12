import React, { ReactElement } from 'react';

// components
import { ReactComponent as ArrowIcon } from '@/assets/Icon/arrow.svg';

// styles
import { NextButton } from './PostNextButton.styled';

// redux
import { useTypedSelector } from '@/redux';

export default function PostNextButton(): ReactElement {
  const BREAKPOINT = 1025;

  const innerWidth = useTypedSelector(state => state.display.innerWidth);

  return (
    <NextButton
      size="medium"
      alt={innerWidth < BREAKPOINT ? 'Move to the next post' : ''}
      backgroundColor="blue"
      color="white"
      text="Next"
      img={ArrowIcon}
    ></NextButton>
  );
}
