export type SearchResultPostSort1 = 'highestScoring' | 'mostViral' | 'newest';
export type SearchResultPostSort2 = 'all' | 'day' | 'week' | 'month' | 'year';

export interface SearchResultPostHeaderState {
  setSort: (((s: SearchResultPostSort1) => void) | ((s: SearchResultPostSort2) => void))[];
  sorted: (SearchResultPostSort1 | SearchResultPostSort2)[];
}

export interface AdvancedSearchContainerProps {
  columns: number;
}
