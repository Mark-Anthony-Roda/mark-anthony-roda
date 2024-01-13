import { create } from "zustand";
const useTheme = create<{
  theme: "dark" | "light";
  class: { [key: string]: { [key: string]: string } };
  toggleTheme: () => void;
}>((set, get) => ({
  theme: "dark",
  class: {
    dark: {
      pageBackground: "#191919",
      textColor: "text-white",
      textHightlight: "text-[#043382]",
      primaryBackground: "bg-[#043382]",
    },
    light: {
      pageBackground: "white",
      textColor: "text-[#191919]",
      textHightlight: "text-[#043382]",
      primaryBackground: "bg-[#043382]",
    },
  },
  toggleTheme: () => {
    const currentTheme = get().theme;

    if (currentTheme === "dark") {
      set({ theme: "light" });
    } else {
      set({ theme: "dark" });
    }
  },
}));

export default useTheme;
