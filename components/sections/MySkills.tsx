import CircleProgressChart from "../Chart/CircleProgressChart";
import useTheme from "@/lib/store/themeStore";
import { useShallow } from "zustand/react/shallow";

export default function MySkills() {
  const languageSkills = [
    {
      name: "JavaScript",
      value: 90,
    },
    {
      name: "PHP",
      value: 80,
    },
    {
      name: "JAVA",
      value: 70,
    },
    {
      name: "C",
      value: 70,
    },
    {
      name: "C++",
      value: 70,
    },
    {
      name: "C#",
      value: 70,
    },
  ];

  const frameworkSkills = [
    {
      name: "NodeJS - AdonisJs",
      value: 90,
    },
    {
      name: "ReactJS - NextJS",
      value: 90,
    },
    {
      name: "TailwindCSS",
      value: 90,
    },
    {
      name: "NodeJS - Express",
      value: 80,
    },
    {
      name: "Mantine UI",
      value: 80,
    },
    {
      name: "Ant Design",
      value: 80,
    },
    {
      name: "Bootstrap",
      value: 70,
    },
  ];

  const { theme, classTheme } = useTheme(
    useShallow((state) => ({
      theme: state.theme,
      classTheme: state.class,
    }))
  );

  return (
    <section
      id="skills"
      className="w-full flex flex-col gap-8 justify-center items-center"
    >
      <h2
        id="about-me"
        className={`${classTheme[theme].textColor} text-2xl md:text-4xl font-bold tracking-[3px] uppercase`}
      >
        My{" "}
        <span
          className={`${classTheme[theme].textHightlight} tracking-[3px] font-bold`}
        >
          skills
        </span>
      </h2>

      <div className="flex gap-4 w-full px-12 sm:px-18 md:px-24 lg:px-32">
        <div
          className={`w-1 h-7 ${classTheme[theme].primaryBackground} rounded`}
        />
        <h3
          className={`${classTheme[theme].textColor} text-base sm:text-xl  font-bold tracking-[2px]`}
        >
          Language
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-12 sm:px-18 md:px-24 lg:px-32">
        {languageSkills.map((item, index) => (
          <CircleProgressChart
            key={index}
            value={item.value}
            name={item.name}
            wrapperClass={`w-[160px] relative place-self-center ${classTheme[theme].textHightlight} flex flex-col gap-4`}
            valueClass={`text-2xl font-semibold ${classTheme[theme].textColor}`}
            theme={classTheme[theme]}
          />
        ))}
      </div>

      <div className="flex gap-4 w-full px-12 sm:px-18 md:px-24 lg:px-32">
        <div
          className={`w-1 h-7 ${classTheme[theme].primaryBackground} rounded`}
        />
        <h3
          className={`${classTheme[theme].textColor} text-base sm:text-xl font-bold tracking-[2px]`}
        >
          Framework/UI Component
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-12 sm:px-18 md:px-24 lg:px-32">
        {frameworkSkills.map((item, index) => (
          <CircleProgressChart
            key={index}
            value={item.value}
            name={item.name}
            wrapperClass={`w-[160px] relative place-self-center ${classTheme[theme].textHightlight} flex flex-col gap-4`}
            valueClass={`text-2xl font-semibold ${classTheme[theme].textColor}`}
            theme={classTheme[theme]}
          />
        ))}
      </div>
    </section>
  );
}
