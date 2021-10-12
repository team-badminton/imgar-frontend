import { TagInfo } from '@/redux/storeTypes';

export interface TagCardProps {
  tag: TagInfo;
  isFeatured?: boolean;
  className?: string;
}

export interface StyledArticleProps {
  accentColor: string;
}

export interface StyledTagCardLinkProps {
  isFeatured: boolean;
  backgroundImageId: string;
}
