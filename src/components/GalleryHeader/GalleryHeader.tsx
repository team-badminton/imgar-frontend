import React, { ReactElement } from 'react';

// components
import { Avatar, Button } from '@/components';
import { ReactComponent as ArrowIcon } from '@/assets/Button/arrow.svg';

// types
import { GalleryHeaderProps } from './GalleryHeader.type';
import { Container, StyledGalleryHeader } from './GalleryHeader.styled';

export default function GalleryHeader({ title, userName, extraInfos, to }: GalleryHeaderProps): ReactElement {
  return (
    <Container>
      <div className="title">
        <StyledGalleryHeader>{title}</StyledGalleryHeader>;
        <Button alt="Next Button" backgroundColor="blue" className="next" text="Next" img={ArrowIcon} />
      </div>
      <div className="content">
        <Avatar userName={userName} extraInfos={extraInfos} to={to} />
      </div>
    </Container>
  );
}
