"use client";

import React, { useEffect } from "react";
import { BlogGrid, BlogPost } from "@/components/blog-card";
import { HoverNavbar } from "@/components/hover-navbar";
import { AuthorInfo } from "@/components/author-info";
import { ArrowLeftIcon, HomeIcon, ListIcon } from "lucide-react";
import { NameAnimationOverlay } from "@/components/magicui/hyper-text";
import { RESUME_DATA } from "@/data/resume-data";

interface BlogIndexUIProps {
  posts: BlogPost[];
}

export function BlogIndexUI({ posts }: BlogIndexUIProps) {
  // Force scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Background decorative blobs */}
      <div className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/5" />
      <div className="pointer-events-none fixed right-0 top-[20%] z-0 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/5" />

      {/* Name Animation Overlay - Same as homepage */}
      <NameAnimationOverlay
        name={RESUME_DATA.name}
        subtitle={RESUME_DATA.about}
        duration={1500}
      />

      {/* Main Blog Content */}
      <div className="container mx-auto mb-16 mt-12 max-w-4xl px-4 pb-20">
        <HoverNavbar
          navItems={[
            { name: "Back", icon: <ArrowLeftIcon className="h-5 w-5" />, href: "/" },
            { name: "Home", icon: <HomeIcon className="h-5 w-5" />, href: "/" },
            { name: "All Posts", icon: <ListIcon className="h-5 w-5" />, href: "/blog" },
          ]}
          showCommandMenu={false}
        />
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Blog</h1>
          <p className="text-muted-foreground">
            Articles and thoughts on AI, Machine Learning, and Software Engineering
          </p>
        </header>

        <AuthorInfo />

        <BlogGrid posts={posts} featuredCount={0} />
      </div>
    </>
  );
}