import { ReactElement } from 'react';

export interface HeaderProps {
  children?: React.ReactNode;
  customHeader?: React.ReactNode;
  headerCover?: React.ReactNode;
  headerBackground?: string;
}

export interface HeaderCoverProps {
  headerBackground?: string;
  hasShadow: boolean;
  headerHeight: number;
}

export interface HeaderContainerProps {
  headerHeight: number;
}

export interface ContainerWrapperProps {
  gradient: boolean;
}
