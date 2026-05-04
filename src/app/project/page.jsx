"use client";

import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx/Card";

const ProjectPage = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        All Projects
      </h1>

      {/* Cards */}
      <Card projectData={projectData} />

    </div>
  );
};

export default ProjectPage;