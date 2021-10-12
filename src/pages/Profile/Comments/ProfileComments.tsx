import { Loading } from '@/components';
import useDomReady from '@/hooks/useDomReady';
import { useAccountCommentsQuery } from '@/redux/api';
import { PostCommentInfo } from '@/redux/storeTypes';
import { pxToRem } from '@/util/styleUtils';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router';
import { ProfileCommentsUl } from './ProfileComments.styled';
import { ProfileCommentsSort } from './ProfileComments.type';
import ProfileCommentsHeader from './ProfileCommentsHeader';
import ProfileCommentsItem from './ProfileCommentsItem';

export default React.memo(function ProfileComments(): ReactElement {
  const [sort, setSort] = useState<ProfileCommentsSort>('newest');
  const [page, setPage] = useState<number>(0);
  const [comments, setComments] = useState<PostCommentInfo[]>([]);
  const [isScrollFetching, setIsScrollFetching] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { username } = useParams<{ username: string }>();
  const { data } = useAccountCommentsQuery({ username, sort, page });
  const scrollThreshold = useRef<HTMLDivElement>(null);
  const domReady = useDomReady();

  useEffect(() => {
    scrollThreshold.current = document.createElement('div');
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          scrollThreshold.current.hidden = true;
          setIsScrollFetching(true);
          setPage(prevPage => prevPage + 1);
        }
      },
      { rootMargin: '0px 0px 300px 0px' },
    );

    scrollThreshold.current.hidden = true;
    document.querySelector('.MainSection').appendChild(scrollThreshold.current);
    io.observe(scrollThreshold.current);

    return () => {
      scrollThreshold.current.remove();
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollThreshold.current.hidden = true;
    setIsFetching(true);
  }, [sort]);

  useEffect(() => {
    if (!data) {
      return;
    }
    if (page === 0) {
      setComments(data);
      setIsFetching(false);
      scrollThreshold.current.hidden = false;
    }
    if (page > 0) {
      setComments(currComments => [...currComments, ...data]);
      setIsScrollFetching(false);
      scrollThreshold.current.hidden = data.length ? false : true;
    }
  }, [data]);

  return (
    <>
      {domReady &&
        createPortal(
          <ProfileCommentsHeader
            sorted={sort}
            setSort={sort => {
              setSort(sort);
              setPage(0);
              window.scrollTo(0, 0);
            }}
          />,
          document.querySelector('.ProfileCover'),
        )}
      <ProfileCommentsUl>
        {isFetching ? (
          <Loading />
        ) : (
          comments.map(comment => (
            <ProfileCommentsItem
              key={comment.id}
              comment={comment.comment}
              dateTime={comment.dateTime}
              points={comment.upCount - comment.downCount}
              postId={comment.postId}
              cover={comment.cover}
            />
          ))
        )}
        {isScrollFetching ? (
          <div
            css={`
              height: ${pxToRem(30)};
              width: 100%;
              position: relative;
            `}
          >
            <Loading />
          </div>
        ) : null}
      </ProfileCommentsUl>
    </>
  );
});
