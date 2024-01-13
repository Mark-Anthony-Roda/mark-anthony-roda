"use client";
import useTheme from "@/lib/store/themeStore";
import InfoCard from "../Card/InfoCard";
import { useShallow } from "zustand/react/shallow";

export default function AboutMe() {
  const personalInfo = [
    {
      label: "First Name :",
      value: "Mark Anthony",
    },
    {
      label: "Last Name :",
      value: "Roda",
    },
    {
      label: "Age :",
      value: 25,
    },
    {
      label: "Nationality :",
      value: "Filipino",
    },
    {
      label: "Address :",
      value:
        "Dama de Noche, Locatha, Looc, Lapu-Lapu City, Cebu, 6015 Philippines",
    },
    {
      label: "Phone :",
      value: "+639558543435",
    },
    {
      label: "Email :",
      value: "rodamarkanthony90@gmail.com",
    },
    {
      label: "Language :",
      value: "English, Tagalog, Bisaya",
    },
  ];

  const otherInfo = [
    {
      heading: "3",
      description: "Years of experience",
    },
    {
      heading: "4",
      description: "Completed Projects",
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
      id="about-me"
      className="w-full flex flex-col gap-6 justify-center items-center"
    >
      <h2
        className={`${classTheme[theme].textColor} text-2xl md:text-4xl font-bold tracking-[3px] uppercase`}
      >
        About{" "}
        <span
          className={`${classTheme[theme].textHightlight} tracking-[3px] font-bold`}
        >
          me
        </span>
      </h2>
      <div
        className={`w-full flex flex-col gap-6 ${classTheme[theme].textColor} px-12 sm:px-18 md:px-24 lg:px-32`}
      >
        <div className="flex gap-4 ">
          <div
            className={`w-1 h-7 ${classTheme[theme].primaryBackground} rounded`}
          />
          <h3 className="text-base sm:text-xl font-bold tracking-[2px]">
            Personal Information
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-2 xl:px-12">
          {personalInfo.map((item, index) => (
            <div
              key={index}
              className="flex sm:flex-col lg:flex-row gap-4 text-sm md:text-base"
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
