import React, { useEffect } from 'react';

// styles
import { StyledModal } from './Modal.styled';

// types
import { ModalProps } from './Modal.type';

// etc
import { createPortal } from 'react-dom';

export default function Modal({ handleHide, children }: ModalProps) {
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.type !== 'keyup' || e.key !== 'Escape') return;
    handleHide();
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return createPortal(<StyledModal onClick={handleHide}>{children}</StyledModal>, document.body);
}
