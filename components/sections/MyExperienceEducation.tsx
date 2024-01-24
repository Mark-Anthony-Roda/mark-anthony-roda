import { education, experiences } from "@/lib/const/experienceEducation";
import useTheme from "@/lib/store/themeStore";
import { useShallow } from "zustand/react/shallow";
import ExperienceCard from "../Card/ExperienceCard";
import EducationCard from "../Card/EducationCard";

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
        className={`text-xl md:text-4xl font-bold tracking-[3px] uppercase text-center`}
        style={{ color: classTheme[theme].textColor }}
      >
        My{" "}
        <span
          className={`tracking-[3px] font-bold`}
          style={{ color: classTheme[theme].textHightlight }}
        >
          experience/education
        </span>
      </h2>
      <div className="flex flex-col w-full text-[#043382] gap-4 px-8 sm:px-18 md:px-24 lg:px-32">
        {experiences.map((item, index) => (
          <ExperienceCard
            key={index}
            textColor={classTheme[theme]?.textColor}
            {...item}
          />
        ))}

        {education.map((item, index) => (
          <EducationCard
            key={index}
            textColor={classTheme[theme]?.textColor}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}
