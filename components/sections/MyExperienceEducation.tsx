import useTheme from "@/lib/store/themeStore";
import { useShallow } from "zustand/react/shallow";

export default function MyExperienceEducation() {
  const { theme, classTheme } = useTheme(
    useShallow((state) => ({
      theme: state.theme,
      classTheme: state.class,
    }))
  );
  return (
    <section
      id="experience"
      className="w-full flex flex-col gap-6 justify-center items-center"
    >
      <h2
        className={`${classTheme[theme].textColor} text-2xl md:text-4xl font-bold tracking-[3px] uppercase`}
      >
        My{" "}
        <span
          className={`${classTheme[theme].textHightlight} tracking-[3px] font-bold`}
        >
          experience/education
        </span>
      </h2>
    </section>
  );
}
