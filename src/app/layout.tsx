"use client";

import "../index.css";
import "../styles/globals.css";
import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ThemeProvider, useTheme } from "../components/ThemeProvider"; 
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ProgressOverlay } from "../components/ProgressOverlay";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    // Tambahkan overflow-x-hidden untuk mencegah scroll horizontal yang merusak posisi fixed
    <div className={`min-h-screen font-sans transition-colors duration-300 overflow-x-hidden ${
      theme === 'dark' 
        ? "bg-[#0a1929] text-gray-200" 
        : "bg-gray-50 text-gray-900"
    }`}>
      <Navigation />
      
      <main className="relative min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Tetap di sini, tapi kita pastikan di komponennya sendiri tidak ada gate 'isHovered' untuk tombol */}
      <ProgressOverlay /> 
      <Footer />
    </div>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <LayoutContent>
            {children}
          </LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}