"use client";

import React, { useEffect, useState } from "react";
import { Folder, Eye, Download } from "lucide-react";

const Overview = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalVisits: 0,
    cvDownloads: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stats`);
        const data = await res.json();
        
        if (data.success) {
          setStats({
            totalProjects: data.totalProjects,
            totalVisits: data.totalVisits,
            cvDownloads: data.cvDownloads,
          });
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statItems = [
    {
      title: "Total Projects",
      value: loading ? "..." : stats.totalProjects.toLocaleString(),
      icon: <Folder size={22} />,
    },
    {
      title: "Total Visits",
      value: loading ? "..." : stats.totalVisits.toLocaleString(),
      icon: <Eye size={22} />,
    },
    {
      title: "Resume Downloaded",
      value: loading ? "..." : stats.cvDownloads.toLocaleString(),
      icon: <Download size={22} />,
    },
  ];

  return (
    <div className="space-y-6 mb-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-white">
        Overview Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-md flex items-center justify-between hover:scale-[1.02] transition duration-200"
          >
            <div>
              <p className="text-gray-400 text-sm">{item.title}</p>
              <h2 className="text-2xl font-bold text-white">
                {item.value}
              </h2>
            </div>

            <div className="bg-gray-800 p-3 rounded-full text-white">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;