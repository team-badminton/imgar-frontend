import React, { ReactElement } from 'react';
import { VideoProps } from './Video.type';

export default function Video({ className, controls, imageId, inView = true }: VideoProps): ReactElement {
  const src = `https://i.imgur.com/${imageId}_lq.mp4`;

  return (
    inView && (
      <video controls={controls} className={className} autoPlay loop muted playsInline width="100%">
        <source data-src={!inView ? src : null} src={inView ? src : null} />
        <p>Sorry, your browser doesn&#39;t support HTML5 videos.</p>
      </video>
    )
  );
}
