"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Banner = () => {
  // এনিমেশন ভেরিয়েন্ট
  const iconVariants = {
    hover: { y: -5, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="relative p-4 lg:p-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="py-20 container border-b border-white/10 pb-20 mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h5 className="text-gray-400 text-lg tracking-wide">Hi, Im</h5>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Antor
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              <TypeAnimation
                sequence={["Frontend Developer", 2000, "React Developer", 2000, "Next.js Developer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="text-gray-400 max-w-md leading-relaxed">
              I build modern, responsive and user-friendly websites that help businesses grow and stand out in the digital world.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-2 flex-wrap items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="/antor.pdf" download>
                  <button className="px-6 py-3 bg-linear-to-r from-indigo-500 to-cyan-500 rounded-lg text-white flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition duration-300">
                    <FaDownload /> Download CV
                  </button>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="px-6 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg flex items-center gap-2 transition duration-300">
                  <FiSend /> Hire Me
                </Link>
              </motion.div>
            </div>

            {/* SOCIAL */}
            <div className="pt-4">
              <p className="text-gray-400 mb-3">Connect with me</p>
              <div className="flex items-center gap-4">
                {[
                  { icon: FaGithub, link: "https://github.com/mdantormia1779-dev" },
                  { icon: FaLinkedin, link: "https://www.linkedin.com/in/md-antor-mia-antor/" },
                  { icon: FaFacebook, link: "https://www.facebook.com/share/17QnUSneqa/" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={i}
                      href={item.link}
                      target="_blank"
                      variants={iconVariants}
                      whileHover="hover"
                      className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-linear-to-r hover:from-indigo-500 hover:to-cyan-500 hover:text-white transition duration-300"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-70 h-70 md:w-[320px] md:h-80 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl">
                <Image src="/antor.png" alt="Antor" fill priority className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;