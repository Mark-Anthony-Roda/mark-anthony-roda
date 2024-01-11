import { create } from "zustand";
type sectionProp = "hero-banner" | "about-me" | "experience";
const useNavigation = create<{
  sectionId: number;
  sections: Array<sectionProp>;
}>(() => ({
  sectionId: 0,
  sections: ["hero-banner", "about-me", "experience"],
}));

export default useNavigation;
