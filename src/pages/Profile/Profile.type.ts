import { Trophy } from '@/redux/api/types/fetchData';
import { TrophyInfo, UserInfo } from '@/redux/storeTypes';
import { ReactNode } from 'react';

export interface ProfileCoverInfo {
  username: string;
  points: number;
  notoriety: string;
  children?: ReactNode;
}

export interface ProfileAboutTrophiesProps {
  columns: number;
}

export interface ProfileAboutProps {
  username: string;
}

export interface DescriptionItemProps {
  headline: string;
  children: ReactNode;
  large?: boolean;
}

export interface DescriptionItemParagraphProps {
  large?: boolean;
}

export type TrophyItemProps = Omit<TrophyInfo, 'id'> & { link?: string; to?: string };
