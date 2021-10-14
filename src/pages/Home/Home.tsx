import { MasonryGalleryHeader, MasonryGalleryContainer, Loading, Search } from '@/components/index';
import MainContainer from '@/components/MainContainer/MainContainer';
import { TAG_GAP, TAG_WIDTH__PX } from '@/components/TagCard/TagCard.styled';
import TagList, { TAGLIST_MARGIN } from '@/components/TagList/TagList';
import { useTypedSelector } from '@/redux';
import { useTagQuery, useWelcomeMessageQuery } from '@/redux/api';
import { masonryGalleryWidthSelector } from '@/redux/slices/displayReducer';
import React, { ReactElement } from 'react';
import { StyledSection, StyledWelcomeMessage } from './Home.styled';

export default function Home(): ReactElement {
  // 리덕스 상태
  const galleryWidth = useTypedSelector(masonryGalleryWidthSelector);

  // API 요청
  const { data: tags, isLoading: isTagsLoading } = useTagQuery(null);
  const { data: welcomMessage, isLoading: isWelcomeMessageLoading } = useWelcomeMessageQuery(null);

  const innerWidth = useTypedSelector(state => state.display.innerWidth);
  const TAGLIST_COLUMN = Math.floor((innerWidth - TAGLIST_MARGIN) / (TAG_WIDTH__PX + TAG_GAP * 2));
  const TAGS_WIDTH__PX = TAGLIST_COLUMN * (TAG_WIDTH__PX + TAG_GAP * 2);
  console.log(TAGLIST_COLUMN, TAGS_WIDTH__PX);
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
          <TagList tags={tags} />
        </StyledSection>
      }
      customHeader={null}
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
