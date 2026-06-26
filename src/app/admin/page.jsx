import React from "react";
import Overview from "../components/AdimDashboard/Overview/Overview";
import DashboardChart from "../components/AdimDashboard/DashboardChart/DashboardChart";
import ProjectPieChart from "../components/AdimDashboard/PieChart/PieChart";

const AdminDashborad = () => {
  return (
    <div className="p-6 mb-10">
      <Overview></Overview>
      <div className="flex flex-col lg:flex-row gap-6 w-full h-50 mb-6">
        <div className="w-full lg:w-2/3 h-full">
          <DashboardChart />
        </div>
        <div className="w-full lg:w-1/3 h-full">
          <ProjectPieChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashborad;
