import React, { ReactElement } from 'react';
import { Button } from '..';

// styles
import { UpBtn, DownBtn, Output, Container } from './Vote.styled';

// types
import { VoteProps } from './Vote.type';

export default function Vote({ size, count, direction }: VoteProps): ReactElement {
  return (
    <Container size={size} direction={direction}>
      <Button backgroundColor="transparent" className="up-btn" size="custom" img={UpBtn} alt="Up Arrow" />
      <Output>{count}</Output>
      <Button backgroundColor="transparent" className="down-btn" size="custom" img={DownBtn} alt="Down Arrow" />
    </Container>
  );
}
