"use client";
import useTheme from "@/lib/store/themeStore";
import InfoCard from "../Card/InfoCard";
import { useShallow } from "zustand/react/shallow";
import { otherInfo, personalInfo } from "@/lib/const/aboutMe";

export default function AboutMe() {
  const { theme, classTheme } = useTheme(
    useShallow((state) => ({
      theme: state.theme,
      classTheme: state.class,
    }))
  );
  return (
    <section
      id="about-me"
      className="w-full flex flex-col gap-6 justify-center items-center"
    >
      <h2
        className={`text-xl md:text-4xl font-bold tracking-[3px] uppercase text-center`}
        style={{ color: classTheme[theme].textColor }}
      >
        About{" "}
        <span
          className={`tracking-[3px] font-bold`}
          style={{ color: classTheme[theme].textHightlight }}
        >
          me
        </span>
      </h2>
      <div
        className={`w-full flex flex-col gap-6 px-8 sm:px-18 md:px-24 lg:px-32`}
        style={{ color: classTheme[theme].textColor }}
      >
        <div className="flex gap-4 ">
          <div
            className={`w-1 h-7 rounded`}
            style={{ backgroundColor: classTheme[theme].primaryBackground }}
          />
          <h3 className="text-base sm:text-xl font-bold tracking-[2px]">
            Personal Information
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-2 xl:px-12">
          {personalInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 text-sm md:text-base"
            >
              <label className="whitespace-nowrap">{item.label}</label>
              <span className="font-bold ">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {otherInfo.map((item, index) => (
            <InfoCard
              key={index}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
