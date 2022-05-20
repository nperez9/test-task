import { ReactNode } from "react";

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export interface ButtonProps {
  children: ReactNode;
  click: Function;
  type?: string | ButtonType;
  className?: string;
}