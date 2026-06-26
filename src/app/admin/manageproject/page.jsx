"use client";

import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import EditProjectModal from "@/app/components/AdimDashboard/EditProjectModal/EditProjectModal";
import DeleteProjectModal from "@/app/components/AdimDashboard/DeleteProjectModal/DeleteProjectModal";

const ManageProject = () => {
  const [projects, setProjects] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
        const data = await res.json();
        if (data.success) setProjects(data.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchProjects();
  }, []);

  const handleImageUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    const formDataImg = new FormData();
    formDataImg.append("image", file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formDataImg,
        },
      );
      const data = await res.json();

      if (data.success) {
        setEditingProject((prev) => ({ ...prev, image: data.data.url }));
        toast.success("Image uploaded!");
      }
    } catch {
      toast.error("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const { _id, ...rest } = editingProject;

      // ১. টেকনোলজিকে অ্যারেতে কনভার্ট করুন (যাতে ডাটাবেসে এবং UI-তে একই থাকে)
      const techArray =
        typeof rest.tech === "string"
          ? rest.tech.split(",").map((t) => t.trim())
          : rest.tech;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/${_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...rest, tech: techArray }),
        },
      );

      const data = await res.json();

      if (data.success) {
        // ২. সরাসরি স্টেট আপডেট করুন
        setProjects((prev) =>
          prev.map((p) =>
            p._id === _id ? { ...p, ...rest, tech: techArray } : p,
          ),
        );

        toast.success("Updated successfully 🚀");

        // ৩. মোডাল বন্ধ করুন এবং স্টেট ক্লিন করুন
        setIsEditModalOpen(false);
        setEditingProject(null);
      } else {
        toast.error(data.message || "Update failed");
      }
    } catch (err) {
      toast.error("Update failed ❌");
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/${projectToDelete._id}`,
        {
          method: "DELETE",
        },
      );
      const data = await res.json();
      if (data.success) {
        setProjects((prev) =>
          prev.filter((p) => p._id !== projectToDelete._id),
        );
        toast.success("Deleted successfully!");
        setIsDeleteModalOpen(false);
      }
    } catch {
      toast.error("Delete failed!");
    }
  };

  return (
    <div className="min-h-screen bg-black p-6 md:p-10 text-white">
      <ToastContainer theme="dark" />
      <h2 className="text-3xl font-bold mb-10 text-center">Manage Projects</h2>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((p) => (
            <div
              key={p._id}
              className="bg-gray-900/50 border border-white/10 rounded-3xl p-5 hover:border-indigo-500/50 transition-all flex flex-col gap-4"
            >
              <div className="relative w-full h-40">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-bold text-xl">{p.name}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded-md border border-indigo-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => {
                    setEditingProject({ ...p, tech: p.tech.join(", ") });
                    setIsEditModalOpen(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition"
                >
                  <Edit size={16} /> Edit
                </button>
                <button
                  onClick={() => {
                    setProjectToDelete(p);
                    setIsDeleteModalOpen(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-xl text-sm transition"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <p className="text-xl font-semibold">No Projects Found</p>
        </div>
      )}

      <EditProjectModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        editingProject={editingProject}
        setEditingProject={setEditingProject}
        handleUpdate={handleUpdate}
        handleImageUpload={handleImageUpload}
        uploading={uploading}
      />

      <DeleteProjectModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        project={projectToDelete}
      />
    </div>
  );
};

export default ManageProject;
