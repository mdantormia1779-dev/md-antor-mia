"use client";

import React from "react";
import { AlertTriangle, X } from "lucide-react";

const DeleteProjectModal = ({
  isOpen,
  onClose,
  onConfirm,
  project,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-gray-950 border border-white/10 p-6 rounded-3xl w-full max-w-md relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
        >
          <X />
        </button>

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="bg-red-500/10 p-4 rounded-full">
            <AlertTriangle className="text-red-500" size={28} />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-bold text-center mb-2">
          Delete Project
        </h2>

        {/* MESSAGE */}
        <p className="text-gray-400 text-center mb-6 text-sm">
          Are you sure you want to delete{" "}
          <span className="text-white font-semibold">
            {project.name}
          </span>
          ? This action cannot be undone.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-2 bg-red-600 hover:bg-red-700 rounded-xl transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProjectModal;