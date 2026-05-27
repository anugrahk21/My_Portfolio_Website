"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import {
    MailIcon,
    ArrowRight,
    FileDown,
    ShieldCheckIcon,
    FileTextIcon,
    AwardIcon,
    GraduationCapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { FeaturedRepos, Repository } from "@/components/featured-repo";
import { HoverNavbar } from "@/components/hover-navbar";
import { motion } from "motion/react";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { InteractiveSkills } from "@/components/interactive-skills";
import { IconTimeline } from "@/components/icon-timeline";
import { AboutMeMorph } from "@/components/about-me-morph";
import { DecryptText } from "@/components/decrypt-text";
import { NameAnimationOverlay } from "@/components/magicui/hyper-text";
import Marquee from "@/components/ui/marquee";

interface PortfolioPageProps {
    initialRepoData: Repository[];
}

export function PortfolioPage({ initialRepoData }: PortfolioPageProps) {
    const repoData = initialRepoData;
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const commandLinks = [
        { url: "/blog", title: "Blog" },
        ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
        })),
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
        <div className={`relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/40 p-6 sm:p-8 backdrop-blur-xl dark:border-white/10 dark:bg-black/20 shadow-sm transition-all hover:shadow-md ${className}`}>
            {children}
        </div>
    );

    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 pb-24 md:p-12 md:pb-24 print:p-12">
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: "relative",
                    zIndex: animationComplete ? 10 : 1,
                }}
            >
                {/* Background decorative blobs */}
                <div className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/5" />
                <div className="pointer-events-none fixed right-0 top-[20%] z-0 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/5" />

                <HoverNavbar links={commandLinks} />
                
                <motion.section
                    id="top"
                    className="mx-auto w-full max-w-5xl space-y-8 print:space-y-6 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header Section */}
                    <GlassCard className="mt-8">
                        <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
                            <div className="flex-1 space-y-3">
                                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    <DecryptText text={RESUME_DATA.name} autoStart={true} triggerOnView={false} />
                                </h1>
                                <p className="max-w-xl text-pretty font-mono text-sm leading-relaxed text-muted-foreground">
                                    {RESUME_DATA.about}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2 font-mono text-sm text-muted-foreground print:hidden">
                                    {RESUME_DATA.contact.email && (
                                        <Button className="h-9 w-9 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/20 border-transparent shadow-none" variant="outline" size="icon" asChild>
                                            <a href={`mailto:${RESUME_DATA.contact.email}`}>
                                                <MailIcon className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                                            </a>
                                        </Button>
                                    )}
                                    {RESUME_DATA.contact.social.map((social) => (
                                        <Button key={social.name} className="h-9 w-9 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/20 border-transparent shadow-none" variant="outline" size="icon" asChild>
                                            <a href={social.url} target="_blank" rel="noopener noreferrer">
                                                <social.icon className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                                            </a>
                                        </Button>
                                    ))}
                                    <Button variant="outline" className="h-9 rounded-full px-4 bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/20 border-transparent shadow-none flex items-center gap-2" asChild>
                                        <a href={RESUME_DATA.resumeUrl} target="_blank" rel="noopener noreferrer" download>
                                            <FileDown className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                                            <span className="font-medium text-zinc-700 dark:text-zinc-300">Download CV</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative h-28 w-28 sm:h-36 sm:w-36 shrink-0 overflow-hidden rounded-full border-4 border-white dark:border-zinc-800 bg-muted shadow-xl"
                            >
                                <Image
                                    src={RESUME_DATA.avatarUrl}
                                    alt={RESUME_DATA.name}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 112px, 144px"
                                />
                            </motion.div>
                        </div>
                    </GlassCard>

                    {/* About Section */}
                    <Section id="about" className="scroll-mt-16">
                        <GlassCard>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <DecryptText text="Core Philosophy" />
                                </h2>
                            </div>
                            <p className="text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl">
                                {RESUME_DATA.summary}
                            </p>
                            <AboutMeMorph />
                        </GlassCard>
                    </Section>

                    {/* Featured Repositories [ Projects ] */}
                    <Section id="projects" className="scroll-mt-16">
                        <GlassCard>
                            <FeaturedRepos
                                repositories={repoData}
                                title="Featured Projects"
                                loading={false}
                            />
                        </GlassCard>
                    </Section>

                    {/* Bento Box Grid for Timelines */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Certifications Container */}
                        <Section id="work" className="scroll-mt-16 h-full">
                            <GlassCard className="h-full">
                                <h2 className="text-xl font-bold mb-6">
                                    <DecryptText text="Certifications & Experience" />
                                </h2>
                                <IconTimeline
                                    items={RESUME_DATA.work}
                                    defaultIcon={<ShieldCheckIcon className="h-5 w-5" />}
                                    showMoreText="All experience"
                                />
                            </GlassCard>
                        </Section>

                        {/* Education Container */}
                        <Section id="education" className="scroll-mt-16 h-full">
                            <GlassCard className="h-full">
                                <h2 className="text-xl font-bold mb-6">
                                    <DecryptText text="Education" />
                                </h2>
                                <IconTimeline
                                    items={RESUME_DATA.education.map(edu => ({
                                        company: edu.school,
                                        title: edu.degree,
                                        start: edu.start,
                                        end: edu.end,
                                        link: "#",
                                        badges: [],
                                        highlights: edu.highlights
                                    }))}
                                    defaultIcon={<GraduationCapIcon className="h-5 w-5" />}
                                    maxInitialItems={10}
                                />
                            </GlassCard>
                        </Section>
                    </div>

                    {/* Skills Section */}
                    <Section id="skills" className="scroll-mt-16">
                        <GlassCard>
                            <h2 className="text-xl font-bold mb-6">
                                <DecryptText text="Technical Arsenal" />
                            </h2>
                            <InteractiveSkills skills={Array.from(RESUME_DATA.skills)} />
                        </GlassCard>
                    </Section>

                    {/* Second Bento Row: Publications & Achievements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {RESUME_DATA.publications && RESUME_DATA.publications.length > 0 && (
                            <Section id="publications" className="scroll-mt-16 h-full">
                                <GlassCard className="h-full">
                                    <h2 className="text-xl font-bold mb-6">
                                        <DecryptText text="Research & Publications" />
                                    </h2>
                                    <IconTimeline
                                        items={RESUME_DATA.publications.map(pub => ({
                                            company: pub.title,
                                            title: pub.publisher.split("|")[0].trim(),
                                            description: pub.description,
                                            start: pub.date,
                                            link: pub.websiteUrl || "#",
                                            badges: Array.from(pub.tags),
                                            highlights: pub.highlights
                                        }))}
                                        defaultIcon={<FileTextIcon className="h-5 w-5" />}
                                        showMoreText="All publications"
                                    />
                                </GlassCard>
                            </Section>
                        )}

                        {RESUME_DATA.achievements && RESUME_DATA.achievements.length > 0 && (
                            <Section id="achievements" className="scroll-mt-16 h-full">
                                <GlassCard className="h-full">
                                    <h2 className="text-xl font-bold mb-6">
                                        <DecryptText text="Key Milestones" />
                                    </h2>
                                    <IconTimeline
                                        items={RESUME_DATA.achievements.map(achievement => ({
                                            company: achievement.title,
                                            title: achievement.date,
                                            description: achievement.description,
                                            start: achievement.date,
                                            link: (achievement as any).link ? (achievement as any).link.href : "#",
                                            badges: Array.from(achievement.tags),
                                            highlights: achievement.highlights
                                        }))}
                                        defaultIcon={<AwardIcon className="h-5 w-5" />}
                                        showMoreText="All milestones"
                                    />
                                </GlassCard>
                            </Section>
                        )}
                    </div>

                    {/* Featured Blog Posts Section */}
                    {RESUME_DATA.blogs && RESUME_DATA.blogs.length > 0 && (
                        <Section id="blog" className="scroll-mt-16">
                            <GlassCard>
                                <div className="mb-6 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            <DecryptText text="Insights & Writing" />
                                        </h2>
                                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                                            Recent articles and engineering thoughts
                                        </p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        asChild
                                        className="text-sm font-medium rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10"
                                    >
                                        <Link href="/blog" className="inline-flex items-center gap-1">
                                            View all posts
                                            <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    </Button>
                                </div>
                                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4 -mx-2 w-[calc(100%+16px)] max-w-none">
                                    <Marquee pauseOnHover className="[--duration:30s]">
                                        {RESUME_DATA.blogs.map((post) => (
                                            <div key={post.slug} className="w-[300px] md:w-[380px] mx-3 h-full">
                                                <BlogCard post={post} />
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            </GlassCard>
                        </Section>
                    )}
                </motion.section>
            </motion.div>

            <NameAnimationOverlay
                name={RESUME_DATA.name}
                subtitle={RESUME_DATA.about}
            />
        </main>
    );
}
