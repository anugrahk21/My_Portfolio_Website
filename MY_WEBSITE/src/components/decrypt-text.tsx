"use client";

import { useEffect, useState, useRef } from "react";

interface DecryptTextProps {
    text: string;
    className?: string;
    speed?: number;
    autoStart?: boolean;
    triggerOnView?: boolean;
}

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function DecryptText({
    text,
    className = "",
    speed = 30,
    autoStart = false,
    triggerOnView = true
}: DecryptTextProps) {
    const [displayText, setDisplayText] = useState(text.split("").map(() => " "));
    const [hasDecrypted, setHasDecrypted] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const decrypt = () => {
        if (hasDecrypted) return;

        let iteration = 0;
        const maxIterations = text.length * 3;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                text.split("").map((char, index) => {
                    if (iteration > index * 3) {
                        return text[index];
                    }
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
            );

            if (iteration >= maxIterations) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
                setDisplayText(text.split(""));
                setHasDecrypted(true);
            }

            iteration += 1;
        }, speed);
    };

    useEffect(() => {
        if (autoStart) {
            decrypt();
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoStart]);

    useEffect(() => {
        if (!triggerOnView || !elementRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasDecrypted) {
                        decrypt();
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [triggerOnView, hasDecrypted]);

    return (
        <span ref={elementRef} className={className}>
            {displayText.join("")}
        </span>
    );
}
