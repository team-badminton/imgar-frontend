import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { DescriptionItemParagraphProps, ProfileAboutTrophiesProps } from './Profile.type';

export const ProfileCoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ProfileAboutContainer = styled.div`
  display: flex;
`;

export const ProfileAboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pxToRem(320)};
  padding-right: ${pxToRem(25)};
`;

export const ProfileAboutH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.lightBlue};
  font-weight: bold;
  margin: 0;
`;

export const DescriptionItemContainer = styled.div`
  margin-top: ${pxToRem(40)};
  color: ${({ theme }) => theme.color.white};
`;

export const DescriptionItemParagraph = styled.p<DescriptionItemParagraphProps>`
  font-size: ${({ large, theme }) => (large ? pxToRem(28) : theme.fontSize.m)};
  ${({ large }) => (large ? `font-weight: bold;` : null)}
  margin: 0;
  margin-top: ${({ theme, large }) => (large ? theme.spaceSize.s : theme.spaceSize.m)};
`;

export const ProfileAboutTrophies = styled.ul<ProfileAboutTrophiesProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, ${pxToRem(200)});
  grid-auto-rows: auto;
  align-content: start;
  justify-items: center;
  align-items: start;
  padding: 0;
  margin: 0;
`;

export const TrophyItemContainer = styled.li`
  text-align: center;
  margin-top: ${({ theme }) => theme.spaceSize.l};
  width: ${pxToRem(150)};
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-bottom: 0;
  }
`;
