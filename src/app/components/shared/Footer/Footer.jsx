import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white mt-16">

      <div className="container mx-auto py-10 px-4 p-4 md:p-8 lg:p-8">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-blue-400 mb-3">
              Md Antor Mia
            </h2>
            <p className="text-gray-400 leading-relaxed">
              A passionate Frontend Developer focused on building modern,
              responsive and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-blue-400">
              Quick Links
            </h2>

            <ul className="space-y-2 text-gray-400">

              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/project" className="hover:text-blue-400">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-blue-400">
              Contact
            </h2>

            <a
              href="mailto:mdantormia1779@gmail.com"
              className="text-gray-400 flex items-center gap-2 hover:text-blue-400"
            >
              <FaEnvelope /> mdantormia1779@gmail.com
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-xl">

              <a
                href="https://github.com/mdantormia1779-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/md-antor-mia-antor/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/md.antormia.1779"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaFacebook />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} All Rights Reserved | Built with ❤️ by Antor
        </div>

      </div>
    </footer>
  );
};

export default Footer;