"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#fb923c", "#3b82f6", "#22c55e"];

const ProjectPieChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${API_URL}/api/stats`);
        
        if (!res.ok) throw new Error("Data fetching failed");
        
        const result = await res.json();

        if (result?.success) {
          setChartData([
            { name: "Projects", value: result.totalProjects || 0 },
            { name: "Visits", value: result.totalVisits || 0 },
            { name: "Downloads", value: result.cvDownloads || 0 },
          ]);
        }
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("তথ্য লোড করা সম্ভব হয়নি।");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="h-60 flex items-center justify-center text-gray-400">Loading charts...</div>;
  if (error) return <div className="h-60 flex items-center justify-center text-red-400">{error}</div>;

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center gap-6 w-full p-6 rounded-2xl shadow-lg border border-gray-800">
      
      {/* CHART SECTION */}
      <div className="w-full h-50">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              cornerRadius={8}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: "#1f2937", borderRadius: "8px", border: "none" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND SECTION */}
      <div className="flex flex-wrap justify-center w-full gap-4">
        {chartData.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-800/50">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
            <span className="text-sm text-gray-300 font-medium">
              {entry.name}: <span className="text-white font-bold">{entry.value}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPieChart;