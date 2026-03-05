"use client";

import { useEffect, useState } from "react";

export default function LiveDateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const weekday = date.toLocaleString("default", { weekday: "long" });
  const time = date.toLocaleString("en-AU", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex items-center gap-2 text-primary">
      <div className="flex items-center gap-2">
        <div className="text-lg font-semibold">{day}</div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{month}</span>
          <span className="text-sm">{year}</span>
        </div>
      </div>

      <div className="h-8 w-[2px] bg-gray-300"></div>

      <div className="flex flex-col">
        <span className="text-sm font-medium">{weekday}</span>
        <span className="text-sm">{time}</span>
      </div>
    </div>
  );
}
