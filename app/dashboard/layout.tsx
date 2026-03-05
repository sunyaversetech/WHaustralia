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
    <div className=" flex h-screen ml-0 overflow-hidden bg-background">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6 pt-20">{children}</main>
      </div>
    </div>
  );
}
