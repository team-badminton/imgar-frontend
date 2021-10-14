import React, { ReactElement } from 'react';
import { SelectBoxProps } from './SelectBox.type';

export default function SelectBox({ children }: SelectBoxProps): ReactElement {
  return <div className="selectBox">{children}</div>;
}
