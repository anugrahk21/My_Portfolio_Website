"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useDragControls } from "motion/react";
import { Terminal as TerminalIcon, X } from "lucide-react";

const VALID_FLAGS = {
  "flag{w3lc0m3_t0_th3_s0urc3}": "FLAG 1 ACCEPTED! [HTML Source] +100 Hacker Points",
  "flag{c0ns0l3_h4ck3r_pr0}": "FLAG 2 ACCEPTED! [Developer Console] +100 Hacker Points",
};

export function HiddenTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [keyBuffer, setKeyBuffer] = useState("");
  const [history, setHistory] = useState<{ type: "input" | "output"; text: string }[]>([
    { type: "output", text: "Hello, Anugrah here... Welcome to my hidden subsystem.\nType 'help' to see available commands." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();

  // Listen for Konami Code ("sudo")
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen) return;
      if (document.getElementById("name-animation-overlay")) return;

      
      const newBuffer = (keyBuffer + e.key).slice(-4);
      setKeyBuffer(newBuffer);
      
      if (newBuffer.toLowerCase() === "sudo") {
        e.preventDefault();
        setIsOpen(true);
        setKeyBuffer("");
        // Ensure no leftover characters (like 'o') get caught in the input
        setTimeout(() => setInputValue(""), 150);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keyBuffer, isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue("");
      }
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const cmd = inputValue.trim();
    setHistory((prev) => [...prev, { type: "input", text: `visitor@portfolio:~$ ${cmd}` }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
    setInputValue("");

    const args = cmd.split(" ");
    const command = args[0].toLowerCase();

    let output = "";

    switch (command) {
      case "help":
        output = "Available commands: help, whoami, ls, cat <file>, submit <flag>, clear, exit";
        break;
      case "whoami":
        output = "visitor (unprivileged)";
        break;
      case "ls":
        if (args[1] === "-a" || args[1] === "-al" || args[1] === "-la") {
          output = "secret.txt  readme.md  hints.txt";
        } else {
          output = "secret.txt  readme.md";
        }
        break;
      case "cat":
        if (args[1] === "secret.txt") {
          output = "Wait... you found this? I knew you were a pro! But did you find the CTF flags hidden around the site? Try 'submit <flag>' if you find one.";
        } else if (args[1] === "readme.md") {
          output = "This is a portfolio built by Anugrah. Enjoy your stay!";
        } else if (args[1] === "hints.txt") {
          output = "HINT 1: Use Ctrl+U to look under the hood.\nHINT 2: Press F12 and look at the logs.\nHINT 3: Try to steal my content by copying text.\nHINT 4: Right-click might be dangerous.";
        } else {
          output = `cat: ${args[1] || ""}: No such file or directory`;
        }
        break;
      case "submit":
        const flag = args[1];
        if (!flag) {
          output = "Usage: submit <flag>";
        } else if (flag in VALID_FLAGS) {
          output = VALID_FLAGS[flag as keyof typeof VALID_FLAGS];
        } else {
          output = "INVALID FLAG.";
        }
        break;
      case "clear":
        setHistory([
          { type: "output", text: "Hello, Anugrah here... Welcome to my hidden subsystem.\nType 'help' to see available commands." }
        ]);
        return;
      case "exit":
        setIsOpen(false);
        return;
      default:
        output = `Command not found: ${command}`;
    }

    setHistory((prev) => [...prev, { type: "output", text: output }]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed left-0 right-0 top-24 z-[99999] mx-auto w-[95%] max-w-3xl rounded-xl"
        >
          <div className="flex h-[400px] flex-col overflow-hidden rounded-xl border border-red-300/50 dark:border-red-900/50 bg-white/30 dark:bg-black/40 backdrop-blur-md shadow-[0_0_40px_-10px_rgba(220,38,38,0.3)]">
            {/* Terminal Header */}
            <div 
              className="flex items-center justify-between border-b border-red-300/50 dark:border-red-900/50 bg-white/40 dark:bg-black/50 px-4 py-2 cursor-grab active:cursor-grabbing select-none touch-none"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <div className="flex items-center gap-2 text-red-600 dark:text-red-500 pointer-events-none">
                <TerminalIcon className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold">root@portfolio:~</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1 text-zinc-500 transition-colors hover:bg-red-100 dark:hover:bg-red-950 hover:text-red-600 dark:hover:text-red-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div 
              className="flex-1 overflow-y-auto p-4 font-mono text-sm sm:text-base text-red-600 dark:text-red-500 cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div key={i} className={`mb-1 break-words whitespace-pre-line ${line.type === "input" ? "text-zinc-600 dark:text-zinc-400" : "text-red-600 dark:text-red-500"}`}>
                  {line.text}
                </div>
              ))}
              
              <form onSubmit={handleCommand} className="mt-2 flex items-center">
                <span className="mr-2 text-zinc-600 dark:text-zinc-400 shrink-0">visitor@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-red-600 dark:text-red-500 outline-none w-full"
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
              <div ref={endOfMessagesRef} className="h-4" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
