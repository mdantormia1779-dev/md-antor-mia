"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UploadCloud } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// এরর মেসেজ দেখানোর জন্য কম্পোনেন্টটি ফাংশনের বাইরে রাখা হয়েছে
const ErrorMsg = ({ msg }) => (
  <p className="text-red-400 text-xs mt-1 ml-1">{msg}</p>
);

const CreateProject = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    tech: "",
    github: "",
    live: "",
  });

  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // ইউজার টাইপ করলে এরর মেসেজ মুছে যাবে
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.image) tempErrors.image = "Image is required";
    if (!formData.name) tempErrors.name = "Project name is required";
    if (!formData.description)
      tempErrors.description = "Description is required";
    if (!formData.tech) tempErrors.tech = "Tech stack is required";
    if (!formData.github) tempErrors.github = "GitHub link is required";
    if (!formData.live) tempErrors.live = "Live URL is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleImageUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    const formDataImg = new FormData();
    formDataImg.append("image", file);

    try {
      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=852d1dae776be32b40e694f48fea8d19",
        { method: "POST", body: formDataImg },
      );
      const data = await res.json();
      if (data.success) {
        setFormData((prev) => ({ ...prev, image: data.data.url }));
        setErrors((prev) => ({ ...prev, image: "" }));
      }
    } catch (err) {
      toast.error("Image upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const finalData = {
      ...formData,
      tech: formData.tech.split(",").map((t) => t.trim()),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Project submitted successfully 🚀");

        // ✅ form reset
        setFormData({
          image: "",
          name: "",
          description: "",
          tech: "",
          github: "",
          live: "",
        });
      } else {
        toast.error(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      toast.error(error.message || "Server error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f172a] via-[#020617] to-black relative overflow-hidden py-10">
      <ToastContainer position="top-right" theme="dark" />

      {/* Glow Background */}
      <div className="absolute w-100 h-100 bg-indigo-600/20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-75 h-100 bg-purple-600/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="relative w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Create New Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Upload Box */}
          <label className="cursor-pointer group block">
            <div
              className={`relative border-2 border-dashed ${errors.image ? "border-red-500" : "border-gray-700"} group-hover:border-indigo-500 transition-all rounded-2xl p-6 text-center bg-gray-900/40`}
            >
              {formData.image ? (
                <div className="relative w-full h-44">
                  <Image
                    src={formData.image}
                    alt="preview"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3 text-gray-400 group-hover:text-indigo-400 transition">
                  <UploadCloud size={40} />
                  <p className="text-sm font-medium">Click to upload image</p>
                </div>
              )}
              {uploading && (
                <p className="text-indigo-400 mt-3 text-sm animate-pulse">
                  Uploading...
                </p>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              onChange={(e) =>
                e.target.files[0] && handleImageUpload(e.target.files[0])
              }
            />
          </label>
          {errors.image && <ErrorMsg msg={errors.image} />}

          {/* Form Fields */}
          {["name", "description", "tech", "github", "live"].map((field) => (
            <div key={field}>
              {field === "description" ? (
                <textarea
                  name={field}
                  placeholder="Project Description"
                  value={formData[field]}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 rounded-xl bg-gray-800/70 text-white outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <input
                  type="text"
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-800/70 text-white outline-none focus:ring-2 focus:ring-indigo-500"
                />
              )}
              {errors[field] && <ErrorMsg msg={errors[field]} />}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-[1.02] transition-all p-3 rounded-xl text-white font-semibold shadow-lg"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
