import { MedalInfo, TrophyInfo } from '@/redux/storeTypes';
import { ReactNode } from 'react';
export interface ProfileAboutTrophiesProps {
  columns: number;
}

export interface DescriptionItemProps {
  headline: string;
  children: ReactNode;
  large?: boolean;
  grow?: boolean;
  headingMargin?: number;
}

export interface DescriptionItemParagraphProps {
  large?: boolean;
}

export type TrophyItemProps = Partial<TrophyInfo> & { link?: string; to?: string };
export type MedalItemProps = Partial<MedalInfo>;

export interface ProfileAboutGridProps {
  itemWidth: number;
}
