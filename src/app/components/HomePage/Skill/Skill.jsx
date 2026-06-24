"use client";

import React from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiBetterauth, SiExpress, SiFigma, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion"; // Framer motion import
import Education from "../Education/Education";

const Skill = () => {
  // এনিমেশন সেটিংস
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="p-4 md:p-8 lg:p-8">
      <section className="container border-b border-white/10 mx-auto py-12 md:py-20 text-white">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-start gap-3 mb-12"
        >
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <IoSettings className="text-2xl md:text-3xl text-blue-400 animate-spin-slow" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            My <span className="text-blue-500">Skills</span>
          </h1>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          <SkillCard title="Frontend" color="blue" variants={cardVariants}>
            <SkillItem icon={<FaHtml5 className="text-orange-500" />} name="HTML" />
            <SkillItem icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
            <SkillItem icon={<FaJs className="text-yellow-400" />} name="JavaScript" />
            <SkillItem icon={<FaReact className="text-cyan-400" />} name="React" />
            <SkillItem icon={<RiNextjsFill className="text-white" />} name="Next.js" />
            <SkillItem icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind" />
          </SkillCard>

          <SkillCard title="Backend" color="green" variants={cardVariants}>
            <SkillItem icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
            <SkillItem icon={<SiExpress className="text-gray-200" />} name="Express.js" />
            <SkillItem icon={<TbApi className="text-purple-400" />} name="REST API" />
            <SkillItem icon={<FaNode className="text-green-400" />} name="Node.js (Basic)" />
            <SkillItem icon={<SiBetterauth className="text-indigo-400" />} name="BetterAuth" />
          </SkillCard>

          <SkillCard title="Tools" color="pink" variants={cardVariants}>
            <SkillItem icon={<FaGitAlt className="text-orange-600" />} name="Git & GitHub" />
            <SkillItem icon={<VscVscode className="text-blue-500" />} name="VS Code" />
            <SkillItem icon={<SiFigma className="text-pink-500" />} name="Figma Design" />
          </SkillCard>
        </motion.div>

        <div className="mt-10">
          <Education />
        </div>
      </section>
    </div>
  );
};

// নতুন কার্ড কম্পোনেন্ট যা কোড আরও ক্লিন করবে
const SkillCard = ({ title, color, children, variants }) => (
  <motion.div 
    variants={variants}
    className={`bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-${color}-500/30 transition-all duration-300 shadow-xl group`}
  >
    <h2 className={`text-xl md:text-2xl font-bold mb-6 text-${color}-400 flex items-center gap-2`}>
      <span className={`w-2 h-2 bg-${color}-500 rounded-full`}></span>
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-gray-300">
      {children}
    </div>
  </motion.div>
);

const SkillItem = ({ icon, name }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex items-center gap-3 cursor-default"
  >
    <div className="text-xl md:text-2xl">{icon}</div>
    <span className="text-sm md:text-base font-medium">{name}</span>
  </motion.div>
);

export default Skill;