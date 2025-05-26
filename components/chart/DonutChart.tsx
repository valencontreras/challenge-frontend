/**
 * The code defines a React functional component `DonutChart` that renders a donut chart based on
 * provided metrics and styling properties.
 * @property {number} percentage - The `percentage` property in the `Metric` type represents the
 * percentage value of a particular metric in the donut chart. It indicates what portion of the donut
 * circle should be filled with a specific color corresponding to that metric.
 * @property {string} color - The `color` property in the `Metric` type represents the color of a
 * specific segment in the donut chart. It is a string value that defines the color to be used for that
 * segment in the chart.
 */
import * as React from "react";

export type Metric = {
  percentage: number;
  color: string;
};

interface DonutsProps {
  metricsArray: Metric[];
  size: number; // Optional size with default value
  strokeWidth: number; // Edge thickness
}

export const DonutChart: React.FC<DonutsProps> = ({
  metricsArray,
  size,
  strokeWidth,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let startAngle = -90; // Start from the top

  return (
    <div className="relative">
      {/* SVG Donut Chart */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* gray bg */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#E0E0E0"
          fill="transparent"
        />

        {metricsArray.map(({ percentage, color }, index) => {
          const dashOffset = circumference * ((100 - percentage) / 100);
          const segment = (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              stroke={color}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              transform={`rotate(${startAngle} ${size / 2} ${size / 2})`}
            />
          );
          startAngle += (percentage / 100) * 360;
          return segment;
        })}
      </svg>
      {/* Label */}
      <span className="absolute z-10 top-[35%] right-[25%] text-xs text-black font-bold">
        {metricsArray[0].percentage}%
      </span>
    </div>
  );
};
