"use client";

import React, { useEffect, useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import Card from "../Card.jsx/Card";
import Link from "next/link";

const Project = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <section className="text-white py-16">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">

          <div className="flex items-center gap-3">
            <FaFolderOpen className="text-2xl text-blue-400" />
            <h1 className="text-3xl md:text-4xl font-bold">
              My Projects
            </h1>
          </div>

          <Link
            href="/project"
            className="px-5 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition"
          >
            View All Projects
          </Link>

        </div>

        {/* শুধু data pass */}
        <Card projectData={projectData} limit={3} />

      </div>
    </section>
  );
};

export default Project;