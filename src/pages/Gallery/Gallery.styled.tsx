import styled from 'styled-components';

// utils
import { pxToRem } from '@/util/styleUtils';

export const PostContainer = styled.div`
  position: relative;
  margin: 0 ${({ theme }) => theme.spaceSize.l};
  padding: ${pxToRem(55)} ${pxToRem(20)} 0;
  display: grid;
  max-width: ${pxToRem(1400)};
  margin: 0 auto;
  column-gap: ${pxToRem(48)};
  grid-template:
    'leftSide header'
    'leftSide contents'
    'leftSide comments' / auto auto;

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
  .right-side {
    display: none;
  }

  .relative-list {
    position: sticky;
    top: ${pxToRem(200)};
  }

  @media screen and (min-width: 1025px) {
    grid-template:
      'leftSide header rightSide'
      'leftSide contents rightSide'
      'leftSide comments rightSide' / auto minMax(auto, ${pxToRem(800)}) ${pxToRem(400)};

    .right-side {
      grid-area: rightSide;
      display: block;
    }
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
