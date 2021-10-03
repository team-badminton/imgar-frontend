import { SuggestInfo } from '../../redux/storeTypes';

export type SuggestListProps = SuggestInfo & {
  /** 검색어 */
  keyword: string;
};

export interface SuggestThumbnailProps {
  src: string;
  isCircle?: boolean;
}

export interface SuggestListHeadingProps {
  a11yHidden?: boolean;
}

export interface SuggestListUlProps {
  children: React.ReactNode;
  headline: string;
  hideHeading?: boolean;
}

export interface SuggestListLiProps {
  to: string;
  keywordRegexp: RegExp;
  prefix?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
}
