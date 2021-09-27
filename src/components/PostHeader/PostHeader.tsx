import React, { ReactElement } from 'react';

// components
import { Avatar } from '@/components';
import { ReactComponent as ArrowIcon } from '@/assets/Button/arrow.svg';

// types
import { PostHeaderProps } from './PostHeader.type';
import { Content, NextButton, StyledPostHeader, Title } from './PostHeader.styled';

export default function PostHeader({ username, title }: PostHeaderProps): ReactElement {
  return (
    <header>
      <Title>
        <StyledPostHeader>{title}</StyledPostHeader>;
        <NextButton alt="Next Button" backgroundColor="blue" text="Next" img={ArrowIcon} />
      </Title>
      <Content>
        <Avatar username={username} type="gallery" />
      </Content>
    </header>
  );
}
