export interface HeaderProps {
  children?: React.ReactNode;
  customHeader?: React.ReactNode;
  customHeaderHeight?: number;
  headerCover?: React.ReactNode;
  headerBackground?: string;
  darkenBackground?: boolean;
  sticky?: boolean;
}

export interface HeaderCoverProps {
  headerBackground?: string;
  hasShadow: boolean;
  headerHeight: number;
  darkenBackground?: boolean;
}

export interface ContainerWrapperProps {
  gradient: boolean;
}
