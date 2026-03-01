"use client";
import {
  LayoutDashboard,
  Users,
  ChevronDown,
  LucideIcon,
  Calendar1,
  HeartHandshake,
  Album,
  User,
  CirclePile,
  HeartPlus,
  Calendar,
  Ticket,
  BadgeDollarSign,
  Settings,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

export type NavItem = {
  icon: LucideIcon;
  name: string;
  link?: string;
  hasDropdown: boolean;
  children?: { title: string; link: string; active?: boolean }[];
  active?: boolean;
};

export type NavGroup = {
  groupLabel: string;
  items: NavItem[];
};

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const pathname = usePathname();

  const menuData: NavGroup[] = [
    {
      groupLabel: "General",
      items: [
        {
          name: "dashboard",
          icon: LayoutDashboard,
          link: "/dashboard",
          hasDropdown: false,
          active: pathname === "/dashboard",
        },
        {
          name: "booking",
          icon: Calendar,
          link: "/dashboard/bookings",
          hasDropdown: false,
          active: pathname === "/dashboard/bookings",
        },
        {
          name: "deals",
          icon: BadgeDollarSign,
          link: "/dashboard/deals",
          hasDropdown: false,
          active: pathname.startsWith("/dashboard/deals"),
        },
        {
          name: "events",
          icon: Ticket,
          link: "/dashboard/events",
          hasDropdown: false,
          active: pathname.startsWith("/dashboard/events"),
        },
      ],
    },
    {
      groupLabel: "Inventory",
      items: [
        {
          name: "inventory",
          icon: CirclePile,
          link: "/dashboard/inventory",
          hasDropdown: false,
          active: pathname.startsWith("/dashboard/inventory"),
        },
      ],
    },
    {
      groupLabel: "Profile",
      items: [
        {
          name: "profile",
          icon: User,
          link: "/dashboard/profile",
          hasDropdown: false,
          active: pathname.startsWith("/dashboard/profile"),
        },
        {
          name: "Favorites",
          icon: HeartPlus,
          link: "/dashboard/favorite",
          hasDropdown: false,
          active: pathname.startsWith("/dashboard/favorite"),
        },
        {
          name: "Settings",
          icon: Settings,
          link: "/dashboard/",
          hasDropdown: false,
          active: pathname.startsWith("/dashboard/settings"),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#041e3a] text-white border-r overflow-y-auto flex flex-col p-4 font-sans text-sm overflow-hidden ">
      {menuData.map((group, idx) => (
        <div key={idx} className="">
          <div className="space-y-1 ">
            {group.items.map((item) => {
              return (
                <div key={item.link}>
                  <div
                    className={`relative group  flex items-center rounded-md mb-2 transition-colors duration-200 ease-in-out ${item.active ? "bg-slate-100 text-black" : "hover:bg-gray-500 hover:text-white"}`}
                  >
                    <Link
                      title={item.name}
                      aria-label={item.name}
                      href={item.link || "#"}
                      className="flex-1 flex items-center gap-3 p-2 pr-10 capitalize font-medium "
                    >
                      <item.icon size={28} strokeWidth={1.5} /> {item.name}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
