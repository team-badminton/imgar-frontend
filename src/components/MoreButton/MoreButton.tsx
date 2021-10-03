// components
import { ReactComponent as MoreIcon } from './assets/icon/more.svg';
import { StyledMoreButton } from './MoreButton.styled';

import React, { ReactElement } from 'react';

export default function MoreButton(): ReactElement {
  return <StyledMoreButton size="large" img={MoreIcon} alt="More Icon"></StyledMoreButton>;
}
