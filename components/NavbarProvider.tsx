"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import Navbar from "./Navabr";

const NavbarProvider = () => {
  const pathname = usePathname();
  return (
    <>{pathname.startsWith("/dashboard") ? <DashboardNavbar /> : <Navbar />}</>
  );
};

export default NavbarProvider;
