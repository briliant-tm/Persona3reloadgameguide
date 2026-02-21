import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { CLASSROOM_SECTIONS } from "../../lib/data/classroom";
import { useTheme } from "../../components/ThemeProvider";

export default function ClassroomPage() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors ${theme === 'dark' ? "bg-[#0a1929]" : "bg-gray-50"}`}>
      <div className={`absolute top-0 right-0 w-1/2 h-screen pointer-events-none transition-opacity ${theme === 'dark' ? "opacity-10" : "opacity-5"}`}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1745911862361-fa4e0815609d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBqYXBhbmVzZSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njg5NTc1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Classroom"
          className="w-full h-full object-cover grayscale"
        />
        <div className={`absolute inset-0 bg-gradient-to-l to-transparent ${theme === 'dark' ? "from-[#0a1929]" : "from-gray-50"}`} />
      </div>

      <SectionTitle title="Classroom Answers" subtitle="Ace your exams and pop quizzes to boost your Academics." />
      
      <div className="space-y-8 relative z-10">
        {CLASSROOM_SECTIONS.map((section, idx) => (
          <div key={idx} className={`rounded-lg overflow-hidden border ${
            theme === 'dark' ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-lg"
          }`}>
            <div className={`px-6 py-3 border-b flex justify-between items-center ${
              section.isExam 
                ? (theme === 'dark' ? "bg-[#1269cc]/30 border-[#1269cc]/50" : "bg-blue-100 border-blue-200")
                : (theme === 'dark' ? "bg-[#1269cc]/10 border-[#1269cc]/20" : "bg-gray-50 border-gray-200")
            }`}>
              <h3 className={`font-bold uppercase tracking-wider ${
                section.isExam 
                  ? (theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]")
                  : (theme === 'dark' ? "text-white" : "text-gray-900")
              }`}>
                {section.title}
              </h3>
              {section.isExam && (
                <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${
                  theme === 'dark' ? "bg-[#51eefc] text-[#0a1929]" : "bg-[#1269cc] text-white"
                }`}>
                  Exam
                </span>
              )}
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="sr-only">
                  <tr>
                    <th>Date</th>
                    <th>Question</th>
                    <th>Answer</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${theme === 'dark' ? "divide-[#1269cc]/10" : "divide-gray-100"}`}>
                  {section.items.map((item, itemIdx) => (
                    <tr key={itemIdx} className={`transition-colors ${theme === 'dark' ? "hover:bg-[#1269cc]/5" : "hover:bg-gray-50"}`}>
                      <td className={`px-6 py-4 font-medium whitespace-nowrap w-24 align-top ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>
                        {item.date}
                      </td>
                      <td className={`px-6 py-4 align-top ${theme === 'dark' ? "text-gray-300" : "text-gray-600"}`}>
                        {item.question}
                      </td>
                      <td className={`px-6 py-4 font-bold align-top w-1/3 ${theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}`}>
                        {item.answer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
