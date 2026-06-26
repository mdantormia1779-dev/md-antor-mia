"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // এটি নিশ্চিত করুন ইন্সটল করা আছে
import Card from "../components/Card.jsx/Card";

const ProjectPage = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
        const data = await res.json();

        // যদি আপনার API রেসপন্স {success: true, data: [...]} ফরম্যাটে হয়
        if (data.success) {
          setProjectData(data.data);
        } else {
          setProjectData(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
      >
        All Projects
      </motion.h1>

      {/* Cards Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Card projectData={projectData} />
      </motion.div>
    </div>
  );
};

export default ProjectPage;
