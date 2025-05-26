import clsx from "clsx";
import { Typography } from "components/common";
import { MetricItem } from "interfaces";
import * as React from "react";
/* The code snippet you provided is defining a React functional component called `Legend`. This
component takes a prop `metricsArray` which is expected to be an array of objects conforming to the
`MetricItem` interface. */

export const Legend = ({ metricsArray }: { metricsArray: MetricItem[] }) => {
  return (
    <ul className="space-y-2.5">
      {metricsArray.map((metric, index) => (
        <li
          key={"legend-" + index}
          className={clsx("flex items-center gap-x-2.5 pb-2.5", {
            "border-b border-gray-80": index < metricsArray.length,
          })}
        >
          <div
            className="size-5 rounded-full"
            style={{ backgroundColor: metric.color }}
          />
          <Typography type="body-2" className="text-gray-70">
            {metric.value}
          </Typography>
          <Typography type="body-2" className="text-black">
            {metric.description}
          </Typography>
        </li>
      ))}
    </ul>
  );
};
