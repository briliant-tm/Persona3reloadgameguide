import React, { useState } from "react";
import { Search } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import { Card } from "../../components/Card";
import { PERSONAS } from "../../lib/data/personas";
import { useTheme } from "../../components/ThemeProvider";

export default function FusionPage() {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  
  const filteredPersonas = PERSONAS.filter(p => 
    (filter === "All" || p.arcana === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const arcanas = ["All", ...new Set(PERSONAS.map(p => p.arcana))];

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors ${theme === 'dark' ? "bg-[#0a1929]" : "bg-gray-50"}`}>
      <SectionTitle title="Fusion Guide" subtitle="Search and filter Personas to find the perfect fusion combination." />
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Persona..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full border rounded-none py-3 pl-10 pr-4 focus:outline-none transition-colors ${
              theme === 'dark' 
                ? "bg-[#0f2438] border-[#1269cc]/50 text-white focus:border-[#51eefc]" 
                : "bg-white border-gray-300 text-gray-900 focus:border-[#1269cc]"
            }`}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {arcanas.map(a => (
            <button
              key={a}
              onClick={() => setFilter(a)}
              className={`px-4 py-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all ${
                filter === a 
                  ? (theme === 'dark' ? "bg-[#51eefc] text-[#0a1929]" : "bg-[#1269cc] text-white")
                  : (theme === 'dark' ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/30 hover:text-white" : "bg-white text-gray-600 border border-gray-300 hover:text-[#0a1929]")
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPersonas.map((persona, idx) => (
          <Card key={persona.id} delay={idx * 0.1}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}`}>{persona.arcana}</span>
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? "text-white" : "text-[#0a1929]"}`}>{persona.name}</h3>
              </div>
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold ${
                theme === 'dark' ? "border-[#1269cc] bg-[#0a1929] text-white" : "border-[#1269cc] bg-white text-[#1269cc]"
              }`}>
                {persona.level}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className={`flex items-center justify-between p-2 rounded ${theme === 'dark' ? "bg-[#0a1929]/50" : "bg-gray-100"}`}>
                <span className="text-gray-400 text-sm">Type</span>
                <span className={`font-medium ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>{persona.type}</span>
              </div>
              <div className={`flex items-center justify-between p-2 rounded border-l-2 border-red-500 ${theme === 'dark' ? "bg-[#0a1929]/50" : "bg-gray-100"}`}>
                <span className="text-gray-400 text-sm">Weakness</span>
                <div className="flex gap-1">
                  {persona.weak.map(w => (
                    <span key={w} className="text-red-400 text-xs font-bold uppercase bg-red-900/20 px-1 py-0.5 rounded">{w}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
