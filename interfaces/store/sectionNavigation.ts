import { FunctionComponent } from "react";

export interface SectionNavigationProps {
  active: string | null;
  navigations: Array<{
    name: string;
    icon: FunctionComponent<{ size: string }>;
    id: string;
  }>;
  scrollToElement: (to: string) => void;
  handleScroll: () => void;
}
