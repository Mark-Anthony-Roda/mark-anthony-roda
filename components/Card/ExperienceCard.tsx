import { ExperienceProps } from "@/interfaces/experience";
import { createElement } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";

export default function ExperienceCard({
  icon = BsFillBriefcaseFill,
  textColor = "#000000",
  year,
  position,
  company,
  description,
}: ExperienceProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-1 justify-start items-center">
        {createElement(icon, { size: "20" })}
        <div className="border w-[1px] h-[90%]" />
      </div>
      <div className="flex flex-col gap-4" style={{ color: textColor }}>
        <p className="px-4 py-1 text-sm rounded-full bg-[#043382] font-medium tracking-[1px] w-fit text-white">
          {year}
        </p>
        <div className="flex gap-2 text-xs">
          <p className="font-bold tracking-[0.8px]">{position}</p>
          <p>-</p>
          <p className="tracking-[0.8px]">{company}</p>
        </div>
        {description && <p className="text-xs">{description}</p>}
      </div>
    </div>
  );
}
