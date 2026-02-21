"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Ghost, Sword, Map, BookOpen, GraduationCap, Heart, Menu, X, Sun, Crown, Calculator } from "lucide-react";
import logoImg from "../assets/1906305b5d234fcf82e6d60ae0d0632407c8e048.png";
import { useTheme } from "./ThemeProvider";

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", path: "/", label: "Home", icon: <Moon size={20} /> },
    { id: "fusion", path: "/fusion", label: "Fusion", icon: <Ghost size={20} /> },
    { id: "calculator", path: "/calculator", label: "Calculator", icon: <Calculator size={20} /> },
    { id: "combat", path: "/combat", label: "Combat", icon: <Sword size={20} /> },
    { id: "floors", path: "/floors", label: "Tartarus", icon: <Map size={20} /> },
    { id: "story", path: "/story", label: "Story", icon: <BookOpen size={20} /> },
    { id: "classroom", path: "/classroom", label: "Classroom", icon: <GraduationCap size={20} /> },
    { id: "social-links", path: "/social-links", label: "S.Links", icon: <Heart size={20} /> },
    { id: "elizabeth", path: "/elizabeth", label: "Elizabeth", icon: <Crown size={20} /> },
  ];

  const getActiveTab = (currentPathname: string) => {
    if (currentPathname === "/") return "home";
    const found = navItems.find(item => item.path !== "/" && currentPathname.startsWith(item.path));
    return found ? found.id : "home";
  };

  const activeTab = getActiveTab(pathname);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b shadow-lg transition-colors duration-300 ${
      theme === 'dark' 
        ? "bg-[#0a1929]/90 border-[#1269cc]/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
        : "bg-white/90 border-gray-200 shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className={`h-8 flex items-center justify-center transition-colors`}>
               <img src={logoImg.src} alt="P3R Logo" className="h-full w-auto object-contain" />
            </div>
            <span className={`font-bold text-xl tracking-wider transition-colors ${theme === 'dark' ? "text-white" : "text-[#0a1929]"}`}>
              LZ Corporation Ltd
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-2">
            <div className="ml-6 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`relative px-2.5 py-2 rounded-md text-xs font-medium transition-all duration-300 flex items-center gap-1.5 group overflow-hidden ${
                    activeTab === item.id 
                      ? (theme === 'dark' ? "text-[#51eefc] bg-[#1269cc]/20" : "text-[#1269cc] bg-blue-50")
                      : (theme === 'dark' ? "text-gray-300 hover:text-white hover:bg-[#1269cc]/10" : "text-gray-600 hover:text-[#0a1929] hover:bg-gray-100")
                  }`}
                >
                  <span className="hidden xl:inline-block">{item.icon}</span>
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="underline"
                      className={`absolute bottom-0 left-0 w-full h-0.5 ${theme === 'dark' ? "bg-[#51eefc]" : "bg-[#1269cc]"}`}
                    />
                  )}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' ? "bg-[#0f2438] text-[#51eefc] hover:bg-[#1269cc]/20" : "bg-gray-100 text-orange-500 hover:bg-gray-200"
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' ? "bg-[#0f2438] text-[#51eefc]" : "bg-gray-100 text-orange-500"
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                theme === 'dark' ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-600 hover:text-black hover:bg-gray-200"
              }`}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b ${
              theme === 'dark' ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-left px-3 py-4 rounded-md text-base font-medium flex items-center gap-3 transition-colors ${
                    activeTab === item.id
                      ? (theme === 'dark' ? "text-[#51eefc] bg-[#1269cc]/20 border-l-4 border-[#51eefc]" : "text-[#1269cc] bg-blue-50 border-l-4 border-[#1269cc]")
                      : (theme === 'dark' ? "text-gray-300 hover:text-white hover:bg-[#1269cc]/10" : "text-gray-600 hover:text-black hover:bg-gray-100")
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};