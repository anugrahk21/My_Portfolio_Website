import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  // If empty ID or "home" or "top", scroll to absolute top
  if (!id || id === "home" || id === "top" || id === "") {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop - 20, // Adding a small offset for better visibility
      behavior: "smooth"
    });
  } else {
    // If element not found, scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
