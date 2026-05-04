import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="text-white py-16">
      <div>

        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <FaGraduationCap className="text-2xl text-blue-400" />
          <h1 className="text-3xl md:text-4xl font-bold">
            Education
          </h1>
        </div>

        {/* Card */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg">

          <h2 className="text-xl md:text-2xl font-semibold text-blue-400">
            Diploma in Computer Science & Technology
          </h2>

          <p className="text-gray-300 mt-2">
            Habiganj Polytechnic Institute (Ongoing)
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I am currently studying Diploma in Computer Science & Technology.
            I am learning programming fundamentals, web development, data structures,
            and modern technologies like React, Next.js, and backend development.
          </p>

          {/* Timeline style info */}
          <div className="mt-6 space-y-2 text-gray-300">

            <p>
              📅 Duration: 2024 - Present
            </p>

            <p>
              🎯 Focus: Web Development, Programming, Software Engineering Basics
            </p>

            <p>
              💻 Goal: Become a Full Stack Developer
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;