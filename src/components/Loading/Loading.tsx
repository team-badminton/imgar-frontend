import React, { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { LoadingContainer, LoadingModal } from './Loading.styled';
import { LoadingProps } from './Loading.type';

export default function Loading({ modal }: LoadingProps): ReactElement {
  return modal ? (
    createPortal(
      <LoadingModal>
        <LoadingContainer />
      </LoadingModal>,
      document.body,
    )
  ) : (
    <LoadingContainer />
  );
}
