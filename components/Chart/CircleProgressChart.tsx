import CircleProgress from "../svg/CircleProgress";

export default function CircleProgressChart({
  value,
  name,
  wrapperClass = "w-[160px] relative place-self-center text-[#043382] flex flex-col gap-4",
  outerClass = "w-[160px] h-[160px] rounded-full p-[20px] shadow-lg",
  innerClass = "w-[120px] h-[120px] rounded-full flex justify-center items-center",
  valueClass = "text-2xl font-semibold text-white",
  theme,
}: {
  value: number;
  name: string;
  wrapperClass?: string;
  outerClass?: string;
  innerClass?: string;
  valueClass?: string;
  theme: { [key: string]: string };
}) {
  return (
    <div className={wrapperClass}>
      <div className={outerClass}>
        <div className={innerClass}>
          <p id="number" className={valueClass}>
            {value}%
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0">
        <CircleProgress percentage={value} />
      </div>

      <div className="flex justify-center w-full">
        <span
          className={`${theme?.textColor} text-sm sm:text-lg font-medium tracking-[2px]`}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
