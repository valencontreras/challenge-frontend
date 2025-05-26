"use client";

import { Typography } from "components/common";
import { MetricItem } from "interfaces";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const PieChartComponent = ({
  id,
  metricsArray,
  total,
}: {
  id: string;
  metricsArray: MetricItem[];
  total?: string;
}) => {
  return (
    <div className="relative m-auto size-[170px] 2xl:size-[200px]">
      <ResponsiveContainer width="100%" height="100%" id={id}>
        <PieChart id={id}>
          <Pie
            data={metricsArray}
            cx="50%"
            cy="40%"
            innerRadius={40}
            outerRadius={65}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {metricsArray.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {total && (
        <div className="text-center absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Typography type="custom-p" className="text-[19px] font-bold">
            {total}%
          </Typography>
          <Typography type="caption" className="text-gray-50">
            Total
          </Typography>
        </div>
      )}
    </div>
  );
};
