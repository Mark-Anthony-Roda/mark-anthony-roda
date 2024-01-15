"use client";
import { ReactNode, useEffect, useRef } from "react";
import useNavigation from "@/lib/store/sectionNavigationStore";
import { useShallow } from "zustand/react/shallow";
import FloatingMenu from "./FloatingMenu";
import HeaderMenu from "./HeadingMenu";
import useTheme from "@/lib/store/themeStore";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const observer = useRef<IntersectionObserver | null>(null);

  const { navigations, handleScroll } = useNavigation(
    useShallow((state) => ({
      navigations: state.navigations,
      handleScroll: state.handleScroll,
    }))
  );

  const { theme, classTheme, getInitialTheme } = useTheme(
    useShallow((state) => ({
      theme: state.theme,
      classTheme: state.class,
      getInitialTheme: state.getInitialTheme,
    }))
  );

  useEffect(() => {
    getInitialTheme();
  }, [getInitialTheme]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            useNavigation.setState({ active: entry.target.id });
          }
        });
      },
      { threshold: 0.5 }
    );

    navigations.forEach((section) => {
      const target = document.getElementById(section.id);
      if (target) {
        observer.current?.observe(target);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [navigations]);

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
