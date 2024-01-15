import useTheme from "@/lib/store/themeStore";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { useShallow } from "zustand/react/shallow";

export default function MyExperienceEducation() {
  const { theme, classTheme } = useTheme(
    useShallow((state) => ({
      theme: state.theme,
      classTheme: state.class,
    }))
  );

  const experiences = [
    {
      year: "2021 - present",
      company: "Halcyon Agyle",
      position: "Software Developer",
      description:
        "Collaborated with a team of talented programmers, contributing to the development and enhancement of innovative software solutions.",
    },
    {
      year: "Sep 2020 - Dec 2020",
      company: "Cerenimbus Inc.",
      position: "Software Developer Intern (WFH)",
      description:
        "Worked virtually with web developers and assisted them in group web development projects. Resolved minor bug fixes.",
    },
  ];

  const education = [
    {
      year: "2016 - 2020",
      position: "Bachelor Degree",
      school: "University of Cebu LM",
      course: "Bachelor of Science in Information Technology",
    },
  ];
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
          <div key={index} className="flex gap-4">
            <div className="flex flex-col gap-1 justify-start items-center">
              <BsFillBriefcaseFill size={20} />
              <div className="border w-[1px] h-[90%]" />
            </div>
            <div
              className="flex flex-col gap-4"
              style={{ color: classTheme[theme]?.textColor }}
            >
              <p className="px-4 py-1 text-sm rounded-full bg-[#043382] font-medium tracking-[1px] w-fit text-white">
                {item.year}
              </p>
              <div className="flex gap-2 text-xs">
                <p className="font-bold tracking-[0.8px]">{item.position}</p>
                <p>-</p>
                <p className="tracking-[0.8px]">{item.company}</p>
              </div>
              <p className="text-xs">{item.description}</p>
            </div>
          </div>
        ))}

        {education.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col gap-1 justify-start items-center">
              <BsFillBriefcaseFill size={20} />
              <div className="border w-[1px] h-[90%]" />
            </div>
            <div
              className="flex flex-col gap-4"
              style={{ color: classTheme[theme]?.textColor }}
            >
              <p className="px-4 py-1 text-sm rounded-full bg-[#043382] font-medium tracking-[1px] w-fit">
                {item.year}
              </p>
              <div className="flex gap-2 text-xs">
                <p className="font-bold tracking-[0.8px]">{item.position}</p>
                <p>-</p>
                <p className="tracking-[0.8px]">{item.school}</p>
              </div>
              <p className="text-xs">{item.course}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
