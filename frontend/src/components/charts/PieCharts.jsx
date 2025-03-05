import { PieChart, Pie, Cell, Legend } from "recharts";

const PieCharts = ({ data }) => {
  return (
    <PieChart width={350} height={350}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="asset"
        outerRadius={110}
        innerRadius={70}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        stroke="white"
        strokeWidth={2}
        animationDuration={1000}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>

      <Legend verticalAlign="bottom" align="center" iconType="circle" />
    </PieChart>
  );
};

export default PieCharts;
