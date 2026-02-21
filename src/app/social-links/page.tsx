import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search, Heart, MapPin, Clock, Unlock, Star, ChevronDown, ChevronUp,
  CalendarDays, Trophy, Shield, BookOpen, ListChecks, ArrowRight, Info
} from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
  SOCIAL_LINKS, MONTHLY_GUIDE, PRIORITY_TIERS,
  type SocialLink, type MonthGuide
} from "../../lib/data/social-links";
import { useTheme } from "../../components/ThemeProvider";

// ============================================================
// ARCANA GRADIENT MAP
// ============================================================
const ARCANA_COLORS: Record<string, string> = {
  Fool: "from-gray-400 to-gray-600",
  Magician: "from-red-400 to-red-600",
  Priestess: "from-indigo-400 to-indigo-600",
  Empress: "from-emerald-400 to-emerald-600",
  Emperor: "from-amber-400 to-amber-600",
  Hierophant: "from-yellow-500 to-yellow-700",
  Lovers: "from-pink-400 to-pink-600",
  Chariot: "from-orange-400 to-orange-600",
  Justice: "from-blue-400 to-blue-600",
  Hermit: "from-slate-400 to-slate-600",
  Fortune: "from-violet-400 to-violet-600",
  Strength: "from-rose-400 to-rose-600",
  "Hanged Man": "from-cyan-400 to-cyan-600",
  Death: "from-gray-600 to-gray-900",
  Temperance: "from-lime-400 to-lime-600",
  Devil: "from-purple-500 to-purple-800",
  Tower: "from-red-600 to-red-900",
  Star: "from-yellow-300 to-yellow-500",
  Moon: "from-blue-300 to-blue-500",
  Sun: "from-orange-300 to-orange-500",
  Judgement: "from-sky-400 to-sky-600",
};

const PRIORITY_BADGE: Record<string, { label: string; cls: string }> = {
  essential: { label: "Essential", cls: "bg-amber-500/20 text-amber-400 border-amber-500/40" },
  recommended: { label: "Recommended", cls: "bg-sky-500/20 text-sky-400 border-sky-500/40" },
  optional: { label: "Optional", cls: "bg-gray-500/20 text-gray-400 border-gray-500/40" },
};

