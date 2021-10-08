import { ReactNode } from 'react';

export interface ProfileCoverInfo {
  username: string;
  points: number;
  notoriety: string;
  children?: ReactNode;
}
