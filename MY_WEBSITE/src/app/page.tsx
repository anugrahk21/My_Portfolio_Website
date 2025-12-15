"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import {
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  ArrowRight,
  FileDown,
  ShieldCheckIcon,
  FileTextIcon,
  AwardIcon,
  GraduationCapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import {
  OpenSourceCard,
  OpenSourceSection,
} from "@/components/opensource-card";
import { FeaturedRepos, Repository } from "@/components/featured-repo";
import { PublishedWorkSection } from "@/components/published-work";
import { AchievementsNewsSection } from "@/components/achievements-news";
import { HoverNavbar } from "@/components/hover-navbar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BlogPost, BlogCard } from "@/components/blog-card";
import { InteractiveSkills } from "@/components/interactive-skills";
import { IconTimeline } from "@/components/icon-timeline";
import { HyperText } from "@/components/magicui/hyper-text";
import { AboutMeMorph } from "@/components/about-me-morph";
// import { AboutMeDrawer } from "@/components/about-me-drawer";
import { GitHubStars } from "@/components/github-stars";
import { Metadata } from "next";
import { DecryptText } from "@/components/decrypt-text";
import { NameAnimationOverlay } from "@/components/magicui/hyper-text";






export default function Page() {
  const [repoData, setRepoData] = useState<Repository[]>(
    (RESUME_DATA.open_source as unknown) as Repository[]
  );
  const [animationComplete, setAnimationComplete] = useState(false);

  // Force scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Command menu links
  const commandLinks = [
    {
      url: "/blog",
      title: "Blog",
    },
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];

  useEffect(() => {
    // Set animation complete after 4 seconds (slightly longer than the animation duration)
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchFreshRepoData = async () => {
      const initialData = (RESUME_DATA.open_source as unknown) as Repository[];

      const updatedData = await Promise.all(
        initialData.map(async (repo) => {
          try {
            const apiUrl = repo.html_url.replace(
              "https://github.com",
              "https://api.github.com/repos"
            );

            const response = await fetch(apiUrl, {
              headers: {
                Accept: "application/vnd.github.v3+json",
                ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
                  Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                }),
              },
            });

            if (response.ok) {
              const freshData = await response.json();
              return {
                ...repo, // Keep topics and highlight from resume-data
                stargazers_count: freshData.stargazers_count,
                forks_count: freshData.forks_count,
                language: freshData.language || repo.language,
                description: freshData.description || repo.description,
              };
            }
          } catch (error) {
            // Silently fall back to static data
          }
          return repo;
        })
      );

      setRepoData(updatedData);
    };

    fetchFreshRepoData();
  }, []);




  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 pb-24 md:p-16 md:pb-24 print:p-12">
      {/* Content is always rendered and visible to crawlers/SEO */}
      <motion.div
        initial={{ opacity: 1 }} // Start visible for SSR/crawlers
        animate={{ opacity: animationComplete ? 1 : 0.1 }} // Slightly visible during animation
        transition={{ duration: 0.8 }}
        style={{
          // Ensure content is always accessible to screen readers and crawlers
          position: "relative",
          zIndex: animationComplete ? 10 : 1, // Lower z-index during animation
        }}
      >
        <HoverNavbar links={commandLinks} />
        <motion.section
          id="top"
          className="mx-auto w-full max-w-4xl space-y-8 bg-background print:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">
                <DecryptText text={RESUME_DATA.name} autoStart={true} triggerOnView={false} />
              </h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                {RESUME_DATA.about}
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
                <Button
                  variant="outline"
                  className="flex h-8 items-center gap-2"
                  asChild
                >
                  <a
                    href={RESUME_DATA.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <FileDown className="size-4" />
                    <span>CV</span>
                  </a>
                </Button>

              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative size-28 overflow-hidden rounded-full border border-border bg-muted"
            >
              <Image
                src={RESUME_DATA.avatarUrl}
                alt={RESUME_DATA.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 112px, 112px"
              />
            </motion.div>
          </div>

          <Section id="about">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                <DecryptText text="About" />
              </h2>
            </div>
            <p className="text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.summary}
            </p>
            <AboutMeMorph />
          </Section>

          <Section id="work" className="scroll-mt-16">
            <h2 className="text-xl font-bold">
              <DecryptText text="Certifications and Trainings" />
            </h2>
            <IconTimeline
              items={RESUME_DATA.work}
              defaultIcon={<ShieldCheckIcon className="h-5 w-5 text-primary/80 transition-colors duration-300 group-hover:text-primary" />}
              showMoreText="Show more certifications"
            />
          </Section>

          {/* Featured Repositories */}
          <FeaturedRepos
            repositories={repoData}
            title="Featured Open Source Work"
            loading={false}
          />

          {/* Published Work Section */}
          {RESUME_DATA.publications && RESUME_DATA.publications.length > 0 && (
            <Section id="publications" className="scroll-mt-16">
              <h2 className="text-xl font-bold">
                <DecryptText text="Academic Publications" />
              </h2>
              <IconTimeline
                items={RESUME_DATA.publications.map(pub => ({
                  company: pub.publisher.split("|")[0].trim(),
                  title: pub.title,
                  description: pub.description,
                  start: pub.date,
                  link: pub.websiteUrl || "#",
                  badges: Array.from(pub.tags),
                }))}
                defaultIcon={<FileTextIcon className="h-5 w-5 text-primary/80 transition-colors duration-300 group-hover:text-primary" />}
                showMoreText="Show more publications"
              />
            </Section>
          )}

          {/* Achievements & News Section */}
          {RESUME_DATA.achievements && RESUME_DATA.achievements.length > 0 && (
            <Section id="achievements" className="scroll-mt-16">
              <h2 className="text-xl font-bold">
                <DecryptText text="Achievements & Highlights" />
              </h2>
              <IconTimeline
                items={RESUME_DATA.achievements.map(achievement => ({
                  company: achievement.title,
                  title: achievement.date,
                  description: achievement.description,
                  start: achievement.date,
                  link: (achievement as any).link ? (achievement as any).link.href : "#",
                  badges: Array.from(achievement.tags),
                }))}
                defaultIcon={<AwardIcon className="h-5 w-5 text-primary/80 transition-colors duration-300 group-hover:text-primary" />}
                showMoreText="Show more achievements"
              />
            </Section>
          )}

          {/* Open Source Section */}
          {/* <Section id="open-source" className="scroll-mt-16 print-force-new-page">
                <h2 className="text-xl font-bold">Open Source Contributions</h2>
                {!loading && repoData.length > 0 ? (
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {repoData.map((repo) => (
                      <motion.div 
                        key={repo.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <OpenSourceCard repo={repo} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground font-mono text-sm">Loading repository data...</p>
                )}
              </Section> */}

          {/* Remove the conditional rendering that might be causing the section to not show */}
          {/* {!loading && <OpenSourceSection repositories={repoData} />} */}
          {/* Featured Blog Posts Section */}
          {RESUME_DATA.blogs && RESUME_DATA.blogs.length > 0 && (
            <Section id="blog" className="scroll-mt-16">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    <DecryptText text="Latest Blog Posts" />
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Recent articles and insights
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-sm font-medium"
                >
                  <Link href="/blog" className="inline-flex items-center gap-1">
                    View all posts
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {RESUME_DATA.blogs.slice(0, 2).map((post) => (
                  <motion.div
                    key={post.slug}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </Section>
          )}

          <Section id="skills" className="scroll-mt-16">
            <h2 className="text-xl font-bold">
              <DecryptText text="Skills" />
            </h2>
            <div className="mt-5">
              <InteractiveSkills skills={Array.from(RESUME_DATA.skills)} />
            </div>
          </Section>

          <Section id="projects" className="print-force-new-page scroll-mt-16">
            <h2 className="text-xl font-bold">
              <DecryptText text="Projects" />
            </h2>
            <div className="-mx-3 mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
              {RESUME_DATA.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link.href : undefined}
                  />
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="education" className="scroll-mt-16">
            <h2 className="text-xl font-bold">
              <DecryptText text="Education" />
            </h2>
            <IconTimeline
              items={RESUME_DATA.education.map(edu => ({
                company: edu.school,
                title: edu.degree,
                description: `${edu.degree} (${edu.start} - ${edu.end})`,
                start: edu.start,
                end: edu.end,
                link: "#",
                badges: [],
              }))}
              defaultIcon={<GraduationCapIcon className="h-5 w-5 text-primary/80 transition-colors duration-300 group-hover:text-primary" />}
              maxInitialItems={10}
            />
          </Section>
        </motion.section>
      </motion.div>

      {/* Add the name animation component as overlay - renders on top */}
      <NameAnimationOverlay
        name={RESUME_DATA.name}
        subtitle={RESUME_DATA.about}
      />
    </main>
  );
}
