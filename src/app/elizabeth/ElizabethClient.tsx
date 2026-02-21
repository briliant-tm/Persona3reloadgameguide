"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search, Ghost, Gem, Skull, CheckCircle, Star, ChevronDown, ChevronUp,
  Gift, Calendar, AlertTriangle, Sparkles, List
} from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
  type ElizabethRequest
} from "../../lib/data/elizabeth";
import { useTheme } from "../../components/ThemeProvider";

interface CategoryConfigItem { icon: React.ReactNode; gradient: string; label: string; }

interface ElizabethClientProps {
    elizabethRequests: ElizabethRequest[];
    difficultyColors: Record<string, { bg: string; text: string; border: string }>;
    categoryConfig: Record<string, CategoryConfigItem>;
}

function RequestCard({ request, theme, index, difficultyColors, categoryConfig }: {
  request: ElizabethRequest; theme: string; index: number;
  difficultyColors: Record<string, { bg: string; text: string; border: string }>;
  categoryConfig: Record<string, CategoryConfigItem>;
}) {
  const [expanded, setExpanded] = useState(false);
  const cat = categoryConfig[request.category];
  const diff = difficultyColors[request.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.5), duration: 0.35 }}
      className={`rounded-lg overflow-hidden border transition-all ${
        theme === "dark"
          ? "bg-[#0f2438] border-[#1269cc]/30 hover:border-[#51eefc]/50"
          : "bg-white border-gray-200 hover:border-[#1269cc] shadow-sm hover:shadow-lg"
      }`}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 bg-gradient-to-r ${cat.gradient}`} />

      <div className="p-5 space-y-3">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded border ${
                theme === "dark" ? "bg-[#1269cc]/10 border-[#1269cc]/30 text-gray-400" : "bg-gray-50 border-gray-200 text-gray-500"
              }`}>
                #{request.id}
              </span>
              <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded border ${diff.bg} ${diff.text} ${diff.border}`}>
                {request.difficulty}
              </span>
            </div>
            <h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              {request.name}
            </h3>
            <p className={`text-sm mt-0.5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              {request.description}
            </p>
          </div>
          <div className={`w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shadow-md`}>
            {cat.icon}
          </div>
        </div>

        {/* Quick info */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-1.5">
            <Calendar size={12} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
            <span className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              {request.unlockDate}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gift size={12} className={theme === "dark" ? "text-amber-400" : "text-amber-500"} />
            <span className={`text-xs ${theme === "dark" ? "text-amber-300/80" : "text-amber-600"}`}>
              {request.reward}
            </span>
          </div>
        </div>

        {/* Expand */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-between pt-2 border-t cursor-pointer transition-colors ${
            theme === "dark" ? "border-[#1269cc]/20 text-gray-400 hover:text-[#51eefc]" : "border-gray-100 text-gray-500 hover:text-[#1269cc]"
          }`}
        >
          <span className="text-xs uppercase tracking-wider font-bold">How to Complete</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className={`p-3 rounded-lg border-l-2 ${
                theme === "dark" ? "bg-[#0a1929]/50 border-[#51eefc]" : "bg-blue-50/50 border-[#1269cc]"
              }`}>
                <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  {request.details}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ElizabethClient({ elizabethRequests, difficultyColors, categoryConfig }: ElizabethClientProps) {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [difficulty, setDifficulty] = useState<string>("all");

  const filtered = useMemo(() => {
    return elizabethRequests.filter((r) => {
      const matchesSearch =
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.reward.toLowerCase().includes(search.toLowerCase());
      const matchesCat = category === "all" || r.category === category;
      const matchesDiff = difficulty === "all" || r.difficulty === difficulty;
      return matchesSearch && matchesCat && matchesDiff;
    });
  }, [search, category, difficulty, elizabethRequests]);

  const categories = ["all", "persona", "item", "shadow", "task", "special"];
  const difficulties = ["all", "Easy", "Medium", "Hard", "Very Hard"];

  // Stats
  const totalCount = elizabethRequests.length;
  const byCategory = categories.slice(1).map(c => ({
    cat: c,
    count: elizabethRequests.filter(r => r.category === c).length,
    ...categoryConfig[c],
  }));

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors ${
      theme === "dark" ? "bg-[#0a1929]" : "bg-gray-50"
    }`}>
      {/* Background */}
      <div className={`absolute top-0 right-0 w-1/2 h-screen pointer-events-none transition-opacity ${
        theme === "dark" ? "opacity-10" : "opacity-5"
      }`}>
        <div className={`w-full h-full bg-gradient-to-bl ${
          theme === "dark" ? "from-purple-900/30 to-transparent" : "from-blue-100/30 to-transparent"
        }`} />
      </div>

      <SectionTitle
        title="Elizabeth's Requests"
        subtitle="Complete quests from the Velvet Room attendant to earn rare rewards, items, and powerful equipment."
      />

      {/* Summary strip */}
      <div className={`relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8`}>
        {byCategory.map(c => (
          <button
            key={c.cat}
            onClick={() => setCategory(prev => prev === c.cat ? "all" : c.cat)}
            className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
              category === c.cat
                ? (theme === "dark" ? "border-[#51eefc]/60 bg-[#1269cc]/15" : "border-[#1269cc] bg-blue-50")
                : (theme === "dark" ? "border-[#1269cc]/20 bg-[#0f2438] hover:border-[#1269cc]/40" : "border-gray-200 bg-white hover:border-gray-300")
            }`}
          >
            <div className={`w-8 h-8 mx-auto rounded-full bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white mb-1.5`}>
              {c.icon}
            </div>
            <span className={`text-xl font-black block ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{c.count}</span>
            <span className={`text-[10px] uppercase font-bold tracking-wider ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>{c.label}</span>
          </button>
        ))}
      </div>

      {/* Search + Difficulty filter */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search requests, rewards..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full border rounded-lg py-2.5 pl-10 pr-4 focus:outline-none transition-colors ${
              theme === "dark"
                ? "bg-[#0f2438] border-[#1269cc]/50 text-white focus:border-[#51eefc]"
                : "bg-white border-gray-300 text-gray-900 focus:border-[#1269cc]"
            }`}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {difficulties.map(d => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                difficulty === d
                  ? "bg-[#1269cc] text-white"
                  : theme === "dark"
                  ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/20 hover:border-[#1269cc]/40"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {d === "all" ? "All Diff." : d}
            </button>
          ))}
        </div>
      </div>

      {/* Category pills */}
      <div className="relative z-10 flex gap-2 overflow-x-auto mb-6 pb-1">
        {categories.map(c => {
          const cfg = categoryConfig[c];
          return (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                category === c
                  ? (theme === "dark" ? "bg-[#51eefc] text-[#0a1929]" : "bg-[#1269cc] text-white")
                  : (theme === "dark" ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/30 hover:border-[#51eefc]/30" : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300")
              }`}
            >
              {cfg.icon}
              {cfg.label}
            </button>
          );
        })}
      </div>

      {/* Count */}
      <p className={`text-sm mb-4 relative z-10 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
        Showing {filtered.length} of {totalCount} requests
      </p>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((r, idx) => (
          <RequestCard key={r.id} request={r} theme={theme} index={idx} difficultyColors={difficultyColors} categoryConfig={categoryConfig} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className={`relative z-10 text-center py-20 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
          <AlertTriangle size={48} className="mx-auto mb-4 opacity-30" />
          <p className="text-lg">No requests found matching your filters.</p>
          <button
            onClick={() => { setSearch(""); setCategory("all"); setDifficulty("all"); }}
            className={`mt-4 px-4 py-2 rounded cursor-pointer transition-colors ${
              theme === "dark" ? "bg-[#1269cc]/20 text-[#51eefc] hover:bg-[#1269cc]/30" : "bg-blue-50 text-[#1269cc] hover:bg-blue-100"
            }`}
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pro tips section */}
      <div className={`relative z-10 mt-12 p-6 rounded-lg border ${
        theme === "dark" ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-sm"
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={18} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
          <h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Elizabeth Request Tips</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Requests unlock as you progress through the story. Check back after each full-moon operation.",
            "Persona requests require showing the Persona — you'll lose it after turning it in, so fuse a fresh one.",
            "Gem/item requests stack. Keep everything you find in Tartarus; you'll need it eventually.",
            "Elizabeth's dates unlock after completing enough requests. They're missable — don't skip them!",
            "The Ultimate Trial (defeating Elizabeth) is post-game difficulty. Don't attempt it before Lv. 90+.",
            "Some rewards like Omnipotent Orb (nullify all elements) are game-changing. Prioritize those requests.",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="text-green-500 mt-0.5 shrink-0">*</span>
              <span className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}