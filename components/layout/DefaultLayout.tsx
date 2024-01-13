"use client";
import { ReactNode, useEffect } from "react";
import useNavigation from "@/lib/store/sectionNavigationStore";
import { useShallow } from "zustand/react/shallow";
import FloatingMenu from "./FloatingMenu";
import HeaderMenu from "./HeadingMenu";
import useTheme from "@/lib/store/themeStore";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const { navigations, handleScroll } = useNavigation(
    useShallow((state) => ({
      navigations: state.navigations,
      handleScroll: state.handleScroll,
    }))
  );

  const { theme, classTheme } = useTheme(
    useShallow((state) => ({
      theme: state.theme,
      classTheme: state.class,
    }))
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`relative flex`}
      style={{
        backgroundColor: classTheme[theme]?.pageBackground,
      }}
    >
      <FloatingMenu
        items={navigations}
        className="hidden md:flex fixed h-screen max-h-screen p-6 flex-col gap-6 justify-center z-50"
      />
      <HeaderMenu items={navigations} />
      <main className="container mx-auto">{children}</main>;
    </div>
  );
}
