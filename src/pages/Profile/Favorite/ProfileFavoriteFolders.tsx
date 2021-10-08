import { ContainerWidthContext } from '@/components/MainContainer/MainContainer';
import { useTypedSelector } from '@/redux';
import { useAccountFoldersQuery } from '@/redux/api';
import { masonryGalleryWidthSelector } from '@/redux/slices/displayReducer';
import { FolderInfo } from '@/redux/storeTypes';
import React, { ReactElement, ReactNode, useContext } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { FolderIcon, FolderLink, FolderList, FolderName, FoldersWrapper } from './ProfileFavorite.styled';
import { ProfileFavoriteFoldersProps } from './ProfileFavorite.type';

function FolderItem({ id, name }: Partial<FolderInfo>): ReactElement {
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
      <FolderLink to={to} activeClassName="isActive">
        <FolderIcon />
        <FolderName>{name}</FolderName>
      </FolderLink>
    </li>
  );
}

export default function ProfileFavoriteFolders({ username }: ProfileFavoriteFoldersProps): ReactElement {
  const containerWidth = useContext(ContainerWidthContext);
  const { data } = useAccountFoldersQuery(username);
  return (
    <FoldersWrapper containerWidth={containerWidth}>
      <FolderList>
        {data && [
          <FolderItem name="All Favorites" key={0} />,
          data.map(folder => <FolderItem key={folder.id} {...folder} />),
        ]}
      </FolderList>
    </FoldersWrapper>
  );
}
