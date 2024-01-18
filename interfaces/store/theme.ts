export interface ThemeProps {
    theme: "dark" | "light";
    class: { [key: string]: { [key: string]: string } };
    toggleTheme: () => void;
    getInitialTheme: () => void;
  }