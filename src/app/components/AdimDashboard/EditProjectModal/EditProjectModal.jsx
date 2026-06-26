"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

const EditProjectModal = ({
  isOpen,
  onClose,
  editingProject,
  setEditingProject,
  handleUpdate,
  handleImageUpload,
  uploading,
}) => {
  if (!isOpen || !editingProject) return null;

  // এটি নিশ্চিত করবে যে সাবমিট করার পর যেন Modal টি বন্ধ হয়
  const onSubmit = async (e) => {
    e.preventDefault();
    await handleUpdate(e);
    // যদি handleUpdate সফলভাবে শেষ হয়, তবেই modal বন্ধ হবে
    // আপনি চাইলে এখানে একটি চেক যোগ করতে পারেন
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-gray-950 border border-white/10 p-6 rounded-3xl w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-6">Edit Project</h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="relative w-full h-40">
            <Image
              src={editingProject?.image || "/placeholder.png"}
              alt="preview"
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              e.target.files?.[0] && handleImageUpload(e.target.files[0])
            }
            className="w-full text-sm text-gray-400"
          />

          {uploading && <p className="text-indigo-400 text-sm">Uploading...</p>}

          <input
            type="text"
            value={editingProject?.name || ""}
            onChange={(e) =>
              setEditingProject({ ...editingProject, name: e.target.value })
            }
            className="w-full p-3 bg-gray-900 rounded-xl outline-none border border-white/5 focus:border-indigo-500"
            required
          />

          <input
            type="text"
            value={editingProject?.tech || ""}
            onChange={(e) =>
              setEditingProject({ ...editingProject, tech: e.target.value })
            }
            className="w-full p-3 bg-gray-900 rounded-xl outline-none border border-white/5 focus:border-indigo-500"
            placeholder="React, Node, MongoDB"
          />

          <textarea
            rows={4}
            value={editingProject?.description || ""}
            onChange={(e) =>
              setEditingProject({
                ...editingProject,
                description: e.target.value,
              })
            }
            className="w-full p-3 bg-gray-900 rounded-xl outline-none border border-white/5 focus:border-indigo-500"
          />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={async (e) => {
                await handleUpdate(e);
              }}
              className="flex-1 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectModal;
