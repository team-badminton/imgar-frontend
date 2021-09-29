import React, { ReactElement } from 'react';

// components
import { Avatar } from '@/components';
import { ReactComponent as ArrowIcon } from '@/assets/Button/arrow.svg';

// types
import { PostHeaderProps } from './PostHeader.type';
import { Content, NextButton, StyledPostHeader, Title } from './PostHeader.styled';

export default function PostHeader({ username, title, metaInfos }: PostHeaderProps): ReactElement {
  return (
    <header>
      <Title>
        <StyledPostHeader>{title}</StyledPostHeader>;
        <NextButton size="medium" alt="Next Button" backgroundColor="blue" color="white" text="Next" img={ArrowIcon} />
      </Title>
      <Content>
        <Avatar metaInfos={metaInfos} username={username} size="medium" transScaleImage={1.1} infoRows={2} />
      </Content>
    </header>
  );
}
