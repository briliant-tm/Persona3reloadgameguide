"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutDashboard } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const ProgressOverlay = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration fix
  if (!mounted) return null;

  const progressData = [
    { label: "Story Progress", value: 65 },
    { label: "Social Links", value: 40 },
  ];

  return (
    // Kita gunakan pointer-events-none pada kontainer utama agar tidak menghalangi klik di bawahnya, 
    // lalu aktifkan lagi pointer-events-auto pada elemen anak.
    <div className="fixed bottom-10 right-10 z-[10000] flex flex-col items-end pointer-events-none">
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`pointer-events-auto mb-4 p-4 w-64 shadow-2xl border-l-4 backdrop-blur-xl ${
              theme === 'dark' 
                ? "bg-[#0a1929]/95 border-[#51eefc] text-white" 
                : "bg-white/95 border-[#1269cc] text-[#0a1929]"
            }`}
          >
            <p className="text-[10px] font-black italic uppercase mb-3 tracking-widest text-[#1269cc] dark:text-[#51eefc]">
              System Status
            </p>
            <div className="space-y-4">
              {progressData.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-[9px] uppercase font-bold mb-1">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className={`h-[2px] w-full ${theme === 'dark' ? "bg-white/10" : "bg-gray-200"}`}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${theme === 'dark' ? "bg-[#51eefc]" : "bg-[#1269cc]"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all active:scale-90 border-2 ${
          theme === 'dark' 
            ? "bg-[#0a1929] border-[#51eefc] text-[#51eefc] hover:bg-[#51eefc] hover:text-[#0a1929]" 
            : "bg-white border-[#1269cc] text-[#1269cc] hover:bg-[#1269cc] hover:text-white"
        }`}
      >
        <LayoutDashboard size={24} />
      </button>
    </div>
  );
};