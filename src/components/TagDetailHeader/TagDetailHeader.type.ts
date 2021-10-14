import { TagDetailSortOption } from '@/pages/TagDetail/TagDetail.type';

export interface TagDetailHeaderProps {
  setSort: ((s: TagDetailSortOption) => void)[];
  sorted: TagDetailSortOption[];
}
