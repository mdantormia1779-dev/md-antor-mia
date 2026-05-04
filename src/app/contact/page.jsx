"use client"; // Next.js Client Component directives must be at the very top

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); // To show loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Loading start

    // Connecting with your EmailJS credentials
    emailjs.sendForm(
      'service_jul8r5d',    // Your Service ID
      'template_f5b9s9v',   // Your Template ID
      form.current, 
      'UEaKznhskrLFnLVpP'    // Your Public Key
    )
    .then((result) => {
        console.log("Success!", result.text);
        alert("Message Sent Successfully! ✅ I'll get back to you soon.");
        e.target.reset(); // Clears the form
    }, (error) => {
        console.log("Failed...", error.text);
        alert("Oops! Something went wrong. ❌ Please try again later.");
    })
    .finally(() => {
        setIsSending(false); // Loading stop
    });
  };

  return (
    <section className="min-h-screen text-white py-16 px-6 relative overflow-hidden bg-gray-950">
      {/* Background Decoration Glows */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-indigo-600/10 blur-[130px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-2">Connect</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold italic bg-clip-text text-transparent bg-linear-to-r from-white via-gray-300 to-gray-600">
            Lets Create Together
          </h1>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full shadow-lg shadow-indigo-500/50"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info & Text */}
          <div className="space-y-8 lg:pr-8">
            <h3 className="text-2xl font-semibold text-indigo-300">Contact Information</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Im always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Fill out the form or reach out via social platforms.
            </p>

            <div className="space-y-7">
              {/* Email Card */}
              <div className="flex items-center gap-5 group bg-gray-900/60 p-5 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition duration-300 shadow-xl">
                <div className="w-14 h-14 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Email Me</p>
                  <p className="text-lg font-medium text-gray-100">mdantormia1779@gmial.com</p> {/* Change to your real email */}
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-5 group bg-gray-900/60 p-5 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition duration-300 shadow-xl">
                <div className="w-14 h-14 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-lg font-medium text-gray-100">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Profile Section */}
            <div className="pt-8 border-t border-gray-800 max-w-sm">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-6 font-semibold">Social Profiles</p>
              <div className="flex gap-6">
                {[
                  { icon: FaLinkedin, color: "hover:text-indigo-400", link: "#" },
                  { icon: FaGithub, color: "hover:text-white", link: "#" },
                  { icon: FaFacebook, color: "hover:text-blue-500", link: "#" }
                ].map((social, index) => (
                  <a key={index} href={social.link} className={`text-gray-500 ${social.color} hover:scale-125 transition-all duration-300`}>
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Professional Contact Form */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl relative">
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-indigo-600/10 blur-[60px] rounded-full -z-10"></div>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    name="from_name" // Must match EmailJS template variable
                    type="text" 
                    required
                    placeholder="Your Name"
                    className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-5 py-3.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    name="reply_to"
                    type="email" 
                    required
                    placeholder="Your Email Adress"
                    className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-5 py-3.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-widest ml-1">Subject</label>
                <input 
                  name="subject"
                  type="text" 
                  required
                  placeholder="What is this regarding?"
                  className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-5 py-3.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  name="message"
                  rows="5"
                  required
                  placeholder="Describe your project or query..."
                  className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-5 py-3.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none placeholder:text-gray-600"
                ></textarea>
              </div>

              {/* Submit Button with Loading State */}
              <button 
                type="submit"
                disabled={isSending}
                className="w-full group flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 text-white font-bold py-4 rounded-xl transition duration-500 shadow-xl shadow-indigo-500/20 active:scale-95"
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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