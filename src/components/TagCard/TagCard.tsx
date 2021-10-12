import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { StyledArticle, StyledTagCardLink } from './TagCard.styled';
import { TagCardProps } from './TagCrad.type';

export default function TagCard({ tag, isFeatured }: TagCardProps): ReactElement {
  const { name, displayName, postCount, backgroundImageId, accent } = tag;

  const _displayName = displayName
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1, word.length))
    .join(' ');

  return (
    <>
      <StyledTagCardLink
        isFeatured={isFeatured}
        backgroundImageId={backgroundImageId}
        to={`/t/${name}?source=featured_tag_module`}
      >
        <StyledArticle accentColor={accent}>
          <h3>{_displayName}</h3>
          <p>
            {isFeatured && <em>FEATURED</em>}
            {postCount} Posts
          </p>
        </StyledArticle>
      </StyledTagCardLink>
    </>
  );
}

TagCard.defaultProps = {
  isFeatured: false,
};
