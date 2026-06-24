"use client";

import React, { useEffect, useState } from "react";
import { FaFolderOpen, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Card from "../Card.jsx/Card";
import Link from "next/link";

const Project = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="p-4 md:p-8 lg:p-8 text-white py-12 md:py-20 px-4">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto border-b border-white/10 pb-20"
      >
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
          
          <motion.div variants={itemVariants} className="flex items-center gap-4 group">
            <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
              <FaFolderOpen className="text-2xl md:text-3xl text-blue-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              My <span className="text-blue-500">Projects</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="/project"
              className="group flex items-center gap-2 px-6 py-3 border border-blue-400/50 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 active:scale-95 shadow-lg shadow-blue-500/10"
            >
              View All Projects
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <motion.div variants={itemVariants} className="w-full">
          <Card projectData={projectData} limit={3} />
        </motion.div>

        {/* Mobile-only Bottom Link */}
        <motion.div variants={itemVariants} className="mt-10 flex justify-center sm:hidden">
            <Link href="/project" className="text-blue-400 text-sm font-medium border-b border-blue-400/30 pb-1 hover:text-white transition-colors">
                Explore more projects &rarr;
            </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Project;