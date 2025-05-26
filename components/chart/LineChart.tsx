"use client";

import { Typography } from "components/common";
import { ChartPoint } from "interfaces";
import React from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
} from "recharts";

export const LineChartComponent = ({
  id,
  metricsArray,
  label,
}: {
  id: string;
  metricsArray: ChartPoint[];
  label?: string;
}) => {
  return (
    <div className="relative m-auto h-[350px]">
      <ResponsiveContainer width="100%" height="100%" id={id}>
        <AreaChart
          data={metricsArray}
          margin={{ top: 40, right: 20, bottom: 20, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3" stroke="#A2A2A2" />
          <XAxis dataKey="x" color="#A2A2A2s" />
          <YAxis color="#A2A2A2" />
          <Area type="monotone" dataKey="y" stroke="#E78526" fill="#E78526" />
        </AreaChart>
      </ResponsiveContainer>
      {label && (
        <Typography
          type="body-2"
          className="text-gray-70 font-bold text-center"
        >
          {label}
        </Typography>
      )}
    </div>
  );
};
