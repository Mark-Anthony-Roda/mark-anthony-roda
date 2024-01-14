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
    } else {
      set({ theme: "dark" });
    }
  },
}));

export default useTheme;
