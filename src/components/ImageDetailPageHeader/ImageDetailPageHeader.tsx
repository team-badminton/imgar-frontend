import React, { ReactElement } from 'react';

// components
import { Avatar, Button } from '@/components';
import { ReactComponent as ArrowIcon } from '@/assets/Button/arrow.svg';

// types
import { ImageDetailPageHeaderProps } from './ImageDetailPageHeader.type';
import { Container, StyledImageDetailPageHeader } from './ImageDetailPageHeader.styled';

export default function ImageDetailPageHeader({
  title,
  userName,
  extraInfos,
  to,
}: ImageDetailPageHeaderProps): ReactElement {
  return (
    <Container>
      <div className="title">
        <StyledImageDetailPageHeader>{title}</StyledImageDetailPageHeader>;
        <Button alt="Next Button" backgroundColor="blue" className="next" text="Next" img={ArrowIcon} />
      </div>
      <div className="content">
        <Avatar userName={userName} extraInfos={extraInfos} to={to} />
      </div>
    </Container>
  );
}
