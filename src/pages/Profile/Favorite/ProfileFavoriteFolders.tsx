import { ContainerWidthContext } from '@/components/MainContainer/MainContainer';
import useThrottle from '@/hooks/useThrottle';
import { useAccountFoldersQuery } from '@/redux/api';
import { FolderInfo } from '@/redux/storeTypes';
import React, { ReactElement, useContext, useEffect, useRef, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FolderIcon, FolderLink, FolderList, FolderName, FoldersWrapper, ScrollButton } from './ProfileFavorite.styled';
import { ProfileFavoriteFoldersProps } from './ProfileFavorite.type';

function FolderItem({ id, name, allItem }: Partial<FolderInfo> & { allItem?: boolean }): ReactElement {
  const { url } = useRouteMatch();
  const to = id
    ? url +
      `/favorites/folder/${id}/${name
        .toLowerCase()
        .replace(' ', '-')
        .replace(/[^\w\s-]/g, '')}`
    : url + '/favorites';

  return (
    <li>
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

export default function ProfileFavoriteFolders({ username }: ProfileFavoriteFoldersProps): ReactElement {
  const containerWidth = useContext(ContainerWidthContext);
  const { data, isSuccess } = useAccountFoldersQuery(username);
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
    listRef.current.addEventListener('resize', handleResize);
    listRef.current.addEventListener('scroll', handleScroll);

    return () => {
      listRef.current.removeEventListener('resize', handleResize);
      listRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  console.log(hasScroll);
  console.log(scrolled);

  return (
    <FoldersWrapper containerWidth={containerWidth}>
      <FolderList ref={listRef}>
        {scrolled ? <ScrollButton direction="prev" /> : null}
        {data && [
          <FolderItem name="All Favorites" key={0} allItem />,
          data.map(folder => <FolderItem key={folder.id} {...folder} />),
        ]}
        {hasScroll ? <ScrollButton direction="next" /> : null}
      </FolderList>
    </FoldersWrapper>
  );
}
