import { MouseEventHandler, ReactNode } from "react";

export default function Button({
  children,
  onClick,
  className = "bg-[#043382] font-bold text-white py-2 px-6 md:w-fit rounded-full hover:bg-[#042B6B] flex gap-4 justify-center items-center",
}: {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} className={className ?? ""}>
      {children}
    </button>
  );
}
