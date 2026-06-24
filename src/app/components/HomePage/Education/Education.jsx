"use client";

import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="text-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <FaGraduationCap className="text-3xl text-blue-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Education</h1>
        </div>

        {/* Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:border-blue-500/30 transition-all duration-300"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-400">
            Diploma in Computer Science & Technology
          </h2>

          <p className="text-gray-300 mt-2 font-medium">
            Habiganj Polytechnic Institute <span className="text-blue-500/80">• Ongoing</span>
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed border-l-2 border-gray-700 pl-4">
            I am currently pursuing my Diploma in Computer Science & Technology. 
            This journey is helping me build a strong foundation in programming, 
            data structures, and modern web development technologies like React and Next.js.
          </p>

          {/* Timeline style info */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800/40 p-3 rounded-lg text-sm border border-gray-700/50">
              <span className="block text-blue-400 font-bold mb-1">Duration</span>
              <span>2024 - Present</span>
            </div>
            <div className="bg-gray-800/40 p-3 rounded-lg text-sm border border-gray-700/50">
              <span className="block text-blue-400 font-bold mb-1">Focus</span>
              <span>Software Engineering Basics</span>
            </div>
            <div className="bg-gray-800/40 p-3 rounded-lg text-sm border border-gray-700/50">
              <span className="block text-blue-400 font-bold mb-1">Goal</span>
              <span>Full Stack Development</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;