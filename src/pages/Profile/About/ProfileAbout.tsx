import { Picture } from '@/components';
import Tooltip from '@/components/Tooltip/Tooltip';
import { useAccountQuery } from '@/redux/api';
import { formattedNumber } from '@/util/formatUtils';
import { pxToRem } from '@/util/styleUtils';
import { convertLink } from '@/util/jsxUtils';
import { format } from 'date-fns';
import React, { ReactElement } from 'react';
import { useParams } from 'react-router';
import {
  DescriptionItemContainer,
  DescriptionItemParagraph,
  ProfileAboutContainer,
  ProfileAboutDescription,
  ProfileAboutGrid,
  ProfileAboutGridItem,
  ProfileAboutH3,
} from './ProfileAbout.styled';
import { DescriptionItemProps, MedalItemProps, TrophyItemProps } from './ProfileAbout.type';

function DescriptionItem({ headline, children, large, grow, headingMargin }: DescriptionItemProps): ReactElement {
  return (
    <DescriptionItemContainer css={grow ? `flex-grow: 1; width: 100%;` : null}>
      <ProfileAboutH3 css={headingMargin ? `margin-left: ${pxToRem(headingMargin)};` : null}>{headline}</ProfileAboutH3>
      {React.isValidElement(children) ? (
        children
      ) : (
        <DescriptionItemParagraph large={large}>{children}</DescriptionItemParagraph>
      )}
    </DescriptionItemContainer>
  );
}

function TrophyItem({ name, description, imageUrl, to }: TrophyItemProps): ReactElement {
  return (
    <ProfileAboutGridItem innerItemWidth={150}>
      <Tooltip tooltipText={description} to={to}>
        <Picture imageWidth={150} imageHeight={150} src={imageUrl} alt={name} />
        <p>{name.toUpperCase()}</p>
      </Tooltip>
    </ProfileAboutGridItem>
  );
}
function MedalItem({ name, description, imageUrl }: MedalItemProps): ReactElement {
  return (
    <ProfileAboutGridItem innerItemWidth={70} marginTop={10}>
      <Tooltip tooltipText={description}>
        <Picture
          imageWidth={70}
          imageHeight={70}
          src={`//s.imgur.com/images/medal/${name.toLowerCase()}.png`}
          alt={name}
          css={imageUrl.includes('empty_state') ? `filter: grayscale(100%) opacity(0.5);` : null}
        />
      </Tooltip>
    </ProfileAboutGridItem>
  );
}

export default function ProfileAbout(): ReactElement {
  const { username } = useParams<{ username: string }>();
  const { data } = useAccountQuery(username);

  return (
    <ProfileAboutContainer>
      <ProfileAboutDescription
        css={`
          flex-shrink: 0;
        `}
      >
        <DescriptionItem headline="ABOUT">{convertLink(data?.bio)}</DescriptionItem>
        <DescriptionItem headline="JOINED" large>
          {data && format(new Date(data.createdDate), 'MMMM d, yyyy')}
        </DescriptionItem>
        <DescriptionItem headline="INTERNET POINTS" large>
          {data && formattedNumber(data?.points)}
        </DescriptionItem>
        <DescriptionItem headline="NOTORIETY" large>
          {data?.notoriety}
        </DescriptionItem>
        <DescriptionItem headline="MEDALLIONS">
          <ProfileAboutGrid itemWidth={80}>
            {data?.medals.map(({ ...medal }, idx) => (
              <MedalItem key={idx} {...medal} />
            ))}
          </ProfileAboutGrid>
        </DescriptionItem>
      </ProfileAboutDescription>
      <DescriptionItem headline="TROPHIES" headingMargin={30} grow>
        <ProfileAboutGrid itemWidth={200}>
          {data?.trophies.map(({ link, ...trophy }, idx) => (
            <TrophyItem to={link} key={idx} {...trophy} />
          ))}
        </ProfileAboutGrid>
      </DescriptionItem>
    </ProfileAboutContainer>
  );
}
