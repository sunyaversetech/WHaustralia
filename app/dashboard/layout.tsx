import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard area",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side (Navbar + Content) */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navbar (fixed inside right section) */}
        {/* <div className="shrink-0">
          <DashboardNavbar />
        </div> */}

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-6 pt-20">{children}</main>
      </div>
    </div>
  );
}
