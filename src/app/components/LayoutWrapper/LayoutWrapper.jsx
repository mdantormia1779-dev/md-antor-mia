"use client";

import { usePathname } from "next/navigation";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
}