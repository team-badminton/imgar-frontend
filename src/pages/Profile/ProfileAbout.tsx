import { useAccountQuery } from '@/redux/api';
import { formattedNumber } from '@/util/formatUtils';
import React, { ReactElement } from 'react';
import {
  DescriptionItemContainer,
  DescriptionItemLargeParagraph,
  ProfileAboutContainer,
  ProfileAboutDescription,
  ProfileAboutH3,
  ProfileAboutTrophies,
} from './Profile.styled';
import { DescriptionItemProps, ProfileAboutProps, TrophyItemProps } from './Profile.type';

function DescriptionItem({ headline, children, large }: DescriptionItemProps): ReactElement {
  return (
    <DescriptionItemContainer>
      <ProfileAboutH3>{headline}</ProfileAboutH3>
      {large ? <DescriptionItemLargeParagraph>{children}</DescriptionItemLargeParagraph> : <p>{children}</p>}
    </DescriptionItemContainer>
  );
}

function TrophyItem({ name, description, id, imageUrl }: TrophyItemProps) {}

export default function ProfileAbout({ username }: ProfileAboutProps): ReactElement {
  const { data } = useAccountQuery(username);

  console.log(data);

  return (
    <ProfileAboutContainer>
      <ProfileAboutDescription>
        <DescriptionItem headline="ABOUT">{data?.bio}</DescriptionItem>
        <DescriptionItem headline="JOINED" large>
          {data && new Date(data.createdDate).toString()}
        </DescriptionItem>
        <DescriptionItem headline="INTERNET POINTS" large>
          {data && formattedNumber(data?.points)}
        </DescriptionItem>
        <DescriptionItem headline="NOTORIETY" large>
          {data?.notoriety}
        </DescriptionItem>
        <DescriptionItem headline="MEDALLIONS">{data?.medals.toString()}</DescriptionItem>
      </ProfileAboutDescription>
      <ProfileAboutTrophies columns={4}></ProfileAboutTrophies>
    </ProfileAboutContainer>
  );
}
