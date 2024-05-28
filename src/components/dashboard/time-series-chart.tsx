// src/components/Overview.js
import React, { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface TimeSeriesChartProps {
  data: Object;
}

export const TimeSeriesChart: FC<TimeSeriesChartProps> = (props) => {
  const { data } = props;
  const timeSeriesArray = Object.entries(data).map(([time, values]) => ({
    time,
    open: parseFloat(values["1. open"]),
    high: parseFloat(values["2. high"]),
    low: parseFloat(values["3. low"]),
    close: parseFloat(values["4. close"]),
    volume: parseInt(values["5. volume"], 10),
  }));

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={timeSeriesArray}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="open" stroke="#8884d8" />
          <Line type="monotone" dataKey="close" stroke="#82ca9d" />
          <Line type="monotone" dataKey="high" stroke="#ffc658" />
          <Line type="monotone" dataKey="low" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
