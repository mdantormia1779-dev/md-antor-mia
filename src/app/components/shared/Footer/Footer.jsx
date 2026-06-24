"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; // এনিমেশনের জন্য

const Footer = () => {
  return (
    <footer className="text-white border-t border-gray-800 bg-gray-950/50">
      <div className="container mx-auto py-16 px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">

          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
              Md Antor Mia
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              A passionate Frontend Developer focused on building modern, responsive, 
              and user-friendly web applications that bring ideas to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-6 text-white border-l-4 border-blue-500 pl-3">
              Quick Links
            </h2>
            <ul className="space-y-3 text-gray-400">
              {['Home', 'About', 'Project', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-blue-400 hover:translate-x-2 transition-all block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold mb-6 text-white border-l-4 border-blue-500 pl-3">
              Get In Touch
            </h2>
            <a href="mailto:mdantormia1779@gmail.com" className="text-gray-400 flex items-center gap-3 hover:text-blue-400 transition mb-6">
              <div className="p-2 bg-gray-900 rounded-lg"><FaEnvelope /></div>
              mdantormia1779@gmail.com
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl">
              {[
                { icon: FaGithub, link: "https://github.com/mdantormia1779-dev" },
                { icon: FaLinkedin, link: "https://www.linkedin.com/in/md-antor-mia-antor/" },
                { icon: FaFacebook, link: "https://www.facebook.com/md.antormia.1779" }
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -5, color: "#60a5fa" }}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-600 mt-16 border-t border-gray-900 pt-8 text-sm"
        >
          <p>© {new Date().getFullYear()} Md Antor Mia. All Rights Reserved.</p>
          <p className="mt-2 text-xs opacity-70">Built with React, Next.js & Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;