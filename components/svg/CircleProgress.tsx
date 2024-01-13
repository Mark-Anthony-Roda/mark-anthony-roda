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
    >
      <circle
        cx={80}
        cy={80}
        r={70}
        strokeLinecap="round"
        stroke={stroke}
        strokeDasharray={450}
        strokeDashoffset={450 * percentageToColor}
        fill="none"
        strokeWidth={20}
      />
    </svg>
  );
}
