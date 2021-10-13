import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';

// components
import {
  PostComments,
  PostContents,
  PostHeader,
  PostSideRelativeList,
  GalleryHeader,
  MasonryGallery,
  MasonryGalleryContainer,
} from '@/components';
import MainContainer from '@/components/MainContainer/MainContainer';

// assets
import { ReactComponent as HeartIcon } from '@/assets/Icon/heartIcon.svg';
import { ReactComponent as CommentIcon } from '@/assets/Icon/commentIcon.svg';

// styles
import { PostContainer, PostSideVoteBar, FavoriteButton, LinkToComment, StyledVote } from './Gallery.styled';

// types
import { useLocationProps } from './Gallery.type';

//apis
import { usePostQuery } from '@/redux/api';

// etc
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function Gallery(): ReactElement {
  const postHeaderRef = useRef<HTMLDivElement>(null);

  const location = useLocation<useLocationProps>();
  const history = useHistory();
  const param = useParams<{ id: string }>();

  const [postHeaderTitlePosX, setPostHeaderTitlePosX] = useState(0);
  const [postHeaderTitleWidth, setPostHeaderTitleWidth] = useState(0);

  const { data, isLoading } = usePostQuery({ postId: param.id, isAlbum: location.state?.isAlbum });

  const handleResizeObserver = () => {
    const { width, left } = postHeaderRef.current.getBoundingClientRect();
    setPostHeaderTitlePosX(left);
    setPostHeaderTitleWidth(width);
  };

  useLayoutEffect(() => {
    if (postHeaderRef.current) {
      const resizeObserver = new ResizeObserver(handleResizeObserver);

      resizeObserver.observe(postHeaderRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [isLoading]);

  return (
    !isLoading && (
      <MainContainer
        sticky
        customHeaderHeight={65}
        customHeader={
          <GalleryHeader
            positionX={postHeaderTitlePosX}
            width={postHeaderTitleWidth}
            title={data.title}
            username={data.accountName}
          />
        }
      >
        <PostContainer>
          <PostHeader
            className="header"
            ref={postHeaderRef}
            username={data.accountName}
            title={data.title}
            metaInfos={{ time: data.dateTime, views: data.views, platform: 'Iphone' }}
          />
          <PostContents className="contents" images={data.images} tags={data.tags} />
          <PostSideVoteBar>
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
          <PostComments className="comments" commentCount={data.commentCount} postId={param.id} />
          {/* <PostSideRelativeList mainPostId={param.id}></PostSideRelativeList> */}
          <MasonryGalleryContainer />
        </PostContainer>
      </MainContainer>
    )
  );
}
