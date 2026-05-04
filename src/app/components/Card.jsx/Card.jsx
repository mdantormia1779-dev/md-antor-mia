"use client";

import Image from "next/image";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ projectData = [], limit }) => {
  const data = limit ? projectData.slice(0, limit) : projectData;

  return (
    <div className="container md:p-6 lg:p-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {data.map((project) => (
        <div
          key={project.id}
          className="group bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
        >

          {/* IMAGE */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6">

            {/* TITLE */}
            <h2 className="text-xl font-semibold text-white mb-2">
              {project.name}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm mb-4">
              {project.description}
            </p>

            {/* TECH BADGES */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700 
                  hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500 transition"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4 text-gray-300">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-400 transition"
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
};

export default Card;