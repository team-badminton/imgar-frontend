import React from 'react';

// components
import Modal from '@/PortalsModal/Modal/Modal';

// types
import { ModalProps } from '@/PortalsModal/Modal/Modal.type';

// etc
import { createPortal } from 'react-dom';

export default function PortalsModal({ handleHide, children }: ModalProps) {
  return createPortal(<Modal handleHide={handleHide}>{children}</Modal>, document.body);
}
