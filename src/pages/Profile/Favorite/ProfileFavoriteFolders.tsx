import { ReactComponent as LeftSvgIcon } from '@/assets/Icon/leftIcon.svg';
import { ReactComponent as RightSvgIcon } from '@/assets/Icon/rightIcon.svg';
import useThrottle from '@/hooks/useThrottle';
import { useAccountFoldersQuery } from '@/redux/api';
import { FolderInfo } from '@/redux/storeTypes';
import { pxToRem } from '@/util/styleUtils';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import { FolderIcon, FolderLink, FolderList, FolderName, FoldersWrapper, ScrollButton } from './ProfileFavorite.styled';

function FolderItem({ id, name, allItem }: Partial<FolderInfo> & { allItem?: boolean }): ReactElement {
  const { url } = useRouteMatch('/user/:username/');
  const to = id
    ? url +
      `/favorites/folder/${id}/${name
        .toLowerCase()
        .replace(' ', '-')
        .replace(/[^\w\s-]/g, '')}`
    : url + '/favorites';

  return (
    <li
      css={`
        margin-right: ${pxToRem(4)};
      `}
    >
      <FolderLink
        to={to}
        activeClassName="isActive"
        {...(allItem
          ? {
              isActive: (match, location) => {
                return match.url === location.pathname;
              },
            }
          : null)}
      >
        <FolderIcon />
        <FolderName>{name}</FolderName>
      </FolderLink>
    </li>
  );
}

export default function ProfileFavoriteFolders(): ReactElement {
  const { username } = useParams<{ username: string }>();
  const { data } = useAccountFoldersQuery(username);
  const listRef = useRef<HTMLUListElement>(null);
  const [hasScroll, setHasScroll] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const handleResize = useThrottle(() => {
    if (listRef.current.offsetWidth < listRef.current.scrollWidth) {
      setHasScroll(true);
    } else {
      setHasScroll(false);
    }
  }, 500);

  const handleScroll = useThrottle(() => {
    if (1 < listRef.current.scrollLeft) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, 500);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    listRef.current.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      listRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  const scrollToStartHandler = () => {
    listRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  };
  const scrollToNextHandler = () => {
    const currentScroll = listRef.current.scrollLeft;
    listRef.current.scrollTo({ left: currentScroll + listRef.current.offsetWidth, behavior: 'smooth' });
  };

  return (
    <FoldersWrapper>
      {scrolled ? (
        <ScrollButton $direction="prev" onClick={scrollToStartHandler}>
          <LeftSvgIcon />
        </ScrollButton>
      ) : null}
      {hasScroll ? (
        <ScrollButton $direction="next" onClick={scrollToNextHandler}>
          <RightSvgIcon />
        </ScrollButton>
      ) : null}
      <FolderList ref={listRef}>
        {data && [
          <FolderItem name="All Favorites" key={0} allItem />,
          data.map(folder => <FolderItem key={folder.id} {...folder} />),
        ]}
      </FolderList>
    </FoldersWrapper>
  );
}
