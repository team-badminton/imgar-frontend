import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { a11yHidden } from '../../util/styleUtils';
import { SuggestContainer, SuggestThumbnail } from './SuggestList.styled';
import { SuggestListProps } from './SuggestList.type';

// 입력값에 대한 새니타이징 필요
// 혹은 strong 처리하는 다른 방법 모색해 볼 것
export default function SuggestList({ users, posts, tags, keyword }: SuggestListProps): ReactElement {
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
      {!!posts.length && (
        <>
          <h3
            id="postHeadline"
            css={`
              ${a11yHidden}
            `}
          >
            Posts
          </h3>
          <ul aria-labelledby="postHeadline">
            {posts.slice(0, 3).map(post => (
              <li key={post.id}>
                <Link to={`/gallery/${post.id}`}>
                  <span
                    dangerouslySetInnerHTML={{ __html: post.title.replace(keywordRegexp, '<strong>$1</strong>') }}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {!!tags.length && (
        <>
          <h3 id="tagsHeadline">Tags</h3>
          <ul aria-labelledby="tagsHeadline">
            {tags.slice(0, 3).map(tag => (
              <li key={tag.backgroundImageId}>
                <Link to={`/t/${tag.name}`}>
                  <SuggestThumbnail
                    src={`https://i.imgur.com/${tag.backgroundImageId}_d.jpg?maxwidth=60&shape=thumb&fidelity=high`}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: '#' + tag.displayName.replace(keywordRegexp, '<strong>$1</strong>'),
                    }}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {!!users.length && (
        <>
          <h3 id="usersHeadline">Users</h3>
          <ul aria-labelledby="usersHeadline">
            {users.slice(0, 3).map(user => (
              <li key={user.name}>
                <Link to={`/user/${user.name}`}>
                  <SuggestThumbnail src={`https://imgur.com/user/${user.name}/avatar?maxwidth=290`} isCircle />
                  <span
                    dangerouslySetInnerHTML={{ __html: '@' + user.name.replace(keywordRegexp, '<strong>$1</strong>') }}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </SuggestContainer>
  );
}
