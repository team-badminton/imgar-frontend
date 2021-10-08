import { ContainerWidthContext } from '@/components/MainContainer/MainContainer';
import { useAccountFoldersQuery } from '@/redux/api';
import { FolderInfo } from '@/redux/storeTypes';
import React, { ReactElement, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FolderIcon, FolderLink, FolderList, FolderName, FoldersWrapper } from './ProfileFavorite.styled';
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
  const { data } = useAccountFoldersQuery(username);
  return (
    <FoldersWrapper containerWidth={containerWidth}>
      <FolderList>
        {data && [
          <FolderItem name="All Favorites" key={0} allItem />,
          data.map(folder => <FolderItem key={folder.id} {...folder} />),
        ]}
      </FolderList>
    </FoldersWrapper>
  );
}
