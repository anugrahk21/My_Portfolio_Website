"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle } from "lucide-react";

export function IntrusionAlert() {
  const [isAlerting, setIsAlerting] = useState(false);

  useEffect(() => {
    const triggerAlert = (e: Event) => {
      e.preventDefault();
      setIsAlerting(true);
      
      // Auto dismiss after 2.5 seconds
      setTimeout(() => {
        setIsAlerting(false);
      }, 2500);
    };

    document.addEventListener("contextmenu", triggerAlert);
    document.addEventListener("copy", triggerAlert);

    return () => {
      document.removeEventListener("contextmenu", triggerAlert);
      document.removeEventListener("copy", triggerAlert);
    };
  }, []);

  return (
    <AnimatePresence>
      {isAlerting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-0 z-[999999] flex items-center justify-center"
        >
          {/* Blinking Red Background Overlay */}
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 0.4 }}
            className="absolute inset-0 bg-red-600/80 backdrop-blur-sm"
          />

          {/* Alert Content */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 0.4,
            }}
            className="relative z-10 flex flex-col items-center gap-6 text-center"
          >
            <AlertTriangle className="h-32 w-32 text-white" />
            <div className="flex flex-col gap-2">
              <h1 className="font-mono text-4xl font-bold tracking-widest text-white md:text-7xl">
                INTRUSION DETECTED
              </h1>
              <p className="font-mono text-lg text-red-200 md:text-3xl">
                UNAUTHORIZED ACTION BLOCKED
              </p>
            </div>
            
            <p className="mt-8 font-mono text-sm text-red-300 md:text-base">
              THIS INCIDENT HAS BEEN LOGGED.
            </p>
          </motion.div>
          
          {/* CRT Scanline effect overlay */}
          <div className="absolute inset-0 z-20 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
