"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Twitter, Linkedin, Facebook, MessageCircle, Link2, Check, Github, Mail } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

interface ShareButtonsProps {
    title: string;
    url: string;
    description?: string;
}

export function ShareButtons({ title, url, description = "" }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    // Custom messages for each platform
    const twitterMessage = `Just read an interesting article: "${title}" 🚀`;
    const whatsappMessage = `Hey! Check out this article I found:\n\n*${title}* 📖\n\n${url}`;
    const facebookQuote = description || `"${title}"`;

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterMessage)}&url=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(facebookQuote)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`,
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="my-8 rounded-xl border border-border p-6">
            {/* Author Info */}
            <div className="mb-6 flex items-center justify-between border-b border-muted pb-4">
                <div>
                    <p className="text-sm font-semibold">Written by</p>
                    <p className="text-lg font-bold text-primary">{RESUME_DATA.name}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        asChild
                    >
                        <a
                            href="https://github.com/anugrahk21"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        asChild
                    >
                        <a
                            href="https://www.linkedin.com/in/anugrah-k"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                        >
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        asChild
                    >
                        <a
                            href="mailto:anugrah.k910@gmail.com"
                            title="Email"
                        >
                            <Mail className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
                <Share2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Share this article</h3>
            </div>

            <div className="flex flex-wrap gap-3">
                {/* Twitter/X */}
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/30 hover:text-[#1DA1F2] transition-colors"
                    onClick={() => window.open(shareLinks.twitter, "_blank", "noopener,noreferrer")}
                >
                    <Twitter className="h-4 w-4" />
                    <span className="hidden sm:inline">Twitter</span>
                </Button>

                {/* LinkedIn */}
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:text-[#0A66C2] transition-colors"
                    onClick={() => window.open(shareLinks.linkedin, "_blank", "noopener,noreferrer")}
                >
                    <Linkedin className="h-4 w-4" />
                    <span className="hidden sm:inline">LinkedIn</span>
                </Button>

                {/* Facebook */}
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 hover:text-[#1877F2] transition-colors"
                    onClick={() => window.open(shareLinks.facebook, "_blank", "noopener,noreferrer")}
                >
                    <Facebook className="h-4 w-4" />
                    <span className="hidden sm:inline">Facebook</span>
                </Button>

                {/* WhatsApp */}
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 hover:text-[#25D366] transition-colors"
                    onClick={() => window.open(shareLinks.whatsapp, "_blank", "noopener,noreferrer")}
                >
                    <MessageCircle className="h-4 w-4" />
                    <span className="hidden sm:inline">WhatsApp</span>
                </Button>

                {/* Copy Link */}
                <Button
                    variant="outline"
                    size="sm"
                    className={`flex items-center gap-2 transition-colors ${copied
                        ? "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400"
                        : "hover:bg-primary/10 hover:border-primary/30"
                        }`}
                    onClick={copyToClipboard}
                >
                    {copied ? (
                        <>
                            <Check className="h-4 w-4" />
                            <span className="hidden sm:inline">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Link2 className="h-4 w-4" />
                            <span className="hidden sm:inline">Copy Link</span>
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
