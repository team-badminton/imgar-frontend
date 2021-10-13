import React, { forwardRef, ReactElement } from 'react';

// components
import { Avatar, PostNextButton } from '@/components';

// types
import { PostHeaderProps } from './PostHeader.type';

// styles
import { Content, StyledPostHeader, Title } from './PostHeader.styled';
import { pxToRem } from '@/util/styleUtils';

export default forwardRef<HTMLDivElement, PostHeaderProps>(function PostHeader(
  { className, username, title, metaInfos }: PostHeaderProps,
  ref,
): ReactElement {
  return (
    <header className={className}>
      <Title ref={ref}>
        <StyledPostHeader>{title}</StyledPostHeader>;
        <PostNextButton
          css={`
            margin: ${pxToRem(3)} 0 0 ${pxToRem(15)};
          `}
        />
      </Title>
      <Content>
        <Avatar metaInfos={metaInfos} username={username} size="medium" transScaleImage={1.1} infoRows={2} />
      </Content>
    </header>
  );
});
