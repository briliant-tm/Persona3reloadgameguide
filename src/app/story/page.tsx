import React, { useState } from "react";
import { motion } from "motion/react";
import { SectionTitle } from "../../components/SectionTitle";
import { STORY_STEPS } from "../../lib/data/story";
import { useTheme } from "../../components/ThemeProvider";

export default function StoryPage() {
  const { theme } = useTheme();
  const [showSpoilers, setShowSpoilers] = useState(false);

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors ${theme === 'dark' ? "bg-[#0a1929]" : "bg-gray-50"}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <SectionTitle title="Story Walkthrough" subtitle="Key events and timeline." />
        <button
          onClick={() => setShowSpoilers(!showSpoilers)}
          className={`flex items-center gap-2 px-4 py-2 rounded border transition-all ${
            showSpoilers 
              ? "bg-red-900/30 border-red-500 text-red-400" 
              : (theme === 'dark' ? "bg-[#0f2438] border-[#1269cc] text-[#51eefc]" : "bg-white border-[#1269cc] text-[#1269cc] hover:bg-blue-50")
          }`}
        >
          {showSpoilers ? "Hide Spoilers" : "Show Spoilers"}
        </button>
      </div>

      <div className={`relative border-l-2 ml-4 md:ml-12 space-y-12 ${theme === 'dark' ? "border-[#1269cc]/30" : "border-[#1269cc]/20"}`}>
        {STORY_STEPS.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            <div className={`absolute -left-[9px] top-0 w-4 h-4 border-2 rounded-full ${
              theme === 'dark' 
                ? "bg-[#0a1929] border-[#51eefc]" 
                : "bg-gray-50 border-[#1269cc]"
            }`} />
            
            <div className="mb-2">
              <span className={`font-bold text-lg ${theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}`}>{step.date}</span>
            </div>
            
            <div className={`p-6 border-l-4 rounded-r-lg shadow-lg ${
              theme === 'dark' 
                ? "bg-[#0f2438]" 
                : "bg-white"
            } ${
              step.spoiler ? "border-red-500" : "border-[#1269cc]"
            }`}>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>{step.title}</h3>
              {step.spoiler && !showSpoilers ? (
                <div className="flex items-center gap-2 text-gray-500 italic h-12">
                  <span className="bg-gray-800 px-2 py-1 rounded text-xs text-white">SPOILER</span>
                  Content hidden. Toggle spoilers to view.
                </div>
              ) : (
                <p className={`${theme === 'dark' ? "text-gray-300" : "text-gray-600"}`}>{step.content}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
