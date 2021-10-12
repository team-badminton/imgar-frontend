import React, { ReactElement } from 'react';

// components
import { PostComments, PostContents, PostHeader } from '@/components';
import MainContainer from '@/components/MainContainer/MainContainer';

// assets
import { ReactComponent as HeartIcon } from '@/assets/Icon/heartIcon.svg';
import { ReactComponent as CommentIcon } from '@/assets/Icon/commentIcon.svg';

// styles
import { GalleryContainer, PostSideVoteBar, FavoriteButton, LinkToComment, StyledVote } from './Gallery.styled';

// types
import { useLocationProps } from './Gallery.type';

//apis
import { usePostQuery } from '@/redux/api';

// utils
import { pxToRem } from '@/util/styleUtils';

// etc
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function Gallery(): ReactElement {
  const location = useLocation<useLocationProps>();
  const history = useHistory();
  const param = useParams<{ id: string }>();

  const { data, error, isLoading } = usePostQuery({ postId: param.id, isAlbum: location.state?.isAlbum });

  return (
    <MainContainer sticky customHeader={<div>커스템 헤더에 들어갈 내용 테스트</div>}>
      {isLoading ? (
        'loading'
      ) : (
        <>
          <GalleryContainer
            css={`
              display: grid;
              column-gap: ${pxToRem(48)};
              grid-template:
                'leftSide header'
                'leftSide contents'
                'leftSide comments'
                'masonry masonry';
            `}
          >
            <PostHeader
              css={`
                grid-area: header;
              `}
              username={data.accountName}
              title={data.title}
              metaInfos={{ time: data.dateTime, views: data.views, platform: 'Iphone' }}
            />
            <PostContents
              css={`
                grid-area: contents;
              `}
              images={data.images}
              tags={data.tags}
            />
            <PostSideVoteBar
              css={`
                grid-area: leftSide;
                height: 250px;
              `}
            >
              <StyledVote color="white" size="large" count={data.points} direction="column">
                <FavoriteButton img={HeartIcon} alt="heart" />
              </StyledVote>
              <LinkToComment
                to="#comments"
                scroll={e =>
                  window.scrollTo({
                    top: e.offsetTop + 150,
                    behavior: 'smooth',
                  })
                }
              >
                <CommentIcon title="comment" />
                {data.commentCount}
              </LinkToComment>
            </PostSideVoteBar>
            <PostComments
              css={`
                grid-area: comments;
              `}
              commentCount={data.commentCount}
              postId={param.id}
            />
          </GalleryContainer>
          {/* MasonryGallery */}
        </>
      )}
    </MainContainer>
  );
}
