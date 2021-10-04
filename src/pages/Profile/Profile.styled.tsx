import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { ProfileAboutTrophiesProps } from './Profile.type';

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
  width: 200px;
`;

export const ProfileAboutH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.lightBlue};
  font-weight: bold;
`;

export const DescriptionItemContainer = styled.div`
  color: ${({ theme }) => theme.color.white};
`;

export const DescriptionItemLargeParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
`;

export const ProfileAboutTrophies = styled.div<ProfileAboutTrophiesProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, ${pxToRem(200)});
  grid-template-rows: repeat();
`;
