import React, { ReactElement } from 'react';

// components
import { Avatar, PostNextButton } from '@/components';

// types
import { PostHeaderProps } from './PostHeader.type';

// styles
import { Content, StyledPostHeader, Title } from './PostHeader.styled';

export default function PostHeader({ className, username, title, metaInfos }: PostHeaderProps): ReactElement {
  return (
    <header className={className}>
      <Title>
        <StyledPostHeader>{title}</StyledPostHeader>;
        <PostNextButton />
      </Title>
      <Content>
        <Avatar metaInfos={metaInfos} username={username} size="medium" transScaleImage={1.1} infoRows={2} />
      </Content>
    </header>
  );
}
