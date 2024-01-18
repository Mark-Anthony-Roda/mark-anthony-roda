import { IconType } from "react-icons";

export interface ExperienceProps {
  icon?: IconType;
  textColor?: string;
  year: string;
  position: string;
  company: string;
  description?: string;
}
