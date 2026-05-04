import React from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section className="p-4 md:p-8 lg:p-8 text-white py-12 md:py-20 px-4">
      <div className="container mx-auto border-b border-white/10 pb-20">

        {/* Title Section */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-12">
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <FaUser className="text-2xl md:text-3xl text-blue-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Side - Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
              Frontend Developer & Digital Architect
            </h2>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Hello! I’m <span className="text-blue-400 font-bold">Antor</span>, a passionate{" "}
              <span className="text-blue-400 font-bold underline decoration-2 underline-offset-4">
                Frontend Developer
              </span> who loves building modern, responsive, and user-friendly websites.
            </p>

            <p className="text-gray-400 leading-relaxed italic">
              I specialize in HTML, CSS, JavaScript, Tailwind CSS, DaisyUI, React, Next.js, MongoDB, REST APIs, and Express.js. I enjoy turning ideas into real-life projects and continuously learning new technologies.
            </p>

            <div className="pt-4">
               <p className="text-gray-300 font-medium border-l-4 border-blue-500 pl-4 py-2 bg-blue-500/5 rounded-r-lg">
                My goal is to become a skilled Full Stack Developer and create impactful digital experiences that solve real-world problems.
              </p>
            </div>
          </div>

          {/* Right Side - Info Card */}
          <div className="lg:col-span-5 w-full max-w-lg mx-auto">
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden group">
              {/* Card Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-all duration-500"></div>

              <div className="space-y-6 relative z-10">
                {/* Name */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 border-b border-gray-800/50">
                  <div className="flex items-center gap-3 text-blue-400">
                    <FaUser size={18} />
                    <span className="text-gray-400 font-medium">Name</span>
                  </div>
                  <span className="text-white font-semibold md:text-lg">Md Antor Mia</span>
                </div>

                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 border-b border-gray-800/50">
                  <div className="flex items-center gap-3 text-blue-400">
                    <MdEmail size={18} />
                    <span className="text-gray-400 font-medium">Email</span>
                  </div>
                  <span className="text-white font-semibold break-all text-sm md:text-base">
                    mdantormia1779@gmail.com
                  </span>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 border-b border-gray-800/50">
                  <div className="flex items-center gap-3 text-blue-400">
                    <FaPhoneAlt size={18} />
                    <span className="text-gray-400 font-medium">Phone</span>
                  </div>
                  <span className="text-white font-semibold md:text-lg">01318964063</span>
                </div>

                {/* Location */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3">
                  <div className="flex items-center gap-3 text-blue-400">
                    <FaLocationDot size={18} />
                    <span className="text-gray-400 font-medium">Location</span>
                  </div>
                  <span className="text-white font-semibold md:text-lg tracking-tight">
                    Gaibandha, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;