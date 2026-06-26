"use client";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// কাস্টম টুলটিপ ডিজাইন
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-indigo-100 shadow-xl rounded-lg">
        <p className="text-sm font-bold text-gray-700">{label}</p>
        <p className="text-sm text-indigo-600 font-semibold">
          Count: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const DashboardChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${API_URL}/api/stats`);
        const result = await res.json();

        if (result.success) {
          const chartData = [
            { name: "Projects", value: result.totalProjects },
            { name: "Visits", value: result.totalVisits },
            { name: "Downloads", value: result.cvDownloads },
          ];
          setData(chartData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="flex items-center justify-center animate-pulse text-indigo-500">Loading Stats...</div>;

  return (
    <div className="w-full p-6 bg-gray-900 text-white rounded-2xl shadow-sm border">
      <h2 className="text-xl text-white font-bold mb-6">Overview Statistics</h2>
      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#6b7280", fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#6b7280", fontSize: 12 }} 
            />
            <Tooltip content={<CustomTooltip />} />
            
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4f46e5"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;