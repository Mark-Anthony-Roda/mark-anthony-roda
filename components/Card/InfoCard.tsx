import { InfoCardProps } from "@/interfaces/card/infoCard";

export default function InfoCard({
  heading,
  description,
}: InfoCardProps) {
  return (
    <div className="rounded-lg p-4 border flex flex-col">
      <p className="text-5xl font-semibold text-[#043382]">{heading}</p>
      <div className="flex gap-4 items-center">
        <hr className="border w-8" />
        <span className="uppercase text-md md:text-lg tracking-[2px] font-medium">
          {description}
        </span>
      </div>
    </div>
  );
}
