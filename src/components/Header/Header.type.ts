export interface HeaderProps extends HeaderCoverProps {
  children?: React.ReactNode;
  bodyRef: React.MutableRefObject<HTMLDivElement>;
}

export interface HeaderCoverProps {
  headerBackground?: string;
  threshold?: number;
}
