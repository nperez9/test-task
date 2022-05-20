import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  classname?: string;
  isFooterCard?: boolean;
}
