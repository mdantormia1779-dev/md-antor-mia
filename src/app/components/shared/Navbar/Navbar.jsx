"use client";
import Link from 'next/link';
import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/antor.pdf";
        link.download = "Antor_CV.pdf";
        link.click();
    };

    const list = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/project">Project</Link></li>
        <li><Link href="/contact">Contact</Link></li>
    </>;

    return (
        <div className='bg-[#020617]/80 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50'>

            <div className="navbar container mx-auto text-white">

                {/* Left */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 w-52 p-2 rounded-xl bg-[#0B1120] shadow-lg border border-white/10">
                            {list}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold tracking-wide">
                        <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            Antor
                        </span>
                    </Link>
                </div>

                {/* Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {list}
                    </ul>
                </div>

                {/* Right */}
                <div className="navbar-end">
                    <button onClick={handleDownload} className='btn bg-indigo-500 hover:bg-indigo-600 text-white border-none rounded-lg flex items-center gap-2 shadow-lg shadow-indigo-500/20'>
                        <FaDownload />
                        Download CV
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;