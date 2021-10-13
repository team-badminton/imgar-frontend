import styled from 'styled-components';

// utils
import { pxToRem } from '@/util/styleUtils';

export const PostContainer = styled.div`
  position: relative;
  margin: 0 ${({ theme }) => theme.spaceSize.l};
  max-width: ${pxToRem(1250)};
  padding-top: ${pxToRem(55)};
  display: grid;
  column-gap: ${pxToRem(48)};
  grid-template:
    'leftSide header'
    'leftSide contents'
    'leftSide comments'
    'masonry masonry';

  .header {
    grid-area: header;
  }
  .comments {
    grid-area: comments;
  }
  .contents {
    grid-area: contents;
  }
  .left-side {
    grid-area: leftSide;
  }
`;

export const ExplorePostsContainer = styled.div<{ $width: number }>`
  width: ${({ $width }) => pxToRem($width)};
  margin: ${pxToRem(100)} auto 0;
  > h3 {
    margin: ${pxToRem(20)} 0;
    display: flex;
    justify-content: center;
  }
  .explore-btn {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
