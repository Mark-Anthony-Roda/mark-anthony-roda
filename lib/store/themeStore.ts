import { ThemeProps } from "@/interfaces/store/theme";
import { create } from "zustand";
const useTheme = create<ThemeProps>((set, get) => ({
  theme: "dark",
  class: {
    dark: {
      pageBackground: "#191919",
      textColor: "white",
      textHightlight: "#043382",
      primaryBackground: "#043382",
    },
    light: {
      pageBackground: "white",
      textColor: "#191919",
      textHightlight: "#043382",
      primaryBackground: "#043382",
    },
  },
  toggleTheme: () => {
    const currentTheme = get().theme;

    if (currentTheme === "dark") {
      set({ theme: "light" });
      localStorage.setItem("theme", "light");
    } else {
      set({ theme: "dark" });
      localStorage.setItem("theme", "dark");
    }
  },
  getInitialTheme: () => {
    const theme: any = localStorage.getItem("theme") ?? "dark";

    if (theme) set({ theme: theme });
  },
}));

export default useTheme;
