"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  HomeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  FileTextIcon,
  CommandIcon,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ThemeToggle } from "./theme-toggle";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  href: string;
}

interface NavbarProps {
  links?: { url: string; title: string }[];
  navItems?: NavItem[];
  showCommandMenu?: boolean;
}

export function HoverNavbar({ links = [], navItems: customNavItems, showCommandMenu = true }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Command menu keyboard shortcut
  React.useEffect(() => {
    if (!showCommandMenu) return;

    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [showCommandMenu]);

  const defaultNavItems = [
    { name: "Home", icon: <HomeIcon className="h-5 w-5" />, href: "/#top" },
    {
      name: "About",
      icon: <FileTextIcon className="h-5 w-5" />,
      href: "/#about",
    },
    {
      name: "Projects",
      icon: <BriefcaseIcon className="h-5 w-5" />,
      href: "/#projects",
    },
    { name: "Blog", icon: <BookOpenIcon className="h-5 w-5" />, href: "/blog" },
    {
      name: "Education",
      icon: <GraduationCapIcon className="h-5 w-5" />,
      href: "/#education",
    },
  ];

  const navItems = customNavItems || defaultNavItems;

  // Handle navigation and smooth scrolling
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      scrollToSection(href.substring(1));
    } else if (href.startsWith("/#")) {
      // Check if already on home page
      const isOnHomePage = window.location.pathname === "/";

      if (isOnHomePage) {
        // Already on home page, just scroll directly
        scrollToSection(href.substring(2));
      } else {
        // Navigate to home page first, then scroll
        router.push("/");
        setTimeout(() => {
          scrollToSection(href.substring(2));
        }, 100);
      }
    } else {
      // Use Next.js router for client-side navigation
      router.push(href);
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-2 md:pb-4"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-full border border-gray-200 bg-white/70 shadow-lg backdrop-blur-md dark:border-border dark:bg-card/80"
      >
        <nav className="flex items-center space-x-1 px-4 py-2 md:space-x-2 md:py-2.5">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center gap-1 rounded-full px-2 py-1.5 text-xs font-medium transition-all hover:bg-gray-100 dark:hover:bg-muted md:flex-row md:gap-2 md:px-3 md:py-2 md:text-sm"
              asChild
            >
              <a
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
              >
                {item.icon}
                <span className="hidden xs:inline md:inline">{item.name}</span>
              </a>
            </Button>
          ))}

          {/* Command menu button */}
          {showCommandMenu && (
            <Button
              onClick={() => setOpen(true)}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center gap-1 rounded-full px-2 py-1.5 text-xs font-medium transition-all hover:bg-gray-100 dark:hover:bg-muted md:flex-row md:gap-2 md:px-3 md:py-2 md:text-sm"
            >
              <CommandIcon className="h-5 w-5" />
              <span className="hidden xs:inline md:inline">Menu</span>
            </Button>
          )}

          <div className="ml-1 md:ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </motion.div>

      {/* Command Dialog */}
      {showCommandMenu && (
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            {/* Actions at the top */}
            <CommandGroup heading="Actions">
              <CommandItem
                value="print"
                keywords={["print", "pdf", "export"]}
                onSelect={() => {
                  setOpen(false);
                  window.print();
                }}
              >
                <span>Print</span>
              </CommandItem>
            </CommandGroup>

            {/* Links second */}
            {links.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup heading="Links">
                  {links.map(({ url, title }) => (
                    <CommandItem
                      key={url}
                      value={title}
                      keywords={[title.toLowerCase()]}
                      onSelect={() => {
                        setOpen(false);
                        window.open(url, "_blank");
                      }}
                    >
                      <span>{title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}

            <CommandSeparator />

            {/* Navigation at the bottom - filter out items that are already in links */}
            <CommandGroup heading="Navigation">
              {navItems
                .filter((item) => !links.some((link) => link.title.toLowerCase() === item.name.toLowerCase()))
                .map((item) => (
                  <CommandItem
                    key={item.name}
                    value={item.name}
                    keywords={[item.name.toLowerCase(), item.href.replace('#', '')]}
                    onSelect={() => {
                      setOpen(false);
                      // Use same navigation logic as navbar
                      if (item.href.startsWith("#")) {
                        scrollToSection(item.href.substring(1));
                      } else if (item.href.startsWith("/#")) {
                        // Check if already on home page
                        const isOnHomePage = window.location.pathname === "/";
                        if (isOnHomePage) {
                          // Already on home page, just scroll directly
                          scrollToSection(item.href.substring(2));
                        } else {
                          // Navigate to home page first, then scroll
                          router.push("/");
                          setTimeout(() => {
                            scrollToSection(item.href.substring(2));
                          }, 100);
                        }
                      } else {
                        // Use Next.js router for client-side navigation
                        router.push(item.href);
                      }
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      )}
    </div>
  );
}
