import React, { useState } from 'react';

// styles
import { StyledModal } from './Modal.styled';

// types
import { ModalProps } from './Modal.type';

export default function Modal({ handleHide, children }: ModalProps) {
  return <StyledModal onClick={handleHide}>{children}</StyledModal>;
}
