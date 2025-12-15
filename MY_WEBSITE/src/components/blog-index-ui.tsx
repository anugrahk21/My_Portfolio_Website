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