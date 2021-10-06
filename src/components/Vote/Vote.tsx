import React, { ReactElement, useState } from 'react';

// components
import { Button } from '..';

// styles
import { UpBtn, DownBtn, Output, Container } from './Vote.styled';

// types
import { VoteProps } from './Vote.type';

export default function Vote({ size, count, direction }: VoteProps): ReactElement {
  const [output, setOutput] = useState(count);

  return (
    <Container
      size={size}
      direction={direction}
      selectedButton={output === count + 1 ? 'up-btn' : output === count - 1 ? 'down-btn' : null}
    >
      <Button
        onClick={() => {
          output === count + 1 ? setOutput(count) : setOutput(count + 1);
        }}
        backgroundColor="transparent"
        className="up-btn"
        size="custom"
        img={UpBtn}
        alt="Up Arrow"
      />
      <Output>{output}</Output>
      <Button
        onClick={() => (output === count - 1 ? setOutput(count) : setOutput(count - 1))}
        backgroundColor="transparent"
        className="down-btn"
        size="custom"
        img={DownBtn}
        alt="Down Arrow"
      />
    </Container>
  );
}
