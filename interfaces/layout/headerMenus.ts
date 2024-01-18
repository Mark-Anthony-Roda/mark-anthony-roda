import { FunctionComponent } from "react";

export interface MenuProps {
  items: Array<{
    name: string;
    icon: FunctionComponent<{ size: string }>;
    id: string;
  }>;
  className?: string;
}
