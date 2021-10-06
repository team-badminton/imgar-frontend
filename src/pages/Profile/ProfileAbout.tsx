import { Picture } from '@/components';
import Tooltip from '@/components/Tooltip/Tooltip';
import { useAccountQuery } from '@/redux/api';
import { formattedNumber } from '@/util/formatUtils';
import moment from 'moment';
import React, { ReactElement } from 'react';
import {
  DescriptionItemContainer,
  DescriptionItemParagraph,
  ProfileAboutContainer,
  ProfileAboutDescription,
  ProfileAboutH3,
  ProfileAboutTrophies,
  TrophyItemContainer,
} from './Profile.styled';
import { DescriptionItemProps, ProfileAboutProps, TrophyItemProps } from './Profile.type';

function DescriptionItem({ headline, children, large }: DescriptionItemProps): ReactElement {
  return (
    <DescriptionItemContainer>
      <ProfileAboutH3>{headline}</ProfileAboutH3>
      {typeof children === 'string' ? (
        <DescriptionItemParagraph large={large}>{children}</DescriptionItemParagraph>
      ) : (
        children
      )}
    </DescriptionItemContainer>
  );
}

function TrophyItem({ name, description, imageUrl, to }: TrophyItemProps): ReactElement {
  return (
    <TrophyItemContainer>
      <Tooltip tooltipText={description} to={to}>
        <Picture imageWidth={150} src={imageUrl} alt={name} />
        <p>{name.toUpperCase()}</p>
      </Tooltip>
    </TrophyItemContainer>
  );
}

export default function ProfileAbout({ username }: ProfileAboutProps): ReactElement {
  const { data } = useAccountQuery(username);

  return (
    <ProfileAboutContainer>
      <ProfileAboutDescription>
        <DescriptionItem headline="ABOUT">{data?.bio}</DescriptionItem>
        <DescriptionItem headline="JOINED" large>
          {data && moment(data.createdDate).format('MMMM D, YYYY')}
        </DescriptionItem>
        <DescriptionItem headline="INTERNET POINTS" large>
          {data && formattedNumber(data?.points)}
        </DescriptionItem>
        <DescriptionItem headline="NOTORIETY" large>
          {data?.notoriety}
        </DescriptionItem>
        <DescriptionItem headline="MEDALLIONS">{data?.medals.toString()}</DescriptionItem>
      </ProfileAboutDescription>
      <DescriptionItem headline="TROPHIES">
        <ProfileAboutTrophies columns={4}>
          {data?.trophies.map(({ id, link, ...trophy }) => (
            <TrophyItem to={link} key={id} {...trophy} />
          ))}
        </ProfileAboutTrophies>
      </DescriptionItem>
    </ProfileAboutContainer>
  );
}
