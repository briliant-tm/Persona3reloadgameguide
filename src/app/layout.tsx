import React from "react";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";

const LayoutContent = () => {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' 
        ? "bg-[#0a1929] text-gray-200 selection:bg-[#51eefc] selection:text-[#0a1929]" 
        : "bg-gray-50 text-gray-900 selection:bg-[#1269cc] selection:text-white"
    }`}>
      <Navigation />
      
      <main className="min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default function Layout() {
  return (
    <ThemeProvider>
        <LayoutContent />
    </ThemeProvider>
  );
}
