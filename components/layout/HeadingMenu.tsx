import { createElement } from "react";
import Button from "../core/Button";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import useNavigation from "@/lib/store/sectionNavigationStore";
import { useShallow } from "zustand/react/shallow";
import useTheme from "@/lib/store/themeStore";
import { MenuProps } from "@/interfaces/layout/headerMenus";

export default function HeaderMenu({
  items,
  className = "fixed bottom-0 flex md:hidden justify-between bg-[#043382] p-3 z-50 w-full shadow-md",
}: MenuProps) {
  const { active, scrollToElement } = useNavigation(
    useShallow((state) => ({
      active: state.active,
      scrollToElement: state.scrollToElement,
    }))
  );

  const { theme, toggleTheme } = useTheme(
    useShallow((state) => ({
      theme: state.theme,
      toggleTheme: state.toggleTheme,
    }))
  );

  return (
    <div className={className}>
      {items.map((item, index) => {
        const activeClass =
          !index && (!active || active === item.id)
            ? "bg-[#042B6B]"
            : active === item.id
            ? "bg-[#042B6B]"
            : "bg-[#043382]";

        return (
          <div key={index}>
            <Button
              onClick={() => scrollToElement(item.id)}
              className={`${activeClass} cursor-pointer font-bold text-white p-3 md:w-fit rounded-full hover:bg-[#042B6B] flex gap-4 justify-center items-center`}
            >
              {createElement(item.icon, { size: "20" })}
            </Button>
          </div>
        );
      })}
      <div>
        <Button
          onClick={toggleTheme}
          className={`font-bold ${
            theme === "dark" ? "text-white" : "text-yellow-500"
          } p-3 md:w-fit rounded-full hover:bg-[#042B6B] flex gap-4 justify-center items-center`}
        >
          {createElement(theme === "dark" ? IoMoonSharp : IoSunnySharp, {
            size: "20",
          })}
        </Button>
      </div>
    </div>
  );
}
