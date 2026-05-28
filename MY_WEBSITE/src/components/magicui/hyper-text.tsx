"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CharacterSet = string[] | readonly string[];

interface HyperTextProps extends MotionProps {
  /** The text content to be animated */
  children: string;
  /** Optional className for styling */
  className?: string;
  /** Duration of the animation in milliseconds */
  duration?: number;
  /** Delay before animation starts in milliseconds */
  delay?: number;
  /** Component to render as - defaults to div */
  as?: React.ElementType;
  /** Whether to start animation when element comes into view */
  startOnView?: boolean;
  /** Whether to trigger animation on hover */
  animateOnHover?: boolean;
  /** Custom character set for scramble effect. Defaults to uppercase alphabet */
  characterSet?: CharacterSet;
}

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
) as readonly string[];

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
  ...props
}: HyperTextProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayText, setDisplayText] = useState<string[]>(() =>
    children.split(""),
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationCount = useRef(0);
  const elementRef = useRef<HTMLElement>(null);

  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
  };

  // Handle animation start based on view or delay
  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsAnimating(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  // Handle scramble animation
  useEffect(() => {
    if (!isAnimating) return;

    const maxIterations = children.length;
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      iterationCount.current = progress * maxIterations;

      setDisplayText((currentText) =>
        currentText.map((letter, index) =>
          letter === " "
            ? letter
            : index <= iterationCount.current
              ? children[index]
              : characterSet[getRandomInt(characterSet.length)],
        ),
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [children, duration, isAnimating, characterSet]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("overflow-hidden py-2 text-4xl font-bold", className)}
      onMouseEnter={handleAnimationTrigger}
      {...props}
    >
      <AnimatePresence>
        {displayText.map((letter, index) => (
          <motion.span
            key={index}
            className={cn("font-mono", letter === " " ? "w-3" : "")}
          >
            {letter.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </MotionComponent>
  );
}

// Reusable Name Animation Overlay Component

const SECURITY_QUESTIONS = [
  { hint: "Hint: Default SSH port", answer: "22" },
  { hint: "Hint: Default HTTPS port", answer: "443" },
  { hint: "Hint: HTTP status code for 'Not Found'", answer: "404" },
];

interface NameAnimationOverlayProps {
  name: string;
  subtitle: string;
  duration?: number;
  onComplete?: () => void;
  requireKey?: boolean;
  sessionKey?: string;
}

export function NameAnimationOverlay({
  name,
  subtitle,
  duration = 2500,
  onComplete,
  requireKey = true,
  sessionKey = "unlocked"
}: NameAnimationOverlayProps) {
  const [stage, setStage] = useState<'name' | 'lock' | 'kidding' | 'done'>('name');
  const [inputValue, setInputValue] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showError, setShowError] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    setQuestionIndex(Math.floor(Math.random() * SECURITY_QUESTIONS.length));
  }, []);

  useEffect(() => {
    if (sessionKey && sessionStorage.getItem(sessionKey) === "true") {
      setSkipAnimation(true);
      setStage('done');
      onComplete?.();
    }
  }, [sessionKey, onComplete]);

  useEffect(() => {
    if (stage === 'name' && !skipAnimation) {
      const timer = setTimeout(() => {
        if (requireKey) {
          setStage('lock');
        } else {
          if (sessionKey) sessionStorage.setItem(sessionKey, "true");
          setStage('done');
          onComplete?.();
        }
      }, duration);
      return () => clearTimeout(timer);
    }

    if (stage === 'kidding') {
      if (sessionKey) sessionStorage.setItem(sessionKey, "true");
      window.scrollTo({ top: 0, behavior: "smooth" });
      const timer = setTimeout(() => {
        setStage('done');
        onComplete?.();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [stage, duration, skipAnimation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Allow access if password is correct or after 3 failed attempts
    if (inputValue === SECURITY_QUESTIONS[questionIndex].answer || attempts >= 2) {
      setStage('kidding');
    } else {
      setAttempts((prev) => prev + 1);
      setShowError(true);
      setTimeout(() => setShowError(false), 500);
      setInputValue("");
    }
  };

  const nameWords = name.split(" ");

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          key="overlay-bg"
          id="name-animation-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: skipAnimation ? 0 : 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/30 backdrop-blur-xl"
        >
          <div className="relative w-full max-w-2xl px-4 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            <AnimatePresence mode="wait">
              {stage === 'name' && (
                <motion.div
                  key="name-screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {/* Name with HyperText animation */}
                  <div className="relative flex flex-wrap justify-center gap-x-4 text-center text-4xl font-bold sm:text-6xl lg:text-9xl">
                    {nameWords.map((word, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <HyperText className="text-4xl font-bold text-foreground sm:text-6xl lg:text-9xl">
                          {word}
                        </HyperText>
                      </motion.div>
                    ))}
                  </div>

                  {/* Subtitle with HyperText */}
                  <motion.div
                    className="text-center md:mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <HyperText className="text-sm tracking-wide text-foreground">
                      {subtitle}
                    </HyperText>
                  </motion.div>
                </motion.div>
              )}

              {stage === 'lock' && (
                <motion.div
                  key="lock-screen"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="mx-auto flex w-full max-w-md flex-col items-center gap-8 rounded-3xl border border-red-500/20 bg-gradient-to-br from-white/60 to-red-100/60 p-8 shadow-[0_4px_30px_rgba(220,38,38,0.06)] backdrop-blur-xl dark:border-red-900/30 dark:from-black/40 dark:to-red-950/20 dark:shadow-[0_4px_30px_rgba(220,38,38,0.05)] sm:p-12"
                >
                  <div className="text-foreground">
                    <HyperText className="text-2xl font-bold md:text-4xl text-red-600 dark:text-red-500" duration={1000}>
                      SYSTEM LOCKED
                    </HyperText>
                  </div>

                  <p className="font-mono text-xs tracking-widest text-muted-foreground md:text-sm">
                    ENTER DECRYPTION KEY
                  </p>

                  <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
                    <motion.div
                      className="relative w-full"
                      animate={showError ? { x: [-10, 10, -10, 10, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <input
                        type="password"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        autoFocus
                        placeholder="KEY..."
                        className={cn(
                          "w-full rounded-xl border bg-white/50 px-4 py-4 font-mono text-xl text-center outline-none transition-all focus:ring-2 focus:ring-red-400 dark:bg-black/50 dark:focus:ring-red-900",
                          showError ? "border-red-500 text-red-500" : "border-red-200/50 text-foreground dark:border-red-900/30"
                        )}
                      />
                    </motion.div>
                    <button type="submit" className="hidden" />
                  </form>

                  <div className="flex h-8 flex-col items-center justify-center font-mono text-xs md:text-sm">
                    {showError ? (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-bold text-red-500"
                      >
                        ACCESS DENIED
                      </motion.p>
                    ) : (
                      <p className="text-muted-foreground/70">{SECURITY_QUESTIONS[questionIndex].hint}</p>
                    )}
                  </div>
                </motion.div>
              )}

              {stage === 'kidding' && (
                <motion.div
                  key="kidding-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-4"
                >
                  <HyperText className="text-3xl font-bold text-red-600 dark:text-red-500 md:text-5xl" duration={800}>
                    JUST KIDDING
                  </HyperText>
                  <p className="font-mono text-sm tracking-widest text-muted-foreground md:text-base">
                    WELCOME IN
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
