"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import {
    ShieldCheckIcon,
    BriefcaseIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    ExternalLinkIcon,
    ArrowRightIcon,
    ArrowUpRightIcon,
    InfoIcon,
    Mic,
    LucideIcon,
    ShieldAlert, Building2, Globe, Lock, Cpu, Wrench, Award, Terminal, ScanSearch, Siren, Grid3X3, Leaf, CloudRain, BookOpenCheck, Droplets, Scale, GraduationCap, Medal, ChefHat, Timer, CheckCircle2,
    TerminalSquare
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export interface TimelineItem {
    company: string;
    title: string;
    description?: string;
    highlights?: readonly { text: string; icon: string }[];
    start: string;
    end?: string;
    link: string;
    badges: readonly string[] | string[];
    icon?: React.ReactNode;
    logo?: string;
    variant?: "default" | "shine";
}

const companyLogos: Record<string, string> = {
    "Microsoft Research": "/microsoft-logo.png",
    Apple: "/apple-logo.png",
    TurboML: "/tml-logo.png",
    "Mandelbulb Technologies": "/mandelbulb_logo.jpeg",
    "Indian Institute of Science (IISC)": "/iisc-logo.png",
};

const getHighlightIcon = (iconName: string) => {
    const iconMap: Record<string, React.ElementType> = {
        ShieldCheck: ShieldCheckIcon,
        ShieldAlert, Building2, Globe, Lock, Cpu, Wrench, Award, Terminal, ScanSearch, Siren, Grid3X3, Leaf, CloudRain, BookOpenCheck, Droplets, Scale, GraduationCap, Medal, ChefHat, Timer, TerminalSquare
    };
    const Icon = iconMap[iconName] || CheckCircle2;
    return <Icon className="h-4 w-4" />;
};

interface TimelineItemProps {
    item: TimelineItem;
    index: number;
    isLast: boolean;
    defaultIcon?: React.ReactNode;
}

const TimelineItemComponent: React.FC<TimelineItemProps> = ({
    item,
    index,
    isLast,
    defaultIcon = <BriefcaseIcon className="h-5 w-5 text-primary/80 transition-colors duration-300 group-hover:text-primary" />,
}) => {
    const logoSrc = item.logo || companyLogos[item.company];
    const displayIcon = item.icon || defaultIcon;
    const isShineVariant = item.variant === "shine";

    const content = (
        <div className="relative z-10 rounded-xl bg-white/50 dark:bg-black/20 border border-zinc-200 dark:border-white/5 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-zinc-300 dark:hover:border-white/10 group-hover:-translate-y-1 group-hover:shadow-md">
            {/* Subtle hover gradient blob */}
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none" />
            
            {isShineVariant && (
                <div className="absolute -right-2 -top-2 z-20">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-300 text-white shadow-sm transition-transform duration-300 hover:scale-110">
                        <ArrowUpRightIcon className="h-4 w-4" />
                    </div>
                </div>
            )}

            <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300 group-hover:text-primary">
                        {item.company}
                    </h3>
                    {isShineVariant && (
                        <Badge className="bg-blue-100 text-[10px] text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            Building a Research Lab
                        </Badge>
                    )}
                </div>
                <div className="text-xs font-medium tabular-nums text-muted-foreground bg-zinc-100 dark:bg-white/5 px-2 py-1 rounded-md border border-zinc-200/50 dark:border-white/5 inline-flex self-start sm:self-auto">
                    {item.start} - {item.end ?? "Present"}
                </div>
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-2 border-b border-zinc-200/50 dark:border-white/10 pb-3">
                <span className="font-mono text-xs font-semibold text-primary/80">
                    {item.title}
                </span>
                <div className="flex-1" />
                <div className="flex flex-wrap gap-1">
                    {item.badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="text-[10px] bg-zinc-200/50 dark:bg-white/10 hover:bg-zinc-300/50 dark:hover:bg-white/20">
                            {badge}
                        </Badge>
                    ))}
                </div>
            </div>

            {item.highlights && item.highlights.length > 0 ? (
                <ul className="mt-3 space-y-2.5">
                    {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                            <div className="mt-0.5 shrink-0 rounded bg-primary/10 p-0.5 text-primary/80">
                                {getHighlightIcon(highlight.icon)}
                            </div>
                            <span className="leading-relaxed text-pretty">{highlight.text}</span>
                        </li>
                    ))}
                </ul>
            ) : item.description && (
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                </p>
            )}
        </div>
    );

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
        >
            {!isLast && (
                <div className="absolute -bottom-4 left-[27px] top-12 w-px bg-gradient-to-b from-zinc-300 to-transparent dark:from-white/10" />
            )}

            <div className="group flex gap-5">
                <div className="relative z-10 mt-1 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-white dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-800 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/20">
                    {logoSrc ? (
                        <Image
                            src={logoSrc}
                            alt={`${item.company} logo`}
                            fill
                            className="object-cover p-2"
                        />
                    ) : (
                        <div className="text-zinc-500 dark:text-zinc-400 group-hover:text-primary transition-colors">
                            {displayIcon}
                        </div>
                    )}
                </div>

                <div className="flex-1 pb-6">
                    {isShineVariant && item.link && item.link !== "#" ? (
                        <Link href={item.link} target="_blank" className="block">
                            {content}
                        </Link>
                    ) : (
                        content
                    )}
                </div>
            </div>
        </motion.div>
    );
};

interface IconTimelineProps {
    items: readonly TimelineItem[] | TimelineItem[];
    maxInitialItems?: number;
    defaultIcon?: React.ReactNode;
    showMoreText?: string;
    showLessText?: string;
}

export const IconTimeline: React.FC<IconTimelineProps> = ({
    items,
    maxInitialItems = 3,
    defaultIcon = <BriefcaseIcon className="h-5 w-5" />,
    showMoreText = "Show more",
    showLessText = "Show less",
}) => {
    const [showAll, setShowAll] = useState(false);

    const visibleItems = showAll ? items : items.slice(0, maxInitialItems);
    const hasMoreItems = items.length > maxInitialItems;

    return (
        <div className="mt-6">
            <AnimatePresence>
                {visibleItems.map((item, index) => (
                    <TimelineItemComponent
                        key={`${item.company}-${item.start}`}
                        item={item}
                        index={index}
                        isLast={
                            showAll
                                ? index === items.length - 1
                                : index === visibleItems.length - 1
                        }
                        defaultIcon={defaultIcon}
                    />
                ))}
            </AnimatePresence>

            {hasMoreItems && (
                <motion.div
                    className="mt-2 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 text-xs font-medium rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? (
                            <>
                                {showLessText} <ChevronUpIcon className="h-3.5 w-3.5" />
                            </>
                        ) : (
                            <>
                                {showMoreText} <ChevronDownIcon className="h-3.5 w-3.5" />
                            </>
                        )}
                    </Button>
                </motion.div>
            )}
        </div>
    );
};

export const WorkTimeline = IconTimeline;
