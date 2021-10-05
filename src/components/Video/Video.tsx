import React, { ReactElement } from 'react';
import { VideoProps } from './Video.type';

export default function Video({ className, controls, src }: VideoProps): ReactElement {
  return (
    <video controls={controls} className={className} autoPlay loop muted playsInline width="100%">
      <source src={src} />
      <p>Sorry, your browser doesn&#39;t support HTML5 videos.</p>
    </video>
  );
}
