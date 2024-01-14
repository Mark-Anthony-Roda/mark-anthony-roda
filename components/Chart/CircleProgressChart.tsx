import CircleProgress from "../svg/CircleProgress";

export default function CircleProgressChart({
  value,
  name,
  wrapperClass = "w-[100px] relative place-self-center text-[#043382] flex flex-col gap-4",
  outerClass = "w-[100px] h-[100px] rounded-full p-[20px] shadow-lg",
  innerClass = "w-[60px] h-[60px] rounded-full flex justify-center items-center",
  valueClass = "text-2xl font-semibold text-white",
  theme,
  style,
}: {
  value: number;
  name: string;
  wrapperClass?: string;
  outerClass?: string;
  innerClass?: string;
  valueClass?: string;
  theme: { [key: string]: string };
  style: { [key: string]: string };
}) {
  return (
    <div className={wrapperClass}>
      <div className={outerClass}>
        <div className={innerClass}>
          <p id="number" className={valueClass} style={style}>
            {value}%
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0">
        <CircleProgress percentage={value} stroke={theme?.textHightlight} />
      </div>

      <div className="flex justify-center w-full">
        <span
          className={`text-sm sm:text-lg font-medium tracking-[2px]`}
          style={{ color: theme?.textColor }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
