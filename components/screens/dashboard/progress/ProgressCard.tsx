import { DonutChart } from "components/chart";
import { Icon } from "components/common/icon";
import { Typography } from "components/common/typography";
import Icons from "const/icons";
import { MetricItem } from "interfaces";
import React from "react";

interface ProgressCardProps {
  data: MetricItem[];
  header: string[];
  lowColor?: string;
  highColor?: string;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  data,
  header,
  highColor = "#41A52D",
  lowColor = "#E31746",
}) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-1 mb-2 border-b-2 border-primary">
        {header.map((head) => (
          <div key={`table-header-${head}`} className="px-1">
            <Typography type="body-1" className="text-gray-40 font-bold">
              {head}
            </Typography>
          </div>
        ))}
      </div>
      <ul>
        {data.map((item, index) => (
          <li
            key={`body-${index}`}
            className="flex items-center justify-between pb-3 border-b border-gray-40 mb-3 pl-4 pr-5"
          >
            <Typography
              type="body-2"
              className="text-black max-w-[313px] font-semibold"
            >
              {item.description}
            </Typography>
            <div>
              {item.value === 100 ? (
                <Icon src={Icons.trophy} className="!size-[35px]" />
              ) : (
                <DonutChart
                  metricsArray={[
                    {
                      color: item.value > 50 ? highColor : lowColor,
                      percentage: item.value,
                    },
                  ]}
                  size={54}
                  strokeWidth={6}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
