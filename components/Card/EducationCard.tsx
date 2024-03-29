import { EducationProps } from "@/interfaces/education";
import { createElement } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";

export default function EducationCard({
  icon = BsFillBriefcaseFill,
  textColor = "#000000",
  year,
  position,
  school,
  course,
}: EducationProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-1 justify-start items-center">
        {createElement(icon, { size: "20" })}
        <div className="border w-[1px] h-[90%]" />
      </div>
      <div className="flex flex-col gap-4" style={{ color: textColor }}>
        <p className="px-4 py-1 text-sm text-white rounded-full bg-[#043382] font-medium tracking-[1px] w-fit">
          {year}
        </p>
        <div className="flex gap-2 text-xs">
          <p className="font-bold tracking-[0.8px]">{position}</p>
          <p>-</p>
          <p className="tracking-[0.8px]">{school}</p>
        </div>
        <p className="text-xs">{course}</p>
      </div>
    </div>
  );
}
