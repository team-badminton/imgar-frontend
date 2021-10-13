import { Loading, MainContainer, MasonryGallery } from '@/components';
import { useTypedDispatch, useTypedSelector } from '@/redux';
import { useTagPostsQuery } from '@/redux/api';
import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { masonryGalleryWidthSelector } from '@/redux/slices/displayReducer';
import { StyledDiv } from './TagDetail.styled';
import { setQueryPage } from '@/redux/slices/listInfoReducer';
import { TagDetailSortOption } from './TagDetail.type';
import { TagPostsQuery } from '@/redux/api/types/queries';
import { PostV1Info } from '@/redux/storeTypes';
import TagDetailHeader from '@/components/TagDetailHeader/TagDetailHeader';

const sortQuery = {
  popular: 'viral',
  newest: 'time',
  best: 'top',
};

export default function TagDetail(): ReactElement {
  // 리덕스 상태
  const masonryGalleryWidth = useTypedSelector(masonryGalleryWidthSelector);

  const { tagname } = useParams<{ tagname: string }>();
  const queryPage = useTypedSelector(state => state.listInfo.queryPage);

  const [posts, setPosts] = React.useState<PostV1Info[]>([]);

  const [sortOption, setSortOption] = useState<TagDetailSortOption>('newest');

  const { data } = useTagPostsQuery({
    tagName: tagname,
    page: queryPage,
    sortOption: sortQuery[sortOption] as TagPostsQuery['sortOption'],
  });
  const dispatch = useTypedDispatch();
  const sortOptionList = useMemo(() => [sortOption], [sortOption]);
  const setSortOptionList = useMemo(
    () => [
      (sortOption: TagDetailSortOption) => {
        setSortOption(sortOption), dispatch(setQueryPage(1));
      },
    ],
    [setSortOption],
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    if (queryPage === 1) {
      setPosts(data.posts);
    }
    if (queryPage > 1) {
      setPosts(currPosts => [...currPosts, ...data.posts]);
    }
  }, [data]);

  return data ? (
    <MainContainer
      sticky
      darkenBackground
      headerBackground={data && `https://i.imgur.com/${data.backgroundId}.jpg`}
      headerCover={
        <StyledDiv>
          <h2>{data?.displayName}</h2>
          <p className="description">{data?.description}</p>
          <p className="postCount">{data?.postCount} POSTS</p>
        </StyledDiv>
      }
      customHeader={null}
      containerWidth={masonryGalleryWidth}
    >
      <TagDetailHeader sorted={sortOptionList} setSort={setSortOptionList} />
      <MasonryGallery posts={posts} />
    </MainContainer>
  ) : (
    <Loading />
  );
}
