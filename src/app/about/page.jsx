import React from "react";
import { FaUser, FaCode, FaLaptopCode, FaRocket, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion"; // Jora animation er jonno

const AboutPage = () => {
  const cards = [
    {
      icon: <FaUser className="text-indigo-400" />,
      title: "Who I Am",
      desc: "A dedicated Frontend Developer based in Bangladesh, focused on crafting clean and intuitive UI/UX.",
      color: "hover:shadow-indigo-500/20",
    },
    {
      icon: <FaGraduationCap className="text-cyan-400" />,
      title: "Education",
      desc: "Currently pursuing a Diploma in Computer Science & Technology at Habiganj Polytechnic Institute.",
      color: "hover:shadow-cyan-500/20",
    },
    {
      icon: <FaLaptopCode className="text-purple-400" />,
      title: "Tech Stack",
      desc: "Expertise in React, Next.js, Tailwind CSS, and exploring Backend with MongoDB.",
      color: "hover:shadow-purple-500/20",
    },
    {
      icon: <FaRocket className="text-pink-400" />,
      title: "The Goal",
      desc: "Aiming to bridge the gap between design and functionality as a Full-Stack Engineer.",
      color: "hover:shadow-pink-500/20",
    },
  ];

  return (
    <section className="relative text-white p-4 md:p-8 lg:p-8 py-20 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full from-indigo-900/20 via-transparent to-transparent -z-10" />

      <div className="container mx-auto">
        {/* TITLE SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-indigo-400 font-semibold mb-2">Introduction</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-white via-gray-400 to-gray-600">
            About Me
          </h1>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
              Hi, Im <span className="text-indigo-400 font-bold">Antor</span>. 
              I specialize in building modern, high-performance web applications. 
              My journey is driven by a deep curiosity for clean code and a passion for 
              transforming complex problems into elegant digital solutions
            </p>
          </div>
        </div>

        {/* INTERACTIVE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group bg-gray-900/50 border border-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:bg-gray-800/60 ${card.color} hover:shadow-2xl`}
            >
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FINAL CALL TO ACTION / QUOTE */}
        <div className="mt-20 text-center">
           <div className="inline-block px-6 py-2 rounded-full border border-gray-800 bg-gray-900/20 text-gray-400 text-sm mb-4">
              Currently working on: <span className="text-indigo-300">Mango Book Borrowing Platform</span>
           </div>
           <p className="text-gray-500 font-medium tracking-wide">
             LETS BUILD SOMETHING EXTRAORDINARY 🚀
           </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;