import { SuggestInfo } from '../../redux/storeTypes';

export type SuggestListProps = SuggestInfo & {
  /** 검색어 */
  keyword: string;
};

export interface SuggestThumbnailProps {
  src: string;
  isCircle?: boolean;
}
