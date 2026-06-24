"use client";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaPaperPlane } from 'react-icons/fa';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_jul8r5d',
      'template_f5b9s9v',
      form.current, 
      'UEaKznhskrLFnLVpP'
    )
    .then(() => {
        alert("Message Sent Successfully! ✅");
        e.target.reset();
    }, () => {
        alert("Oops! Something went wrong. ❌");
    })
    .finally(() => setIsSending(false));
  };

  return (
    <section className="min-h-screen text-white py-12 md:py-20 px-4 relative overflow-hidden bg-gray-950">
      <div className="absolute top-10 right-0 w-80 h-80 bg-indigo-600/10 blur-[130px] rounded-full -z-10"></div>
      <div className="absolute bottom-5 left-0 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full -z-10"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-widest uppercase text-xs mb-2">Connect</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold italic bg-clip-text text-transparent bg-linear-to-r from-white via-gray-300 to-gray-600">
            Lets Create Together
          </h1>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8 text-center lg:text-left">
            <h3 className="text-3xl font-semibold text-indigo-300">Contact Information</h3>
            <p className="text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              Im always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            </p>

            <div className="space-y-5 max-w-md mx-auto lg:mx-0">
              <ContactCard icon={<FaEnvelope />} label="Email Me" value="mdantormia1779@gmail.com" />
              <ContactCard icon={<FaMapMarkerAlt />} label="Location" value="Gaibandha, Bangladesh" />
            </div>

            {/* Socials */}
            <div className="pt-8 border-t border-gray-800">
              <div className="flex justify-center lg:justify-start gap-8">
                {[FaLinkedin, FaGithub, FaFacebook].map((Icon, i) => (
                  <motion.a key={i} whileHover={{ y: -5 }} href="#" className="text-gray-500 hover:text-indigo-400 transition-colors">
                    <Icon size={26} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div variants={itemVariants} className="bg-gray-900/40 backdrop-blur-lg border border-gray-800 p-8 rounded-3xl shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField name="from_name" label="Full Name" placeholder="Your Name" />
                <InputField name="reply_to" label="Email Address" type="email" placeholder="Email Address" />
              </div>
              <InputField name="subject" label="Subject" placeholder="Subject" />
              <div className="space-y-2">
                <label className="text-xs text-gray-400 font-bold uppercase ml-1">Your Message</label>
                <textarea name="message" rows="4" required className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm resize-none"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition shadow-xl"
              >
                {isSending ? "Sending..." : <><span>Send Message</span> <FaPaperPlane /></>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Reusable Components
const ContactCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 bg-gray-900/60 p-5 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition">
    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-indigo-400">{icon}</div>
    <div>
      <p className="text-xs text-gray-500 uppercase font-semibold">{label}</p>
      <p className="font-medium text-gray-100">{value}</p>
    </div>
  </div>
);

const InputField = ({ name, label, type = "text", placeholder }) => (
  <div className="space-y-2">
    <label className="text-xs text-gray-400 font-bold uppercase ml-1">{label}</label>
    <input name={name} type={type} required placeholder={placeholder} className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm" />
  </div>
);

export default ContactPage;