"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, LogOut, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  return (
    <nav
      className={`${!pathname.startsWith("/dashboard") ? "container-modern" : ""} flex items-center justify-between px-6 py-3 border-b bg-white `}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/wha/logo.png"
          alt="Whats Happening Australia Logo"
          width={100}
          height={20}
          className="object-contain"
          priority
        />
      </Link>

      {!pathname.startsWith("/dashboard") ? (
        <div className="hidden md:flex items-center border rounded-full px-6 py-2 gap-8 text-slate-600 font-medium shadow-sm">
          <Link href="/events" className="hover:text-red-600 transition-colors">
            Events
          </Link>
          <Link href="/deals" className="hover:text-red-600 transition-colors">
            Deals
          </Link>
          <Link
            href="/businesses"
            className="hover:text-red-600 transition-colors"
          >
            Businesses
          </Link>
          {status === "authenticated" && (
            <Link
              href="/dashboard"
              className="hover:text-red-600 transition-colors"
            >
              Dashboard
            </Link>
          )}
        </div>
      ) : (
        ""
      )}
      <div className="flex gap-2">
        {session?.user.category === "user" &&
        pathname.startsWith("/dashboard") ? (
          <Link
            href="/"
            className="text-sm font-medium bg-red-600 text-white px-4 py-2 rounded-lg flex gap-1 items-center"
          >
            <MapPin className="h-4 w-4" />
            <span>Request For Business</span>
          </Link>
        ) : (
          <Link
            href="/"
            className="text-sm font-medium bg-[#041e3a] text-white px-4 py-2 rounded-md flex gap-1 items-center hover:bg-slate-100 hover:text-[#041e3a] border hover:border-[#041e3a] transition-colors duration-200"
          >
            <MapPin className="h-4 w-4" />
            <span>Australia</span>
          </Link>
        )}
        <div className="flex items-center">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar className="h-9 w-9 border">
                  <AvatarImage
                    src={session?.user?.image ? session.user.image : ""}
                    alt="User"
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {session?.user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center cursor-pointer"
                  >
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/settings"
                    className="flex items-center cursor-pointer"
                  >
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600 cursor-pointer"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href="/auth"
              className="text-sm font-medium bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
