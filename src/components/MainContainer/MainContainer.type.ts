import { DefaultTheme } from 'styled-components';

export interface HeaderProps {
  children?: React.ReactNode;
  customHeader?: React.ReactNode;
  customHeaderHeight?: number;
  headerCover?: React.ReactNode;
  headerBackground?: string;
  darkenBackground?: boolean;
  sticky?: boolean;
  backgroundColor?: keyof DefaultTheme['color'];
}

export interface HeaderCoverProps {
  headerBackground?: string;
  hasShadow: boolean;
  headerHeight: number;
  darkenBackground?: boolean;
}

export interface ContainerWrapperProps {
  gradient: boolean;
  backgroundColor?: keyof DefaultTheme['color'];
}
