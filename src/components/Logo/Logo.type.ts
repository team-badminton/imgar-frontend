import { ReactHTML } from 'react';

export interface LogoContainerProps {
  icon?: boolean;
}

export interface LogoProps extends LogoContainerProps {
  as: keyof ReactHTML;
}
