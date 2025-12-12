"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

interface AnimatedGradientBorderProps {
    children: React.ReactNode;
    containerClassName?: string;
    href?: string;
    badge?: {
        text: string;
        className?: string;
    };
    showArrowButton?: boolean;
}

export function AnimatedGradientBorder({
    children,
    containerClassName = "",
    href,
    badge,
    showArrowButton = true,
}: AnimatedGradientBorderProps) {
    const content = (
        <div className={`relative block cursor-pointer rounded-lg p-[2px] shadow-sm transition-all duration-300 hover:scale-[1.01] ${containerClassName}`}>
            {/* Custom animated shine border effect - thinner and more translucent */}
            <div
                className="absolute inset-0 overflow-hidden rounded-lg"
                style={{
                    background:
                        "linear-gradient(45deg, rgba(79, 70, 229, 0.6), rgba(236, 72, 153, 0.6), rgba(139, 92, 246, 0.6))",
                    maskImage:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskImage:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "2px",
                    zIndex: 0,
                    animation: "gradientShift 6s linear infinite",
                }}
            />

            {/* Shine animation overlay */}
            <div
                className="absolute inset-0 overflow-hidden rounded-lg"
                style={{ zIndex: 0 }}
            >
                <div
                    className="absolute inset-[-100%] animate-[shine_3s_linear_infinite]"
                    style={{
                        background:
                            "conic-gradient(from 0deg, transparent 0 210deg, rgba(255, 255, 255, 0.5), transparent 330deg 360deg)",
                        transform: "rotate(-45deg)",
                    }}
                />
            </div>

            <style jsx>{`
        @keyframes gradientShift {
          0% {
            background: linear-gradient(
              45deg,
              rgba(79, 70, 229, 0.6),
              rgba(236, 72, 153, 0.6),
              rgba(139, 92, 246, 0.6)
            );
          }
          33% {
            background: linear-gradient(
              45deg,
              rgba(139, 92, 246, 0.6),
              rgba(79, 70, 229, 0.6),
              rgba(236, 72, 153, 0.6)
            );
          }
          66% {
            background: linear-gradient(
              45deg,
              rgba(236, 72, 153, 0.6),
              rgba(139, 92, 246, 0.6),
              rgba(79, 70, 229, 0.6)
            );
          }
          100% {
            background: linear-gradient(
              45deg,
              rgba(79, 70, 229, 0.6),
              rgba(236, 72, 153, 0.6),
              rgba(139, 92, 246, 0.6)
            );
          }
        }
      `}</style>

            <div className="relative z-10 rounded-lg bg-card">
                {/* Arrow button in top right corner */}
                {showArrowButton && (
                    <div className="absolute -right-2 -top-2 z-20">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-300 text-white shadow-sm transition-transform duration-300 hover:scale-110">
                            <ArrowUpRightIcon className="h-4 w-4" />
                        </div>
                    </div>
                )}

                {/* Optional badge */}
                {badge && (
                    <div className="absolute left-3 top-3 z-20">
                        <span
                            className={
                                badge.className ||
                                "rounded-md bg-blue-100 px-2 py-1 text-[10px] font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            }
                        >
                            {badge.text}
                        </span>
                    </div>
                )}

                {children}
            </div>
        </div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
}
