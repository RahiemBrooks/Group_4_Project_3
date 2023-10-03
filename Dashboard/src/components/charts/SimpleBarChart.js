import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const SimpleBarChart = ({ data }) => {

  const colors = [
    "#e47b64",
    "#fa7a38",
    "#c60e17",
    "#801009",
    "#d1a0a7",
    "#408e1b",
    "#b7debc",
    "#27e9d0",
    "#c862e3",
    "#cbfa32",
    "#b7de9e",
    "#748953",
    "#6c9092",
    "#281f72",
    "#c93099",
    "#d2b23a",
    "#9387ae",
    "#0ff245",
    "#d14dfa",
    "#46d241",
    "#7cf65a",
  ];
  return (
    <div className="!h-[200vh] ">
      <div className="text-lg text-center mb-5 font-bold text-primary pt-5">
        Data scientist jobs by industry
      </div>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 1000,
          }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="industry"
          interval={0}
          angle={90}
          textAnchor="start"
        />
        <YAxis />
        <Tooltip />
        <Bar dataKey="employment_rate">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
