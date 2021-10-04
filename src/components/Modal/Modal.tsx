import React from 'react';

// styles
import { StyledModal } from './Modal.styled';

// types
import { ModalProps } from './Modal.type';

// etc
import { createPortal } from 'react-dom';

export default function Modal({ handleHide, children }: ModalProps) {
  return createPortal(<StyledModal onClick={handleHide}>{children}</StyledModal>, document.body);
}
