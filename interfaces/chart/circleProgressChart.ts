export interface CircleProgressChartProps {
  value: number;
  name: string;
  wrapperClass?: string;
  outerClass?: string;
  innerClass?: string;
  valueClass?: string;
  theme: { [key: string]: string };
  style: { [key: string]: string };
}
