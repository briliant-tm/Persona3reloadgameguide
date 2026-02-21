import React from "react";
import { Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`border-t py-12 transition-colors ${theme === 'dark' ? "bg-[#050c14] border-[#1269cc]/30" : "bg-gray-100 border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Moon className={theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"} />
          <span className={`font-bold text-xl tracking-wider ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>S.E.E.S. GUIDE</span>
        </div>
        
        <div className={`text-sm text-center md:text-right ${theme === 'dark' ? "text-gray-500" : "text-gray-600"}`}>
          <p>&copy; 2024 Fan Project. Not affiliated with Atlus or SEGA.</p>
          <p className="mt-1">Design inspired by Persona 3 Reload.</p>
        </div>
      </div>
    </footer>
  );
};
