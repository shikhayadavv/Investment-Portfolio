import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 800 },
  { month: "Feb", value: 900 },
  { month: "Mar", value: 1000 },
  { month: "Apr", value: 1100 },
  { month: "May", value: 1200 },
  { month: "Jun", value: 1300 },
];

const HistoricalPerformance = () => {
  return (
    <div className="mt-7 mx-6">
    <div className="bg-white border rounded-md shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-7 border-b-2 ">Historical Performance</h2>

      {/* Responsive Chart Container */}
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="month" stroke="#A0AEC0" />
            <YAxis stroke="#A0AEC0" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563EB"
              fill="url(#colorGradient)"
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0.2} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  );
};

export default HistoricalPerformance;
