import React, { ReactElement, useState } from 'react';

// components
import { Button } from '..';

// styles
import { UpBtn, DownBtn, Output, Container } from './Vote.styled';

// types
import { VoteProps } from './Vote.type';

export default function Vote({ className, color, size, count, direction, children }: VoteProps): ReactElement {
  const [output, setOutput] = useState(count);

  const handleUpButtonEvent = (
    e: React.KeyboardEvent<HTMLAnchorElement> | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (e.type === 'keyup' && (e as React.KeyboardEvent<HTMLAnchorElement>).key !== 'Enter') return;
    output === count + 1 ? setOutput(count) : setOutput(count + 1);
  };

  const handleDownButtonEvent = (
    e: React.KeyboardEvent<HTMLAnchorElement> | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (e.type === 'keyup' && (e as React.KeyboardEvent<HTMLAnchorElement>).key !== 'Enter') return;
    output === count - 1 ? setOutput(count) : setOutput(count - 1);
  };

  return (
    <Container
      className={className}
      color={color}
      size={size}
      direction={direction}
      selectedButton={output === count + 1 ? 'up-btn' : output === count - 1 ? 'down-btn' : null}
    >
      <Button
        onClick={handleUpButtonEvent}
        onKeyUp={handleUpButtonEvent}
        className="up-btn"
        img={UpBtn}
        alt="Up Arrow"
      />
      <Output color={color} size={size}>
        {output}
      </Output>
      <Button
        onClick={handleDownButtonEvent}
        onKeyUp={handleDownButtonEvent}
        className="down-btn"
        img={DownBtn}
        alt="Down Arrow"
      />
      {children}
    </Container>
  );
}
