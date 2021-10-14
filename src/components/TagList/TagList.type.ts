import { FeaturedTagInfo } from '@/redux/storeTypes';

export interface TagListProps {
  tags: FeaturedTagInfo[];
}

export interface StyledArticleProps {
  articleWidth: number;
  isOpen: boolean;
}
