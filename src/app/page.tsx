"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function CalculateDaysCouple() {
  const [daysTogether, setDaysTogether] = useState<number>(0);
  const startDate = new Date("2021-10-27");

  useEffect(() => {
    const calculateDays = () => {
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - startDate.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDaysTogether(diffDays);
    };

    calculateDays();
    const timer = setInterval(calculateDays, 24 * 60 * 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-black to-purple-950">
      <div className="relative w-full max-w-md mx-auto">
        <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="relative bg-black/60 backdrop-blur-xl border border-purple-800/30 rounded-3xl p-8 text-center shadow-2xl">
          <div className="flex justify-center mb-6">
            <Heart
              className="text-purple-500 animate-pulse"
              size={64}
              strokeWidth={1.5}
            />
          </div>

          <h1 className="text-3xl font-bold mb-4 text-purple-300 tracking-wider">
            Isa e André
          </h1>

          <div className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-700 mb-6">
            {daysTogether}
          </div>

          <div className="border-t border-purple-800/30 pt-4 mt-6">
            <p className="text-sm italic text-gray-500"></p>
          </div>

          <span className="text-purple-300 ml-2 font-semibold">
            {startDate.toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
