import React from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiBetterauth, SiExpress, SiFigma, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import Education from "../Education/Education";

const Skill = () => {
  return (
    <div className="p-4 md:p-8 lg:p-8">
      <section className="container border-b border-white/10 mx-auto py-12 md:py-20 text-white">

        {/* Title Section */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-12">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <IoSettings className="text-2xl md:text-3xl text-blue-400 animate-spin-slow" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            My <span className="text-blue-500">Skills</span>
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">

          {/* Frontend Category */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300 shadow-xl group">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Frontend
            </h2>

            <div className="grid grid-cols-2 gap-y-5 gap-x-2 text-gray-300">
              <SkillItem icon={<FaHtml5 className="text-orange-500" />} name="HTML" />
              <SkillItem icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
              <SkillItem icon={<FaJs className="text-yellow-400" />} name="JavaScript" />
              <SkillItem icon={<FaReact className="text-cyan-400" />} name="React" />
              <SkillItem icon={<RiNextjsFill className="text-white" />} name="Next.js" />
              <SkillItem icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind" />
            </div>
          </div>

          {/* Backend Category */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-green-500/30 transition-all duration-300 shadow-xl group">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Backend
            </h2>

            <div className="grid grid-cols-1 gap-y-4 text-gray-300 font-medium">
              <SkillItem icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
              <SkillItem icon={<SiExpress className="text-gray-200" />} name="Express.js" />
              <SkillItem icon={<TbApi className="text-purple-400" />} name="REST API" />
              <SkillItem icon={<FaNode className="text-green-400" />} name="Node.js (Basic)" />
              <SkillItem icon={<SiBetterauth className="text-indigo-400" />} name="BetterAuth" />
            </div>
          </div>

          {/* Tools Category */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-pink-500/30 transition-all duration-300 shadow-xl group">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-pink-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              Tools
            </h2>

            <div className="grid grid-cols-1 gap-y-5 text-gray-300">
              <SkillItem icon={<FaGitAlt className="text-orange-600" />} name="Git & GitHub" />
              <SkillItem icon={<VscVscode className="text-blue-500" />} name="VS Code" />
              <SkillItem icon={<SiFigma className="text-pink-500" />} name="Figma Design" />
            </div>
          </div>

        </div>

        {/* Education Section Integration */}
        <div className="mt-10">
          <Education />
        </div>
      </section>
    </div>
  );
};

// Reusable Skill Item Component to keep code clean
const SkillItem = ({ icon, name }) => (
  <div className="flex items-center gap-3 group/item cursor-default">
    <div className="text-xl md:text-2xl group-hover/item:scale-125 transition-transform duration-300">
      {icon}
    </div>
    <span className="text-sm md:text-base font-medium group-hover/item:text-white transition-colors">
      {name}
    </span>
  </div>
);

export default Skill;