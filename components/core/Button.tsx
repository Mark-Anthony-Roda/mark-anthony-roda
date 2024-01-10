import { ReactNode } from "react";

export default function Button({
  children,
  className = "bg-[#043382] font-bold text-white py-2 px-6 md:w-fit rounded-full hover:bg-[#042B6B] flex gap-4 justify-center items-center",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <button className={className ?? ""}>{children}</button>;
}
