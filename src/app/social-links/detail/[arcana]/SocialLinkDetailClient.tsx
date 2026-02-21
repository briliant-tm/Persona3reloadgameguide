"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft, MapPin, Clock, Unlock, Star, Heart,
  ChevronDown, ChevronUp, Shield, Info
} from "lucide-react";
import { SectionTitle } from "../../../../components/SectionTitle";
import { type SocialLink } from "../../../../lib/data/social-links";
import { PERSONAS } from "../../../../lib/data/personas";
import { useTheme } from "../../../../components/ThemeProvider";

// Arcana gradient map
const ARCANA_COLORS: Record<string, string> = {
  Fool: "from-gray-400 to-gray-600", Magician: "from-red-400 to-red-600",
  Priestess: "from-indigo-400 to-indigo-600", Empress: "from-emerald-400 to-emerald-600",
  Emperor: "from-amber-400 to-amber-600", Hierophant: "from-yellow-500 to-yellow-700",
  Lovers: "from-pink-400 to-pink-600", Chariot: "from-orange-400 to-orange-600",
  Justice: "from-blue-400 to-blue-600", Hermit: "from-slate-400 to-slate-600",
  Fortune: "from-violet-400 to-violet-600", Strength: "from-rose-400 to-rose-600",
  "Hanged Man": "from-cyan-400 to-cyan-600", Death: "from-gray-600 to-gray-900",
  Temperance: "from-lime-400 to-lime-600", Devil: "from-purple-500 to-purple-800",
  Tower: "from-red-600 to-red-900", Star: "from-yellow-300 to-yellow-500",
  Moon: "from-blue-300 to-blue-500", Sun: "from-orange-300 to-orange-500",
  Judgement: "from-sky-400 to-sky-600",
};

const PRIORITY_STYLE: Record<string, { label: string; cls: string }> = {
  essential: { label: "Essential", cls: "bg-amber-500/20 text-amber-400 border-amber-500/40" },
  recommended: { label: "Recommended", cls: "bg-sky-500/20 text-sky-400 border-sky-500/40" },
  optional: { label: "Optional", cls: "bg-gray-500/20 text-gray-400 border-gray-500/40" },
};

interface SocialLinkDetailClientProps {
    socialLink: SocialLink;
    relatedPersonas: typeof PERSONAS[0][];
}

