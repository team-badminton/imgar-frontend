import { MasonryGalleryHeader, MasonryGalleryContainer, TagCard, Loading } from '@/components/index';
import MainContainer from '@/components/MainContainer/MainContainer';
import { useTypedSelector } from '@/redux';
import { useTagPostsQuery, useTagQuery, useWelcomeMessageQuery } from '@/redux/api';
import { masonryGalleryWidthSelector } from '@/redux/slices/displayReducer';
import React, { ReactElement, useState } from 'react';
import {
  StyledArticle,
  StyledMoreTagsButton,
  StyledSection,
  StyledTagHeading,
  StyledWelcomeMessage,
} from './Home.styled';

export default function Home(): ReactElement {
  // 리덕스 상태
  const galleryWidth = useTypedSelector(masonryGalleryWidthSelector);
  const innerWidth = useTypedSelector(state => state.display.innerWidth);

  // API 요청
  const { data: tags, isLoading: isTagsLoading } = useTagQuery(null);
  const { data: welcomMessage, isLoading: isWelcomeMessageLoading } = useWelcomeMessageQuery(null);

  // 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //상수
  const TAGS_WIDTH__PX = Math.floor((innerWidth - 100) / 118) * 118;
  return isTagsLoading || isWelcomeMessageLoading ? (
    <Loading />
  ) : (
    <MainContainer
      sticky
      headerBackground={'https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png'}
      headerCover={
        <StyledSection>
          <StyledWelcomeMessage>
            {isWelcomeMessageLoading ? 'Welcome Imgar.com' : welcomMessage.message}
          </StyledWelcomeMessage>
          <StyledArticle isOpen={isOpen} articleWidth={TAGS_WIDTH__PX}>
            <StyledTagHeading>EXPLORE TAG</StyledTagHeading>
            {tags?.map(tag => {
              return <TagCard key={tag.name} tag={tag} />;
            })}
            <StyledMoreTagsButton
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              더보기
            </StyledMoreTagsButton>
          </StyledArticle>
        </StyledSection>
      }
      customHeader={<div>커스템 헤더에 들어갈 내용 테스트</div>}
      containerWidth={galleryWidth}
      headerCoverWidth={TAGS_WIDTH__PX}
    >
      <>
        <MasonryGalleryHeader />
        <MasonryGalleryContainer />
      </>
    </MainContainer>
  );
}
