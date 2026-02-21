import React from "react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

export const Card = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`p-6 relative overflow-hidden group transition-all duration-300 ${
        theme === 'dark' 
          ? "bg-[#0f2438]/80 border border-[#1269cc]/30 hover:border-[#51eefc]/50 text-white" 
          : "bg-white border border-gray-200 hover:border-[#1269cc] shadow-sm text-gray-900"
      } ${className}`}
    >
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#1269cc]/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300`} />
      {children}
    </motion.div>
  );
};