export default function SocialLinkDetailClient({ socialLink: link, relatedPersonas }: SocialLinkDetailClientProps) {
  const { theme } = useTheme();
  const [showRankGuide, setShowRankGuide] = useState(false);

  if (!link) {
    // This case should ideally not be reached if generateStaticParams is set up correctly
    // However, including a fallback for robustness.
    return (
      <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center transition-colors ${theme === "dark" ? "bg-[#0a1929]" : "bg-gray-50"}`}>
        <Heart size={64} className="mb-4 opacity-20" />
        <h2 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          Social Link Not Found
        </h2>
        <p className={`mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
          The requested Social Link could not be found.
        </p>
        <Link
          href="/social-links"
          className={`flex items-center gap-2 px-5 py-3 rounded-lg font-bold transition-colors ${
            theme === "dark" ? "bg-[#1269cc] text-white hover:bg-[#1269cc]/80" : "bg-[#1269cc] text-white hover:bg-[#0f5ab5]"
          }`}
        >
          <ArrowLeft size={16} /> Back to Social Links
        </Link>
      </div>
    );
  }

  const gradient = ARCANA_COLORS[link.arcana] || "from-gray-400 to-gray-600";
  const badge = PRIORITY_STYLE[link.priority];

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors ${theme === "dark" ? "bg-[#0a1929]" : "bg-gray-50"}`}>
      {/* Back nav */}
      <div className="mb-8">
        <Link
          href="/social-links"
          className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors ${
            theme === "dark" ? "text-gray-400 hover:text-[#51eefc]" : "text-gray-500 hover:text-[#1269cc]"
          }`}
        >
          <ArrowLeft size={14} /> All Social Links
        </Link>
      </div>

      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={`relative rounded-xl overflow-hidden bg-gradient-to-r ${gradient} p-8 md:p-12 mb-8`}>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 shrink-0">
              <span className="text-white font-black text-2xl">{link.arcanaNum}</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-black text-white">{link.arcana}</h1>
                <span className={`text-xs font-bold uppercase px-2.5 py-1 rounded border ${badge.cls}`}>
                  {badge.label}
                </span>
                {link.auto && (
                  <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-white/20 text-white border border-white/30">
                    Auto
                  </span>
                )}
              </div>
              <p className="text-white/80 text-lg">{link.character}</p>
              <p className="text-white/60 text-sm mt-1">{link.name}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className={`rounded-lg border p-6 ${theme === "dark" ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-sm"}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className={`mt-0.5 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
                <div>
                  <span className={`text-xs uppercase font-bold block mb-0.5 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>Location</span>
                  <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{link.location}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className={`mt-0.5 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
                <div>
                  <span className={`text-xs uppercase font-bold block mb-0.5 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>Availability</span>
                  <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{link.availability}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Unlock size={16} className={`mt-0.5 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
                <div>
                  <span className={`text-xs uppercase font-bold block mb-0.5 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>How to Unlock</span>
                  <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{link.unlockCondition}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Info size={16} className={`mt-0.5 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
                <div>
                  <span className={`text-xs uppercase font-bold block mb-0.5 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>Priority Reason</span>
                  <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{link.priorityReason}</span>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Star size={14} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                <span className={`text-xs uppercase font-bold tracking-wider ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>Key Benefits</span>
              </div>
              <ul className="space-y-2">
                {link.keyBenefits.map((b, i) => (
                  <li key={i} className={`flex items-start gap-2.5 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${theme === "dark" ? "bg-[#51eefc]" : "bg-[#1269cc]"}`} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Rank-by-Rank Guide */}
            {link.rankGuide.length > 0 && (
              <>
                <button
                  onClick={() => setShowRankGuide(!showRankGuide)}
                  className={`w-full flex items-center justify-between py-3 border-t cursor-pointer transition-colors ${
                    theme === "dark" ? "border-[#1269cc]/20 text-gray-400 hover:text-[#51eefc]" : "border-gray-100 text-gray-500 hover:text-[#1269cc]"
                  }`}
                >
                  <span className="text-sm font-bold uppercase tracking-wider">Rank-by-Rank Guide</span>
                  {showRankGuide ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {showRankGuide && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="pb-2"
                  >
                    <ol className="space-y-3">
                      {link.rankGuide.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                            theme === "dark" ? "bg-[#1269cc]/20 text-[#51eefc]" : "bg-blue-100 text-[#1269cc]"
                          }`}>
                            {i + 1}
                          </span>
                          <span className={`text-sm pt-1 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </div>

        {/* Sidebar — Related Personas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-6"
        >
          <div className={`rounded-lg border p-6 ${theme === "dark" ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-sm"}`}>
            <div className="flex items-center gap-2 mb-4">
              <Shield size={16} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
              <h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {link.arcana} Personas
              </h3>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${theme === "dark" ? "bg-[#1269cc]/20 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                {relatedPersonas.length}
              </span>
            </div>

            {relatedPersonas.length > 0 ? (
              <div className="space-y-2">
                {relatedPersonas.map((p) => (
                  <div
                    key={p.id}
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      theme === "dark" ? "border-[#1269cc]/20 bg-[#0a1929]/50" : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs border-2 ${
                        theme === "dark" ? "border-[#1269cc] bg-[#0a1929] text-white" : "border-[#1269cc] bg-white text-[#1269cc]"
                      }`}>
                        {p.level}
                      </div>
                      <div>
                        <span className={`font-bold text-sm ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{p.name}</span>
                        <span className={`text-xs block ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>{p.type}</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {p.weak.length > 0 ? p.weak.map((w) => (
                        <span key={w} className="text-red-400 text-[10px] font-bold uppercase bg-red-900/20 px-1 py-0.5 rounded">{w}</span>
                      )) : (
                        <span className="text-green-400 text-[10px] font-bold uppercase bg-green-900/20 px-1 py-0.5 rounded">—</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className={`text-sm italic ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                No Personas catalogued for {link.arcana} yet.
              </p>
            )}
          </div>

          {/* Maxing tip */}
          <div className={`rounded-lg border p-5 ${theme === "dark" ? "bg-[#0f2438] border-amber-500/20" : "bg-amber-50 border-amber-200"}`}>
            <h4 className={`font-bold text-sm mb-2 ${theme === "dark" ? "text-amber-400" : "text-amber-700"}`}>
              Fusion Bonus Tip
            </h4>
            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Maxing the {link.arcana} Social Link gives a <strong>bonus EXP</strong> when
              fusing any {link.arcana} Persona, potentially granting extra levels and skills.
              Always carry a {link.arcana} Persona when visiting {link.character}!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}