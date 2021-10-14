import React, { ReactElement, useEffect, useRef, useState } from 'react';

// components
import { Loading } from '@/components';
import RelativeItem from './RelativeItem/RelativeItem';

// styles
import { Container, Title } from './PostSideRelativeList.styled';

// types
import { PostSideRelativeListProps } from './PostSideRelativeList.type';

// redux
import { useGalleryQuery } from '@/redux/api';
import { useTypedSelector } from '@/redux';

// etc
import { useLocation } from 'react-router-dom';
import { useLocationProps } from '@/pages/Gallery/Gallery.type';

export default React.memo(function PostSideRelativeList({
  mainPostId,
  className,
}: PostSideRelativeListProps): ReactElement {
  const ITEM_HEIGHT = 80;

  const location = useLocation<useLocationProps>();

  const containerRef = useRef<HTMLUListElement>();
  const lastRelativeItemRef = useRef<HTMLLIElement>();

  const { name, option } = useTypedSelector(state => state.listInfo.latestQuery);
  const [page, setPage] = useState<number>(option.page || 1);

  const title = !option.sort && 'Newest In Most Viral';

  const { data, isFetching } = useGalleryQuery({ page, isInfinite: true });
  const isLoading = data?.isLoading;
  // console.log(isLoading);
  useEffect(() => {
    if (isLoading) {
      const ConatinerScrollY = data?.findIndex(({ id }) => id === mainPostId) * ITEM_HEIGHT;
      containerRef.current.scrollTo(0, ConatinerScrollY);
    }
  }, [isLoading]);

  useEffect(() => {
    const handlePage = (entries: IntersectionObserverEntry[]) => {
      const first = entries[0];

      if (first.isIntersecting) {
        setPage(page => page + 1);
      }
    };

    if (data) {
      const observer = new IntersectionObserver(handlePage, {
        root: containerRef.current,
      });
      observer.observe(lastRelativeItemRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [data]);

  return (
    <>
      <div className={className}>
        <Title>{title}</Title>
        <Container ref={containerRef}>
          {data?.map(({ id, title, thumbnailImageId, imageCount }, index) => {
            return (
              <RelativeItem
                postId={id}
                title={title}
                thumbnailImageId={thumbnailImageId}
                imageCount={imageCount}
                key={id + index}
                ref={index === data.length - 1 ? lastRelativeItemRef : null}
              ></RelativeItem>
            );
          })}
          {isFetching && <Loading />}
        </Container>
      </div>
    </>
  );
});
