"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  start?: boolean;
}

export function TypewriterText({ text, speed = 30, delay = 0, className = "", start = true }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!start) return;
    const timeout = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, start]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx >= text.length) {
        setIsTyping(false);
        clearInterval(interval);
        return;
      }
      setDisplayedText(text.substring(0, currentIdx + 1));
      currentIdx++;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, hasStarted]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block w-[2px] h-[1.2em] ml-[2px] bg-current align-middle -translate-y-[0.1em] opacity-70"
        style={{ visibility: hasStarted ? "visible" : "hidden" }}
      />
    </span>
  );
}
