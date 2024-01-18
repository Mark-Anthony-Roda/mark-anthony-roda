import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
