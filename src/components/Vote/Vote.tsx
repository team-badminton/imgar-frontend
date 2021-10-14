import React, { ReactElement, useState, useCallback } from 'react';

// components
import { Button } from '..';

// styles
import { UpBtn, DownBtn, Output, Container } from './Vote.styled';

// types
import { VoteProps } from './Vote.type';

export default function Vote({ className, color, size, count, direction, children }: VoteProps): ReactElement {
  const [output, setOutput] = useState(count);

  const handleUpButtonEvent = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement> | React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (e.type === 'keyup' && (e as React.KeyboardEvent<HTMLAnchorElement>).key !== 'Enter') return;
      output === count + 1 ? setOutput(count) : setOutput(count + 1);
    },
    [output],
  );

  const handleDownButtonEvent = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement> | React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (e.type === 'keyup' && (e as React.KeyboardEvent<HTMLAnchorElement>).key !== 'Enter') return;
      output === count - 1 ? setOutput(count) : setOutput(count - 1);
    },
    [output],
  );

  return (
    <Container
      className={className}
      color={color}
      size={size}
      direction={direction}
      selectedButton={output === count + 1 ? 'up-btn' : output === count - 1 ? 'down-btn' : null}
    >
      <Button onClick={handleUpButtonEvent} onKeyUp={handleUpButtonEvent} className="up-btn" img={UpBtn} alt="UpVote" />
      <Output color={color} size={size}>
        {output}
      </Output>
      <Button
        onClick={handleDownButtonEvent}
        onKeyUp={handleDownButtonEvent}
        className="down-btn"
        img={DownBtn}
        alt="DownVote"
      />
      {children}
    </Container>
  );
}
