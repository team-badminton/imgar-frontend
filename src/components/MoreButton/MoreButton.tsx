import React, { ReactElement } from 'react';

// components
import { ReactComponent as MoreIcon } from './assets/icon/more.svg';

// styles
import { StyledMoreButton } from './MoreButton.styled';

// types
import { MoreButtonProps } from './MoreButton.type';

export default function MoreButton({ className }: MoreButtonProps): ReactElement {
  return <StyledMoreButton alt="More Icon" className={className} img={MoreIcon} size="large"></StyledMoreButton>;
}
