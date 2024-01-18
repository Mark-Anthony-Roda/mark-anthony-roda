import { SectionNavigationProps } from "@/interfaces/store/sectionNavigation";
import { GiMeepleGroup, GiSkills } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { IoMdMailOpen } from "react-icons/io";
import { MdPerson4 } from "react-icons/md";
import { create } from "zustand";
const useNavigation = create<SectionNavigationProps>((set, get) => ({
  active: null,
  navigations: [
    {
      name: "Introduction",
      icon: ImProfile,
      id: "introduction",
    },
    {
      name: "About me",
      icon: MdPerson4,
      id: "about-me",
    },
    {
      name: "Skills",
      icon: GiSkills,
      id: "skills",
    },
    {
      name: "Experience",
      icon: GiMeepleGroup,
      id: "experience",
    },
    {
      name: "Socials",
      icon: IoMdMailOpen,
      id: "socials",
    },
  ],
  activeHandler: (to: string) => {
    set({ active: to });
  },
  scrollToElement: (to: string) => {
    const element = document.getElementById(to);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      set({ active: to });
    }
  },
  handleScroll: () => {
    const navigations = get().navigations;
    for (const section of navigations) {
      const element = document.getElementById(section.id);

      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          set({ active: section.id });
          break;
        }
      }
    }
  },
}));

export default useNavigation;
