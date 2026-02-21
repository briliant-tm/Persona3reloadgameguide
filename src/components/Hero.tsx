import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroBgImg from "figma:asset/8beeaae64ac691e9fefa73050b64b36b0316ba37.png";
import { useTheme } from "./ThemeProvider";

export const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroBgImg}
          alt="Persona 3 Reload Hero"
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'dark' ? "opacity-60" : "opacity-30"}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-r transition-colors duration-500 ${theme === 'dark' ? "from-[#0a1929] via-[#0a1929]/80" : "from-white via-white/80"} to-transparent`} />
        <div className={`absolute inset-0 bg-gradient-to-t transition-colors duration-500 ${theme === 'dark' ? "from-[#0a1929]" : "from-white"} to-transparent`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic transition-colors duration-300" 
              style={{ 
                color: theme === 'dark' ? "white" : "#0a1929",
                textShadow: theme === 'dark' ? "4px 4px 0px #1269cc" : "4px 4px 0px #51eefc" 
              }}>
            FIGHT THE <br />
            <span className={theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}>TARTARUS</span>
          </h1>
          <p className={`mt-6 text-xl max-w-lg border-l-4 pl-6 py-2 backdrop-blur-sm transition-colors duration-300 ${
            theme === 'dark' 
              ? "text-gray-300 border-[#1269cc] bg-black/20" 
              : "text-gray-700 border-[#51eefc] bg-white/40"
          }`}>
            Navigating the Dark Hour? Get comprehensive guides for Persona 3 Reload. 
            Fusion charts, classroom answers, and Tartarus maps at your fingertips.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/fusion">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 font-bold text-lg rounded-sm flex items-center gap-2 clip-path-slant shadow-lg transition-colors ${
                  theme === 'dark' 
                    ? "bg-[#51eefc] text-[#0a1929] shadow-[0_0_20px_rgba(81,238,252,0.4)]" 
                    : "bg-[#1269cc] text-white shadow-[0_0_20px_rgba(18,105,204,0.4)]"
                }`}
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
              >
                FUSION GUIDE <ArrowRight size={20} />
              </motion.button>
            </Link>
            
            <Link to="/classroom">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-transparent border-2 font-bold text-lg rounded-sm flex items-center gap-2 transition-colors ${
                  theme === 'dark'
                    ? "border-white text-white hover:bg-white/10"
                    : "border-[#0a1929] text-[#0a1929] hover:bg-[#0a1929]/10"
                }`}
              >
                CLASSROOM ANSWERS
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className={`absolute bottom-0 right-0 w-1/3 h-1 transition-colors ${theme === 'dark' ? "bg-[#51eefc]" : "bg-[#1269cc]"}`} />
      <div className={`absolute top-1/4 right-10 w-20 h-20 border rounded-full animate-pulse transition-colors ${theme === 'dark' ? "border-[#1269cc]/30" : "border-[#51eefc]/50"}`} />
    </div>
  );
};
