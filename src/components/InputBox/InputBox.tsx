import { createRandomHash } from '@/util/formatUtils';
import React, { ReactElement } from 'react';
import { StyledInput, StyledLabel } from './InputBox.styled';
import { InputBoxProps } from './InputBox.type';

function InputBox({ labelText, placeholder, value, setValue, type = 'text' }: InputBoxProps): ReactElement {
  const idHash = createRandomHash();
  return (
    <div
      css={`
        width: 100%;
        display: flex;
        align-items: center;
      `}
    >
      <StyledLabel htmlFor={idHash}>{labelText}</StyledLabel>
      <StyledInput
        id={idHash}
        value={value}
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
        type={type}
      ></StyledInput>
    </div>
  );
}

export default React.memo(InputBox);
