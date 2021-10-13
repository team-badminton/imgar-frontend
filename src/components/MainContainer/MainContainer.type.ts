import { DefaultTheme } from 'styled-components';

export interface HeaderProps {
  children?: React.ReactNode;
  customHeader?: React.ReactNode;
  customHeaderHeight?: number;
  headerCover?: React.ReactNode;
  headerCoverPosition?: 'center' | 'bottom' | 'top';
  headerBackground?: string;
  darkenBackground?: boolean;
  sticky?: boolean;
  backgroundColor?: keyof DefaultTheme['color'];
  noOffset?: boolean;
  containerWidth?: number;
  headerCoverWidth?: number;
}

export interface HeaderCoverProps {
  headerBackground?: string;
  hasShadow: boolean;
  headerHeight: number;
  darkenBackground?: boolean;
  headerCoverPosition: HeaderProps['headerCoverPosition'];
  headerCoverWidth?: number;
}

export interface ContainerWrapperProps {
  gradient: boolean;
}

export interface MainSectionProps {
  coverHeight: number;
  containerWidth?: number;
}
