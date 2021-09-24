export interface SearchBarProps {
  placeholder?: string;
  onQueryChange?: (query: string) => void;
  throttleTime?: number;
  setFocus?: (bool: boolean) => void;
}
