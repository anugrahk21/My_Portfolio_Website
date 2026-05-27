"use client";

import { motion } from "motion/react";
import { ShieldAlert, BrainCircuit, Lightbulb, TrendingUp, LucideIcon } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

const iconMap: Record<string, LucideIcon> = {
  ShieldAlert,
  BrainCircuit,
  Lightbulb,
  TrendingUp
};

export const AboutMeMorph = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
      {RESUME_DATA.aboutMeHighlights.map((item, idx) => {
        const Icon = iconMap[item.icon] || Lightbulb;
        
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="h-full"
          >
            <div className="group relative h-full overflow-hidden rounded-xl border border-zinc-200 bg-white/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 dark:border-white/5 dark:bg-black/20 dark:hover:border-white/10 shadow-sm">
            {/* Subtle hover gradient blob */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
        );
      })}
    </div>
  );
};
