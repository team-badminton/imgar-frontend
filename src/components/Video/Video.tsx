import React, { ReactElement } from 'react';
import { VideoProps } from './Video.type';

export default function Video({ src }: VideoProps): ReactElement {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video autoPlay loop muted playsInline width="100%">
      <source src={src} />
      <p>Sorry, your browser doesn&#39;t support HTML5 videos.</p>
    </video>
  );
}
