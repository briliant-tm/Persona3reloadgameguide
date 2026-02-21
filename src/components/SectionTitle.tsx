"use client";

import React from "react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  const { theme } = useTheme();
  return (
    <div className="mb-12 relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-5xl font-black italic tracking-tighter z-10 relative transition-colors ${theme === 'dark' ? "text-white" : "text-[#0a1929]"}`}
      >
        {title.toUpperCase()}
      </motion.h2>
      <div className={`absolute -bottom-2 left-0 w-24 h-2 ${theme === 'dark' ? "bg-[#51eefc]" : "bg-[#1269cc]"}`} />
      <div className={`absolute -top-10 -left-10 text-8xl font-black z-0 transition-colors ${theme === 'dark' ? "text-[#1269cc]/10" : "text-[#1269cc]/5"}`}>
        {title.substring(0, 3).toUpperCase()}
      </div>
      {subtitle && <p className={`mt-4 max-w-2xl transition-colors ${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>{subtitle}</p>}
    </div>
  );
};
