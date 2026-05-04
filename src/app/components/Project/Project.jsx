"use client";

import React, { useEffect, useState } from "react";
import { FaFolderOpen, FaArrowRight } from "react-icons/fa";
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
    <section className="p-4 md:p-8 lg:p-8 text-white py-12 md:py-20  px-4">
      <div className="container mx-auto border-b border-white/10 pb-20">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Title with Icon */}
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
              <FaFolderOpen className="text-2xl md:text-3xl text-blue-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              My <span className="text-blue-500">Projects</span>
            </h1>
          </div>

          {/* View All Button */}
          <Link
            href="/project"
            className="group flex items-center gap-2 px-6 py-3 border border-blue-400/50 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 active:scale-95 shadow-lg shadow-blue-500/10"
          >
            View All Projects
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="w-full">
          {/* 
            Card component-er bhitore jodi grid thake, 
            tobe shekhane grid-cols-1 md:grid-cols-2 lg:grid-cols-3 thaka dorkar.
          */}
          <Card projectData={projectData} limit={3} />
        </div>

        {/* Mobile-only Bottom Link (Optional: Jate scroll korar por nicheo button thake) */}
        <div className="mt-10 flex justify-center sm:hidden">
            <Link href="/project" className="text-blue-400 text-sm font-medium border-b border-blue-400/30 pb-1">
                Explore more projects &rarr;
            </Link>
        </div>

      </div>
    </section>
  );
};

export default Project;