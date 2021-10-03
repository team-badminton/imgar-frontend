import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { a11yHidden } from '../../util/styleUtils';
import {
  SuggestContainer,
  SuggestThumbnail,
  SuggestListLi as StyledLi,
  SuggestListUl as StyledUl,
  SuggestListUlHeading,
} from './SuggestList.styled';
import { SuggestListLiProps, SuggestListProps, SuggestListUlProps } from './SuggestList.type';

function SuggestListUl({ children, headline, hideHeading }: SuggestListUlProps) {
  return (
    <>
      <SuggestListUlHeading a11yHidden={hideHeading} id={'suggestHeading-' + headline}>
        {headline}
      </SuggestListUlHeading>
      <StyledUl aria-labelledby={'suggestHeading-' + headline}>{children}</StyledUl>
    </>
  );
}

function SuggestListLi({ to, keywordRegexp, children, leftIcon, prefix }: SuggestListLiProps) {
  return (
    <StyledLi>
      <Link to={to} tabIndex={0}>
        {leftIcon}
        {typeof children === 'string' ? (
          <span
            dangerouslySetInnerHTML={{
              __html: (prefix ?? '') + children.replace(keywordRegexp, '<strong>$1</strong>'),
            }}
          ></span>
        ) : (
          `${prefix ?? ''}${children}`
        )}
      </Link>
    </StyledLi>
  );
}

// 입력값에 대한 새니타이징 필요
// 혹은 strong 처리하는 다른 방법 모색해 볼 것
export default React.memo(function SuggestList({ users, posts, tags, keyword }: SuggestListProps): ReactElement {
  const keywordRegexp = new RegExp(`(${keyword})`, 'gi');
  return (
    <SuggestContainer>
      <h2
        css={`
          ${a11yHidden}
        `}
      >
        Search Result List
      </h2>
      {!!posts?.length && (
        <SuggestListUl headline="Posts" hideHeading>
          {posts?.slice(0, 3).map(post => (
            <SuggestListLi key={post.id} to={`/gallery/${post.id}`} keywordRegexp={keywordRegexp}>
              {post.title}
            </SuggestListLi>
          ))}
        </SuggestListUl>
      )}
      {!!tags?.length && (
        <SuggestListUl headline="Tags">
          {tags?.slice(0, 3).map(tag => (
            <SuggestListLi
              key={tag.name}
              to={`/t/${tag.name}`}
              keywordRegexp={keywordRegexp}
              prefix="#"
              leftIcon={
                <SuggestThumbnail
                  src={`https://i.imgur.com/${tag.backgroundImageId}_d.jpg?maxwidth=60&shape=thumb&fidelity=high`}
                />
              }
            >
              {tag.displayName}
            </SuggestListLi>
          ))}
        </SuggestListUl>
      )}
      {!!users?.length && (
        <SuggestListUl headline="Users">
          {users?.slice(0, 3).map(user => (
            <SuggestListLi
              key={user.id}
              to={`/user/${user.name}`}
              keywordRegexp={keywordRegexp}
              leftIcon={<SuggestThumbnail src={`https://imgur.com/user/${user.name}/avatar?maxwidth=290`} isCircle />}
              prefix="@"
            >
              {user.name}
            </SuggestListLi>
          ))}
        </SuggestListUl>
      )}
    </SuggestContainer>
  );
});
