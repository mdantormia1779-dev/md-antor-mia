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
    <div className="border-b border-white/10">
      <section className="container mx-auto py-16 text-white">

        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <IoSettings className="text-2xl text-blue-400" />
          <h1 className="text-3xl md:text-4xl font-bold">My Skills</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Frontend */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-blue-400">Frontend</h2>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-2">
                <FaHtml5 className="text-orange-500" /> HTML
              </div>

              <div className="flex items-center gap-2">
                <FaCss3Alt className="text-blue-500" /> CSS
              </div>

              <div className="flex items-center gap-2">
                <FaJs className="text-yellow-400" /> JavaScript
              </div>

              <div className="flex items-center gap-2">
                <FaReact className="text-cyan-400" /> React
              </div>

              <div className="flex items-center gap-2">
                <RiNextjsFill className="text-white" /> Next.js
              </div>

              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-sky-400" /> Tailwind CSS
              </div>

            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-blue-400">Backend</h2>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-2">
                <SiMongodb className="text-green-500" /> MongoDB
              </div>

              <div className="flex items-center gap-2">
                <SiExpress className="text-gray-200" /> Express.js
              </div>

              <div className="flex items-center gap-2">
                <TbApi className="text-purple-400" /> REST API
              </div>

              <div className="flex items-center gap-2">
                <FaNode className="text-green-400" /> Node.js (Basic)
              </div>

              <div className="flex items-center gap-2">
                <SiBetterauth className="text-indigo-400" /> Authentication
              </div>

            </div>
          </div>

          {/* Tools */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-blue-400">Tools</h2>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-2">
                <FaGitAlt className="text-orange-600" /> Git & GitHub
              </div>

              <div className="flex items-center gap-2">
                <VscVscode className="text-blue-500" /> VS Code
              </div>

              <div className="flex items-center gap-2">
                <SiFigma className="text-pink-500" /> Figma
              </div>

            </div>
          </div>

        </div>
        <Education></Education>
      </section>
    </div>
  );
};

export default Skill;