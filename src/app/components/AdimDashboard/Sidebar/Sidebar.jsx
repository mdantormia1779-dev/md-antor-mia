"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Briefcase, Settings } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Create Project",
      path: "/admin/createproject",
      icon: <Users size={18} />,
    },
    {
      name: "Update Project",
      path: "/admin/manageproject",
      icon: <Briefcase size={18} />,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-950/70 backdrop-blur-md border-r border-gray-800 text-white p-5">
      {/* Logo / Title */}
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <h2 className="text-2xl font-bold mb-8 tracking-wide">Admin Panel</h2>
      </Link>

      {/* Menu */}
      <ul className="space-y-2">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <li key={index}>
              <Link
                href={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
                  
                  ${
                    isActive
                      ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
