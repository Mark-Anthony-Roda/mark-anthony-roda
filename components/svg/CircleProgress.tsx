export default function CircleProgress({
  size = 160,
  stroke = "currentColor",
  percentage,
}: {
  size?: number;
  stroke?: string;
  percentage: number;
}) {
  const percentageToColor = (100 - percentage) / 100;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={size}
      height={size}
      className="w-[100px] h-[100px]"
    >
      <circle
        cx='50%'
        cy='50%'
        r='45%'
        strokeLinecap="round"
        stroke={stroke}
        strokeDasharray={270}
        strokeDashoffset={270 * percentageToColor}
        fill="none"
        strokeWidth={10}
      />
    </svg>
  );
}
