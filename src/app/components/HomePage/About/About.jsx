import React from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section className="text-white py-16 border-b border-white/10">
      <div className="container mx-auto">

        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <FaUser className="text-2xl text-blue-400" />
          <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left Side - Text */}
          <div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Hello! I’m <span className="text-blue-400 font-semibold">Antor</span>, a passionate{" "}
              <span className="text-blue-400 font-semibold">Frontend Developer</span> who loves building modern, responsive and user-friendly websites.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              I specialize in HTML, CSS, JavaScript, Tailwind CSS, DaisyUI, React, Next.js, MongoDB, REST APIs, and Express.js. I enjoy turning ideas into real-life projects and continuously learning new technologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My goal is to become a skilled Full Stack Developer and create impactful digital experiences that solve real-world problems.
            </p>
          </div>

          {/* Right Side - Info Card */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 shadow-lg space-y-4">

            {/* Name */}
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <div className="flex items-center gap-3 text-gray-300">
                <FaUser className="text-blue-400" />
                <span>Name</span>
              </div>
              <span className="text-white font-medium">Md Antor Mia</span>
            </div>

            {/* Email */}
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <div className="flex items-center gap-3 text-gray-300">
                <MdEmail className="text-blue-400" />
                <span>Email</span>
              </div>
              <span className="text-white font-medium break-all">
                mdantormia1779@gmail.com
              </span>
            </div>

            {/* Phone */}
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhoneAlt className="text-blue-400" />
                <span>Phone</span>
              </div>
              <span className="text-white font-medium">01318964063</span>
            </div>

            {/* Location */}
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-3 text-gray-300">
                <FaLocationDot className="text-blue-400" />
                <span>Location</span>
              </div>
              <span className="text-white font-medium">Dhaka, Bangladesh</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;