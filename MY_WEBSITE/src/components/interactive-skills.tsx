"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Code2Icon, ServerIcon, DatabaseIcon, CloudIcon,
  CodeIcon, BrainCircuitIcon, LibraryIcon,
  PackageIcon, LayoutIcon,
  ApertureIcon, GaugeIcon, TerminalIcon,
  BoxIcon, CircuitBoardIcon, ShieldIcon,
  CpuIcon, BlocksIcon, UsersIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

// Map of category names to their corresponding icons
const categoryIcons: Record<string, React.ElementType> = {
  "Languages & Databases": DatabaseIcon,
  "Security Tools": ShieldIcon,
  "Frameworks & Platforms": BlocksIcon,
  "AI & GenAI": BrainCircuitIcon,
  "Core Areas": CpuIcon,
  "Soft Skills": UsersIcon,
  "Other": ApertureIcon
};

// Map skill keywords to minimal black and white icons
const getSkillIcon = (skill: string) => {
  const lowerSkill = skill.toLowerCase();

  if (lowerSkill.includes('python') || lowerSkill.includes('c++') || lowerSkill.includes('java')) {
    return <TerminalIcon className="h-3.5 w-3.5" />;
  } else if (lowerSkill.includes('react') || lowerSkill.includes('vue')) {
    return <CodeIcon className="h-3.5 w-3.5" />;
  } else if (lowerSkill.includes('node') || lowerSkill.includes('express')) {
    return <ServerIcon className="h-3.5 w-3.5" />;
  } else if (lowerSkill.includes('linux') || lowerSkill.includes('git')) {
    return <BoxIcon className="h-3.5 w-3.5" />;
  } else if (lowerSkill.includes('aws') || lowerSkill.includes('azure') || lowerSkill.includes('cloud')) {
    return <CloudIcon className="h-3.5 w-3.5" />;
  } else if (lowerSkill.includes('ai') || lowerSkill.includes('llm') || lowerSkill.includes('prompt')) {
    return <BrainCircuitIcon className="h-3.5 w-3.5" />;
  } else if (lowerSkill.includes('sql') || lowerSkill.includes('database')) {
    return <DatabaseIcon className="h-3.5 w-3.5" />;
  } else if (lowerSkill.includes('security') || lowerSkill.includes('nmap') || lowerSkill.includes('burp')) {
    return <ShieldIcon className="h-3.5 w-3.5" />;
  } else if (lowerSkill.includes('api') || lowerSkill.includes('fastapi')) {
    return <ServerIcon className="h-3.5 w-3.5" />;
  } else if (lowerSkill.includes('research') || lowerSkill.includes('analysis')) {
    return <CircuitBoardIcon className="h-3.5 w-3.5" />;
  }

  // Default
  return <GaugeIcon className="h-3.5 w-3.5" />;
};

const extractCategory = (skill: string): { category: string; skills: string[] } => {
  const parts = skill.split(":");
  if (parts.length > 1) {
    return {
      category: parts[0].trim(),
      skills: parts[1].split(',').map(s => s.trim())
    };
  }
  return {
    category: "Other",
    skills: [skill]
  };
};

interface InteractiveSkillsProps {
  skills: string[];
}

export const InteractiveSkills: React.FC<InteractiveSkillsProps> = ({ skills }) => {
  const categorizedSkills = skills.reduce<Record<string, string[]>>((acc, skill) => {
    const { category, skills: skillList } = extractCategory(skill);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(...skillList);
    return acc;
  }, {});

  const categories = Object.keys(categorizedSkills);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category, idx) => {
        const Icon = categoryIcons[category] || categoryIcons["Other"];
        const categorySkills = categorizedSkills[category];

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="h-full"
          >
            <div className="group relative h-full overflow-hidden rounded-xl border border-zinc-200 bg-white/40 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 dark:border-white/5 dark:bg-black/20 dark:hover:border-white/10 shadow-sm">
            {/* Subtle hover gradient blob */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 border-b border-zinc-200/50 dark:border-white/10 pb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, sIdx) => (
                  <div
                    key={`${skill}-${sIdx}`}
                    className="flex items-center gap-1.5 rounded-md bg-zinc-100/50 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-white/5 transition-colors hover:bg-zinc-200 dark:hover:bg-white/10"
                  >
                    {getSkillIcon(skill)}
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        );
      })}
    </div>
  );
};