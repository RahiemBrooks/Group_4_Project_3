import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ScatterChartWithCells = ({data}) => {
  return (
    <div className="h-[50vh]">
      <div className="text-lg text-center mb-5 font-bold text-primary pt-5">
        Salary estimates showing mean salary,25th percentile and 75th percentile per state
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
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mean_salary" fill="rgb(255, 0, 0)" minPointSize={5}>
            {/* <LabelList dataKey="name" content={renderCustomizedLabel} /> */}
          </Bar>
          <Bar dataKey="25th_percentile_salary" fill="#000080" minPointSize={10} />
          <Bar dataKey="75th_percentile_salary" fill="#0ff245" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChartWithCells;
