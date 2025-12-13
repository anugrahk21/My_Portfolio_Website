"use client";

import React from "react";
import { BlogGrid, BlogPost } from "@/components/blog-card";
import { HoverNavbar } from "@/components/hover-navbar";
import { AuthorInfo } from "@/components/author-info";
import { ArrowLeftIcon, HomeIcon, BookOpenIcon } from "lucide-react";

interface BlogIndexUIProps {
  posts: BlogPost[];
}

export function BlogIndexUI({ posts }: BlogIndexUIProps) {
  return (
    <div className="container mx-auto mb-16 mt-12 max-w-4xl px-4 pb-20">
      <HoverNavbar
        navItems={[
          { name: "Back", icon: <ArrowLeftIcon className="h-5 w-5" />, href: "/" },
          { name: "Home", icon: <HomeIcon className="h-5 w-5" />, href: "/" },
          { name: "Blog", icon: <BookOpenIcon className="h-5 w-5" />, href: "/blog" },
        ]}
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
  );
}