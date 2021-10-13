import { Loading, MainContainer, MasonryGalleryContainer, MasonryGalleryHeader } from '@/components';
import { useTypedSelector } from '@/redux';
import { useTagPostsQuery } from '@/redux/api';
import React, { ReactElement } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { masonryGalleryWidthSelector } from '@/redux/slices/displayReducer';
import { StyledDiv } from './TagDetail.styled';

export default function TagDetail(): ReactElement {
  const { tagname } = useParams<{ tagname: string }>();
  const { data, isLoading } = useTagPostsQuery({ tagName: tagname });

  // 리덕스 상태
  const galleryWidth = useTypedSelector(masonryGalleryWidthSelector);

  return isLoading ? (
    <Loading />
  ) : (
    <MainContainer
      sticky
      darkenBackground
      headerBackground={`https://i.imgur.com/${data.backgroundId}.jpg`}
      headerCover={
        <StyledDiv>
          <h2>{data.displayName}</h2>
          <p className="description">{data.description}</p>
          <p className="postCount">{data.postCount} POSTS</p>
        </StyledDiv>
      }
      customHeader={null}
      containerWidth={galleryWidth}
    >
      <>
        <MasonryGalleryHeader />
        <MasonryGalleryContainer />
      </>
    </MainContainer>
  );
}
