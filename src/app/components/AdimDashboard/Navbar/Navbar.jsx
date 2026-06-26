"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { Bell } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = useSession();

  const user = session?.user;
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // লগআউটের পর লগইন পেজে পাঠান
          router.refresh(); // ক্লায়েন্ট রাউটার রিফ্রেশ করুন
        },
      },
    });
  };

  if (isPending) {
    return (
      <div className="h-16 flex items-center px-6 text-white">Loading...</div>
    );
  }

  return (
    <div className="h-16 backdrop-blur-md bg-gray-950/60 border-b border-gray-800 flex items-center justify-between px-6">
      {/* Left */}
      <h1 className="text-xl font-semibold text-white tracking-wide">
        Admin Dashboard
      </h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          {user?.image ? (
            <Image
              src={user.image}
              alt="user"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
              {user?.name?.charAt(0) || "U"}
            </div>
          )}

          <div className="hidden md:block">
            <p className="text-sm text-white font-medium">
              {user?.name || "User"}
            </p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleSignOut}
          className="bg-linear-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
