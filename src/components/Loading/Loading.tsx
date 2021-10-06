import React, { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LoadingContainer, LoadingModal } from './Loading.styled';
import { LoadingProps } from './Loading.type';

export default function Loading({ modal }: LoadingProps): ReactElement {
  useEffect(() => {
    const loadingStart = document.getElementById('loading-start');
    const loadingEnd = document.getElementById('loading-end');

    loadingStart.setAttribute('role', 'alert');
    loadingStart.innerHTML = `<div class="a11y">please wait while we gather your information, 
    Loading...</div>`;

    return () => {
      loadingStart.removeAttribute('role');
      loadingStart.innerHTML = '';
      loadingEnd.innerHTML = `<div class="a11y">Loading has been completed</div>`;
      setTimeout(() => {
        loadingEnd.innerHTML = '';
      }, 3000);
    };
  }, []);

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
