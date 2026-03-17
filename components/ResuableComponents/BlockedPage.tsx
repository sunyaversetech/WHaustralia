"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MoveLeft, Ban } from "lucide-react";

const BlockedPage = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#051e3a]">
      {" "}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, #e03131 0%, transparent 70%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-6 max-w-md text-center px-6">
        {" "}
        <div className="relative w-24 h-24 opacity-80 mb-4">
          {" "}
          <Image
            src="/wha/logo2.png"
            alt="Company Logo"
            fill
            className="object-contain grayscale"
            priority
          />{" "}
        </div>
        <div className="flex flex-col items-center gap-4">
          {" "}
          <div className="p-4 rounded-full bg-[#e03131]/10 border border-[#e03131]/20">
            <Ban className="w-10 h-10 text-[#e03131]" />{" "}
          </div>
          <div className="space-y-2">
            {" "}
            <h1 className="text-white text-4xl font-bold tracking-tight">
              403{" "}
            </h1>{" "}
            <h2 className="text-[#e03131] font-semibold uppercase tracking-widest text-sm">
              Access Blocked{" "}
            </h2>{" "}
            <p className="text-white/60 text-sm leading-relaxed">
              This content is not accessible from your current location or
              network. Please contact administration for details.{" "}
            </p>{" "}
          </div>{" "}
        </div>
        <button
          onClick={() => router.push("/")}
          className="group mt-4 flex items-center gap-2 px-6 py-3 bg-[#e03131] hover:bg-[#b02121] text-white rounded-full transition-all duration-300 shadow-lg shadow-[#e03131]/20">
          {" "}
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Go Front Page</span>{" "}
        </button>{" "}
      </div>
      <div className="absolute bottom-10 text-white/40 text-xs font-light tracking-tighter">
        © {new Date().getFullYear()} WHA • Secure Portal{" "}
      </div>{" "}
    </div>
  );
};

export default BlockedPage;
