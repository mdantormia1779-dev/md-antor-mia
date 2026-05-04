"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_jul8r5d',
      'template_f5b9s9v',
      form.current, 
      'UEaKznhskrLFnLVpP'
    )
    .then((result) => {
        alert("Message Sent Successfully! ✅ I'll get back to you soon.");
        e.target.reset();
    }, (error) => {
        alert("Oops! Something went wrong. ❌ Please try again later.");
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <section className="min-h-screen text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-950">
      {/* Background Glows - Responsive sizes */}
      <div className="absolute top-10 right-0 w-64 md:w-80 h-64 md:h-80 bg-indigo-600/10 blur-[100px] md:blur-[130px] rounded-full -z-10"></div>
      <div className="absolute bottom-5 left-0 w-64 md:w-80 h-64 md:h-80 bg-purple-600/10 blur-[100px] md:blur-[130px] rounded-full -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-widest uppercase text-xs md:text-sm mb-2">Connect</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold italic bg-clip-text text-transparent bg-linear-to-r from-white via-gray-300 to-gray-600">
            Lets Create Together
          </h1>
          <div className="h-1 w-16 md:w-20 bg-indigo-500 mx-auto mt-4 rounded-full shadow-lg shadow-indigo-500/50"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-indigo-300">Contact Information</h3>
              <p className="text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0 text-sm md:text-base">
                Im always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              </p>
            </div>

            <div className="space-y-5 max-w-md mx-auto lg:mx-0">
              {/* Email Card */}
              <div className="flex flex-col sm:flex-row items-center gap-4 group bg-gray-900/60 p-5 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={22} />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Email Me</p>
                  <p className="text-sm md:text-lg font-medium text-gray-100 break-all">mdantormia1779@gmail.com</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex flex-col sm:flex-row items-center gap-4 group bg-gray-900/60 p-5 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt size={22} />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-sm md:text-lg font-medium text-gray-100">Gaibandha, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Profile Section */}
            <div className="pt-8 border-t border-gray-800 max-w-md mx-auto lg:mx-0">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-6 font-semibold">Social Profiles</p>
              <div className="flex justify-center lg:justify-start gap-6 md:gap-8">
                {[
                  { icon: FaLinkedin, color: "hover:text-indigo-400", link: "#" },
                  { icon: FaGithub, color: "hover:text-white", link: "#" },
                  { icon: FaFacebook, color: "hover:text-blue-500", link: "#" }
                ].map((social, index) => (
                  <a key={index} href={social.link} className={`text-gray-500 ${social.color} hover:scale-125 transition-all duration-300`}>
                    <social.icon size={26} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-800 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl relative">
            <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    name="from_name"
                    type="text" 
                    required
                    placeholder="Your Name"
                    className="w-full bg-gray-950/60 border border-gray-800 rounded-lg md:rounded-xl px-4 py-3 md:py-3.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm md:text-base placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    name="reply_to"
                    type="email" 
                    required
                    placeholder="Email Address"
                    className="w-full bg-gray-950/60 border border-gray-800 rounded-lg md:rounded-xl px-4 py-3 md:py-3.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm md:text-base placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest ml-1">Subject</label>
                <input 
                  name="subject"
                  type="text" 
                  required
                  placeholder="Subject"
                  className="w-full bg-gray-950/60 border border-gray-800 rounded-lg md:rounded-xl px-4 py-3 md:py-3.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm md:text-base placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  name="message"
                  rows="4"
                  required
                  placeholder="Your message here..."
                  className="w-full bg-gray-950/60 border border-gray-800 rounded-lg md:rounded-xl px-4 py-3 md:py-3.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none text-sm md:text-base placeholder:text-gray-600"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className="w-full group flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 text-white font-bold py-3.5 md:py-4 rounded-lg md:rounded-xl transition duration-500 shadow-xl active:scale-95 text-sm md:text-base"
              >
                {isSending ? (
                  <>
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-xs md:text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;