// ============================================================
// SOCIAL LINK CARD (used in both All Links and Priority views)
// ============================================================
function SocialLinkCard({ link, theme, index, showPriority = false }: {
  link: SocialLink; theme: string; index: number; showPriority?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [showRankGuide, setShowRankGuide] = useState(false);
  const gradient = ARCANA_COLORS[link.arcana] || "from-gray-400 to-gray-600";
  const badge = PRIORITY_BADGE[link.priority];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.6), duration: 0.4 }}
      className={`rounded-lg overflow-hidden border transition-all ${
        theme === "dark"
          ? "bg-[#0f2438] border-[#1269cc]/30 hover:border-[#51eefc]/50"
          : "bg-white border-gray-200 hover:border-[#1269cc] shadow-sm hover:shadow-lg"
      }`}
    >
      {/* Gradient Header */}
      <div className={`relative h-16 bg-gradient-to-r ${gradient} flex items-center px-5 gap-4`}>
        <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border border-white/20">
          <span className="text-white font-black text-sm">{link.arcanaNum}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold truncate">{link.arcana}</h3>
          <p className="text-white/70 text-xs truncate">{link.character}</p>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          {showPriority && (
            <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded border ${badge.cls}`}>
              {badge.label}
            </span>
          )}
          {link.auto && (
            <span className="text-xs font-bold uppercase px-2 py-0.5 rounded bg-white/20 text-white border border-white/30">
              Auto
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-3">
        <div className="flex items-start gap-2">
          <MapPin size={14} className={`mt-0.5 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
          <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{link.location}</span>
        </div>
        <div className="flex items-start gap-2">
          <Clock size={14} className={`mt-0.5 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
          <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{link.availability}</span>
        </div>

        {/* Priority Reason */}
        {showPriority && (
          <div className={`p-3 rounded border-l-2 text-sm ${
            link.priority === "essential"
              ? (theme === "dark" ? "bg-amber-500/5 border-amber-500 text-amber-200/80" : "bg-amber-50 border-amber-500 text-amber-800")
              : link.priority === "recommended"
              ? (theme === "dark" ? "bg-sky-500/5 border-sky-400 text-sky-200/80" : "bg-sky-50 border-sky-500 text-sky-800")
              : (theme === "dark" ? "bg-gray-500/5 border-gray-500 text-gray-400" : "bg-gray-50 border-gray-400 text-gray-600")
          }`}>
            {link.priorityReason}
          </div>
        )}

        {/* Expand: Details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-between pt-2 border-t cursor-pointer transition-colors ${
            theme === "dark" ? "border-[#1269cc]/20 text-gray-400 hover:text-[#51eefc]" : "border-gray-100 text-gray-500 hover:text-[#1269cc]"
          }`}
        >
          <span className="text-xs uppercase tracking-wider font-bold">Unlock & Benefits</span>
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
              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Unlock size={12} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                    <span className={`text-xs uppercase font-bold tracking-wider ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                      How to Unlock
                    </span>
                  </div>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{link.unlockCondition}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Star size={12} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                    <span className={`text-xs uppercase font-bold tracking-wider ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                      Benefits
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {link.keyBenefits.map((b, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${theme === "dark" ? "bg-[#51eefc]" : "bg-[#1269cc]"}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand: Rank-by-Rank Guide */}
        {link.rankGuide.length > 0 && (
          <>
            <button
              onClick={() => setShowRankGuide(!showRankGuide)}
              className={`w-full flex items-center justify-between pt-2 border-t cursor-pointer transition-colors ${
                theme === "dark" ? "border-[#1269cc]/20 text-gray-400 hover:text-[#51eefc]" : "border-gray-100 text-gray-500 hover:text-[#1269cc]"
              }`}
            >
              <span className="text-xs uppercase tracking-wider font-bold">Rank-by-Rank Guide</span>
              {showRankGuide ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            <AnimatePresence>
              {showRankGuide && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <ol className="space-y-2 pt-1">
                    {link.rankGuide.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                          theme === "dark" ? "bg-[#1269cc]/20 text-[#51eefc]" : "bg-blue-100 text-[#1269cc]"
                        }`}>
                          {i + 1}
                        </span>
                        <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
}

// ============================================================
// MONTHLY GUIDE CARD
// ============================================================
function MonthCard({ month, theme, index }: { month: MonthGuide; theme: string; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.5), duration: 0.4 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full text-left cursor-pointer transition-all rounded-lg overflow-hidden border ${
          expanded
            ? (theme === "dark" ? "border-[#51eefc]/50 bg-[#0f2438]" : "border-[#1269cc] bg-white shadow-lg")
            : (theme === "dark" ? "border-[#1269cc]/30 bg-[#0f2438] hover:border-[#51eefc]/30" : "border-gray-200 bg-white hover:border-[#1269cc]/50 shadow-sm")
        }`}
      >
        <div className="p-5 flex items-center gap-4">
          <div className={`w-14 h-14 rounded-lg flex flex-col items-center justify-center shrink-0 ${
            theme === "dark" ? "bg-[#1269cc]/20 border border-[#1269cc]/30" : "bg-blue-50 border border-blue-100"
          }`}>
            <CalendarDays size={18} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
            <span className={`text-[10px] font-bold uppercase tracking-wider mt-0.5 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`}>
              {month.month.substring(0, 3)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{month.month}</h3>
            <p className={`text-sm truncate ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{month.focus}</p>
          </div>
          <span className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>{month.dateRange}</span>
          {expanded ? (
            <ChevronUp size={18} className={theme === "dark" ? "text-gray-500" : "text-gray-400"} />
          ) : (
            <ChevronDown size={18} className={theme === "dark" ? "text-gray-500" : "text-gray-400"} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden border-x border-b rounded-b-lg ${
              theme === "dark" ? "border-[#51eefc]/50 bg-[#0f2438]" : "border-[#1269cc] bg-white"
            }`}
          >
            <div className="px-5 pb-5 space-y-5">
              {/* Focus Banner */}
              <div className={`p-3 rounded-lg border-l-4 ${
                theme === "dark" ? "bg-[#1269cc]/10 border-[#51eefc]" : "bg-blue-50 border-[#1269cc]"
              }`}>
                <p className={`text-sm font-medium ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`}>{month.focus}</p>
              </div>

              {/* Social Link Tasks */}
              <div>
                <h4 className={`flex items-center gap-2 text-xs uppercase font-bold tracking-widest mb-3 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                  <Heart size={12} /> Social Link Schedule
                </h4>
                <ul className="space-y-2">
                  {month.socialLinkTasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ArrowRight size={12} className={`mt-1 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
                      <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat Goals */}
              <div>
                <h4 className={`flex items-center gap-2 text-xs uppercase font-bold tracking-widest mb-3 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                  <Trophy size={12} /> Stat Goals
                </h4>
                <ul className="space-y-2">
                  {month.statGoals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Shield size={12} className={`mt-1 shrink-0 ${theme === "dark" ? "text-amber-400" : "text-amber-500"}`} />
                      <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tips */}
              <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#0a1929] border border-[#1269cc]/20" : "bg-gray-50 border border-gray-100"}`}>
                <h4 className={`flex items-center gap-2 text-xs uppercase font-bold tracking-widest mb-3 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                  <Info size={12} /> Tips
                </h4>
                <ul className="space-y-2">
                  {month.tips.map((tip, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      <span className="text-green-500 mt-0.5 shrink-0">*</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function SocialLinksPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<"all" | "priority" | "guide">("all");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "manual" | "auto">("all");

  const filteredLinks = useMemo(() => {
    return SOCIAL_LINKS.filter((link) => {
      const matchesSearch =
        link.arcana.toLowerCase().includes(search.toLowerCase()) ||
        link.character.toLowerCase().includes(search.toLowerCase()) ||
        link.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        filter === "all" || (filter === "auto" && link.auto) || (filter === "manual" && !link.auto);
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const essentialLinks = SOCIAL_LINKS.filter(l => l.priority === "essential");
  const recommendedLinks = SOCIAL_LINKS.filter(l => l.priority === "recommended");
  const optionalLinks = SOCIAL_LINKS.filter(l => l.priority === "optional");

  const tabs = [
    { id: "all" as const, label: "All Social Links", icon: <Heart size={16} />, count: SOCIAL_LINKS.length },
    { id: "priority" as const, label: "Priority Guide", icon: <Trophy size={16} />, count: null },
    { id: "guide" as const, label: "Monthly Schedule", icon: <CalendarDays size={16} />, count: MONTHLY_GUIDE.length },
  ];

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors ${theme === "dark" ? "bg-[#0a1929]" : "bg-gray-50"}`}>
      {/* Background */}
      <div className={`absolute top-0 right-0 w-1/2 h-screen pointer-events-none transition-opacity ${theme === "dark" ? "opacity-10" : "opacity-5"}`}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1603734178639-de75ab63b2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHNocmluZSUyMHdhcm0lMjBzdW5saWdodHxlbnwxfHx8fDE3NzE2NDc1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Social Links"
          className="w-full h-full object-cover grayscale"
        />
        <div className={`absolute inset-0 bg-gradient-to-l to-transparent ${theme === "dark" ? "from-[#0a1929]" : "from-gray-50"}`} />
      </div>

      <SectionTitle title="Social Links" subtitle="Forge bonds to unlock powerful Personas and experience unforgettable stories." />

      {/* Tab Switcher */}
      <div className="relative z-10 flex overflow-x-auto gap-3 mb-8 pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? (theme === "dark" ? "bg-[#51eefc] text-[#0a1929] shadow-[0_0_15px_rgba(81,238,252,0.4)]" : "bg-[#1269cc] text-white shadow-lg")
                : (theme === "dark" ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/30 hover:border-[#51eefc]/30" : "bg-white text-gray-600 border border-gray-200 hover:border-[#1269cc]/30")
            }`}
          >
            {tab.icon}
            {tab.label}
            {tab.count !== null && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id
                  ? (theme === "dark" ? "bg-[#0a1929]/30 text-[#0a1929]" : "bg-white/30 text-white")
                  : (theme === "dark" ? "bg-[#1269cc]/20 text-gray-500" : "bg-gray-100 text-gray-400")
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ==================== TAB: ALL SOCIAL LINKS ==================== */}
      <AnimatePresence mode="wait">
        {activeTab === "all" && (
          <motion.div
            key="all"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {/* Search/Filter Controls */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by arcana, character..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`w-full border rounded-lg py-2.5 pl-10 pr-4 focus:outline-none transition-colors ${
                    theme === "dark"
                      ? "bg-[#0f2438] border-[#1269cc]/50 text-white focus:border-[#51eefc]"
                      : "bg-white border-gray-300 text-gray-900 focus:border-[#1269cc]"
                  }`}
                />
              </div>
              <div className="flex gap-2">
                {(["all", "manual", "auto"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      filter === f
                        ? "bg-[#1269cc] text-white"
                        : theme === "dark"
                        ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/20 hover:border-[#1269cc]/40"
                        : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {f === "all" ? "All" : f === "manual" ? "Manual" : "Auto"}
                  </button>
                ))}
              </div>
            </div>

            <p className={`text-sm mb-4 relative z-10 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
              Showing {filteredLinks.length} of {SOCIAL_LINKS.length} Social Links
            </p>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLinks.map((link, idx) => (
                <SocialLinkCard key={link.arcana} link={link} theme={theme} index={idx} />
              ))}
            </div>

            {filteredLinks.length === 0 && (
              <div className={`relative z-10 text-center py-20 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                <Heart size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg">No Social Links found matching your search.</p>
                <button
                  onClick={() => { setSearch(""); setFilter("all"); }}
                  className={`mt-4 px-4 py-2 rounded cursor-pointer transition-colors ${
                    theme === "dark" ? "bg-[#1269cc]/20 text-[#51eefc] hover:bg-[#1269cc]/30" : "bg-blue-50 text-[#1269cc] hover:bg-blue-100"
                  }`}
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* ==================== TAB: PRIORITY GUIDE ==================== */}
        {activeTab === "priority" && (
          <motion.div
            key="priority"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 space-y-10"
          >
            {/* Intro */}
            <div className={`p-5 rounded-lg border ${
              theme === "dark" ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-sm"
            }`}>
              <div className="flex items-start gap-3">
                <ListChecks size={20} className={`mt-0.5 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
                <div>
                  <h3 className={`font-bold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    How to Prioritize Social Links
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    It's possible to max every Social Link in a single playthrough, but it requires careful planning.
                    If you're not following a day-by-day guide, use these tiers to decide what to prioritize when time is limited.
                    Always carry a Persona matching the arcana of the S. Link you're visiting for bonus points.
                  </p>
                </div>
              </div>
            </div>

            {/* Tier Sections */}
            {PRIORITY_TIERS.map(tier => {
              const links = tier.tier === "essential" ? essentialLinks
                : tier.tier === "recommended" ? recommendedLinks
                : optionalLinks;
              return (
                <div key={tier.tier}>
                  {/* Tier Header */}
                  <div className={`flex items-center gap-3 mb-4`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${tier.iconBg}`}>
                      {tier.tier === "essential" ? <Star size={18} className={tier.color} /> :
                       tier.tier === "recommended" ? <Trophy size={18} className={tier.color} /> :
                       <BookOpen size={18} className={tier.color} />}
                    </div>
                    <div>
                      <h3 className={`font-bold ${tier.color}`}>
                        {tier.label}
                        <span className={`ml-2 text-xs font-normal ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                          ({links.length} links)
                        </span>
                      </h3>
                      <p className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>{tier.description}</p>
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {links.map((link, idx) => (
                      <SocialLinkCard key={link.arcana} link={link} theme={theme} index={idx} showPriority />
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* ==================== TAB: MONTHLY SCHEDULE ==================== */}
        {activeTab === "guide" && (
          <motion.div
            key="guide"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 space-y-6"
          >
            {/* Intro */}
            <div className={`p-5 rounded-lg border ${
              theme === "dark" ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-sm"
            }`}>
              <div className="flex items-start gap-3">
                <CalendarDays size={20} className={`mt-0.5 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
                <div>
                  <h3 className={`font-bold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Month-by-Month Completion Schedule
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    Follow this 10-month guide from April 2009 to January 2010 to max all Social Links in a single playthrough.
                    Each month lists which links to start, which to prioritize, stat goals, and tips.
                    Click any month to expand the full breakdown.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Legend */}
            <div className={`flex flex-wrap gap-4 px-1`}>
              <div className="flex items-center gap-2 text-xs">
                <Heart size={12} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                <span className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>S. Link tasks</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Trophy size={12} className={theme === "dark" ? "text-amber-400" : "text-amber-500"} />
                <span className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>Stat targets</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Info size={12} className="text-green-500" />
                <span className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>Pro tips</span>
              </div>
            </div>

            {/* Month Cards */}
            <div className="space-y-3">
              {MONTHLY_GUIDE.map((month, idx) => (
                <MonthCard key={month.month} month={month} theme={theme} index={idx} />
              ))}
            </div>

            {/* Completion Note */}
            <div className={`p-5 rounded-lg border-2 border-dashed text-center ${
              theme === "dark" ? "border-[#51eefc]/30 bg-[#0f2438]" : "border-[#1269cc]/30 bg-white"
            }`}>
              <Trophy size={32} className={`mx-auto mb-2 ${theme === "dark" ? "text-amber-400" : "text-amber-500"}`} />
              <h4 className={`font-bold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                All Social Links Maxed!
              </h4>
              <p className={`text-sm max-w-md mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                With all Arcana bonds at Rank 10, you can fuse the most powerful Personas in the game — including Messiah (Judgement), Orpheus Telos (Fool), Helel (Star), and Asura (Sun). The Great Seal awaits.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
