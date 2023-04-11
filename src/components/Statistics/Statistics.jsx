import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Assignment 1",
      assignment: 40,
      quiczmark: 40,
      total: 80,
    },
    {
      name: "Assignment 2",
      assignment: 30,
      quiczmark: 30,
      total: 60,
    },
    {
      name: "Assignment 3",
      assignment: 40,
      quiczmark: 30,
      total: 50,
    },
    {
      name: "Assignment 4",
      assignment: 20,
      quiczmark: 20,
      total: 40,
    },
    {
      name: "Assignment 5",
      assignment: 25,
      quiczmark: 25,
      total: 50,
    },
    {
      name: "Assignment 6",
      assignment: 20,
      quiczmark: 38,
      total: 58,
    },
    {
      name: "Assignment 7",
      assignment: 30,
      quiczmark: 43,
      total: 73,
    },
  ];

  return (
    <div className="flex justify-center items-center mt-16">
      <AreaChart width={1000} height={600} data={data}>
        <CartesianGrid strokeDasharray="3 3 " />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend/>
        <Area  type="monotone" dataKey="assignment" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;
