"use client";

import { ChartPoint } from "interfaces";
import React from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
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
          margin={{ top: 40, right: 20, bottom: 20, left: -20 }}
        >
          <CartesianGrid strokeDasharray="3" stroke="#e5e5e5" />

          <XAxis
            dataKey="x"
            tick={{ fill: "#A2A2A2", fontWeight: 500, fontSize: 12 }}
            axisLine={{ stroke: "#e5e5e5" }}
            tickLine={false}
            label={{
              value: label,
              position: "insideBottom",
              offset: -10,
              style: { fill: "#A2A2A2", fontWeight: 600, fontSize: 14 },
            }}
          />

          <YAxis
            tick={{ fill: "#A2A2A2", fontWeight: 500, fontSize: 12 }}
            axisLine={{ stroke: "#e5e5e5" }}
            tickLine={false}
            tickFormatter={(value) => `$${value}`}
            domain={[0, "dataMax + 10"]}
          />

          {/* Gradient background */}
          <defs>
            <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E78526" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#E78526" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Area and line */}
          <Area
            type="monotone"
            dataKey="y"
            stroke="#E78526"
            strokeWidth={3}
            fill="url(#colorArea)"
            dot={{ fill: "#E78526", stroke: "#E78526", strokeWidth: 4, r: 4 }}
            activeDot={{ r: 7 }}
          />

          {/* Tooltip*/}
          <Tooltip
            formatter={(value: number) => `$${value}`}
            labelFormatter={(label: number) => `Competency: ${label}`}
            contentStyle={{ fontSize: 12, borderRadius: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
