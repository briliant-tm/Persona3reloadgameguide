"use client";

import React, { useState } from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { type ClassroomSection, type ExamSection } from "../../lib/data/classroom";
import { useTheme } from "../../components/ThemeProvider";
import { BookOpen, GraduationCap } from "lucide-react";

type Tab = "questions" | "exams";

function QuestionTable({ items, theme }: { items: ClassroomSection["items"]; theme: string }) {
  return (
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
          {items.map((item, idx) => (
            <tr key={idx} className={`transition-colors ${theme === 'dark' ? "hover:bg-[#1269cc]/5" : "hover:bg-gray-50"}`}>
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
  );
}

function ClassroomQuestionsView({ classroomQuestions, theme }: { classroomQuestions: ClassroomSection[]; theme: string }) {
  return (
    <div className="space-y-8">
      {classroomQuestions.map((section, idx) => (
        <div key={idx} className={`rounded-lg overflow-hidden border ${
          theme === 'dark' ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-lg"
        }`}>
          <div className={`px-6 py-3 border-b ${
            theme === 'dark' ? "bg-[#1269cc]/10 border-[#1269cc]/20" : "bg-gray-50 border-gray-200"
          }`}>
            <h3 className={`font-bold uppercase tracking-wider ${
              theme === 'dark' ? "text-white" : "text-gray-900"
            }`}>
              {section.title}
            </h3>
          </div>
          <QuestionTable items={section.items} theme={theme} />
        </div>
      ))}
    </div>
  );
}

function ExamsView({ classroomExams, theme }: { classroomExams: ExamSection[]; theme: string }) {
  return (
    <div className="space-y-8">
      {classroomExams.map((exam, idx) => (
        <div key={idx} className={`rounded-lg overflow-hidden border ${
          theme === 'dark' ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-lg"
        }`}>
          <div className={`px-6 py-3 border-b flex justify-between items-center ${
            theme === 'dark' ? "bg-[#1269cc]/30 border-[#1269cc]/50" : "bg-blue-100 border-blue-200"
          }`}>
            <h3 className={`font-bold uppercase tracking-wider ${
              theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"
            }`}>
              {exam.title}
            </h3>
            <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${
              exam.period === "Midterm"
                ? (theme === 'dark' ? "bg-[#51eefc] text-[#0a1929]" : "bg-[#1269cc] text-white")
                : (theme === 'dark' ? "bg-amber-400 text-[#0a1929]" : "bg-amber-500 text-white")
            }`}>
              {exam.period}
            </span>
          </div>
          <QuestionTable items={exam.items} theme={theme} />
        </div>
      ))}
    </div>
  );
}

interface ClassroomClientProps {
    classroomQuestions: ClassroomSection[];
    classroomExams: ExamSection[];
}

export default function ClassroomClient({ classroomQuestions, classroomExams }: ClassroomClientProps) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>("questions");

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors ${theme === 'dark' ? "bg-[#0a1929]" : "bg-gray-50"}`}>
      <div className={`absolute top-0 right-0 w-1/2 h-screen pointer-events-none transition-opacity ${theme === 'dark' ? "opacity-10" : "opacity-5"}`}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1745911862361-fa4e0815609d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBqYXBhbmVzZSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njg5NTc1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Classroom"
          className="w-full h-full object-cover grayscale"
        />
        <div className={`absolute inset-0 bg-gradient-to-l to-transparent ${theme === 'dark' ? "from-[#0a1929]" : "from-gray-50"}`} />
      </div>

      <SectionTitle title="Classroom Answers" subtitle="Ace your exams and pop quizzes to boost your Academics." />

      {/* Tab Switcher */}
      <div className="relative z-10 flex gap-2 mb-8">
        <button
          onClick={() => setActiveTab("questions")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all cursor-pointer ${
            activeTab === "questions"
              ? (theme === 'dark'
                  ? "bg-[#1269cc] text-white shadow-lg shadow-[#1269cc]/25"
                  : "bg-[#1269cc] text-white shadow-lg shadow-[#1269cc]/25")
              : (theme === 'dark'
                  ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/20 hover:border-[#1269cc]/40"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300")
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Daily Questions</span>
          <span className={`text-xs px-1.5 py-0.5 rounded ${
            activeTab === "questions"
              ? "bg-white/20 text-white"
              : (theme === 'dark' ? "bg-[#1269cc]/20 text-gray-400" : "bg-gray-100 text-gray-500")
          }`}>
            {classroomQuestions.reduce((sum, s) => sum + s.items.length, 0)}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("exams")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all cursor-pointer ${
            activeTab === "exams"
              ? (theme === 'dark'
                  ? "bg-[#1269cc] text-white shadow-lg shadow-[#1269cc]/25"
                  : "bg-[#1269cc] text-white shadow-lg shadow-[#1269cc]/25")
              : (theme === 'dark'
                  ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/20 hover:border-[#1269cc]/40"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300")
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Midterms & Finals</span>
          <span className={`text-xs px-1.5 py-0.5 rounded ${
            activeTab === "exams"
              ? "bg-white/20 text-white"
              : (theme === 'dark' ? "bg-[#1269cc]/20 text-gray-400" : "bg-gray-100 text-gray-500")
          }`}>
            {classroomExams.reduce((sum, s) => sum + s.items.length, 0)}
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {activeTab === "questions" ? (
          <ClassroomQuestionsView classroomQuestions={classroomQuestions} theme={theme} />
        ) : (
          <ExamsView classroomExams={classroomExams} theme={theme} />
        )}
      </div>
    </div>
  );
}