"use client";

import React from "react";
import { Search, Bell, HelpCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TopbarProps {
    title?: string;
    description?: string;
    actions?: React.ReactNode;
    className?: string;
}

export function Topbar({ title, description, actions, className }: TopbarProps) {
    return (
        <motion.header
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
                "sticky top-0 z-30 flex items-center justify-between",
                "h-16 px-6 bg-surface-card/80 backdrop-blur-md",
                "border-b border-surface-border",
                className
            )}
        >
            {/* Left — page meta */}
            <div className="flex flex-col min-w-0">
                {title && (
                    <h1 className="font-heading font-semibold text-base text-ink-primary leading-tight truncate">
                        {title}
                    </h1>
                )}
                {description && (
                    <p className="text-xs text-ink-secondary truncate">{description}</p>
                )}
            </div>

            {/* Center — search */}
            <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs mx-8">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-tertiary pointer-events-none" />
                    <input
                        type="search"
                        placeholder="Search competitions, participants…"
                        className={cn(
                            "w-full pl-9 pr-4 py-2 text-sm rounded-lg",
                            "bg-surface-bg border border-surface-border",
                            "text-ink-primary placeholder:text-ink-tertiary",
                            "transition-all duration-150",
                            "focus:outline-none focus:border-brand-primary focus:shadow-glow focus:bg-surface-card"
                        )}
                    />
                    <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono text-ink-tertiary bg-surface-border border border-surface-border-strong">
                        ⌘K
                    </kbd>
                </div>
            </div>

            {/* Right — actions + user menu */}
            <div className="flex items-center gap-2 shrink-0">
                {/* Custom actions slot */}
                {actions}

                {/* Help */}
                <button
                    className="p-2 rounded-lg text-ink-secondary hover:bg-surface-hover hover:text-ink-primary transition-all duration-150"
                    aria-label="Help"
                >
                    <HelpCircle className="w-5 h-5" />
                </button>

                {/* Notifications */}
                <div className="relative">
                    <button
                        className="p-2 rounded-lg text-ink-secondary hover:bg-surface-hover hover:text-ink-primary transition-all duration-150"
                        aria-label="Notifications"
                    >
                        <Bell className="w-5 h-5" />
                    </button>
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger border-2 border-white" />
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-surface-border mx-1" />

                {/* User menu */}
                <button className="flex items-center gap-2.5 pl-1 pr-2 py-1 rounded-lg hover:bg-surface-hover transition-all duration-150">
                    <Avatar name="Admin User" size="sm" status="online" />
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-sm font-medium text-ink-primary leading-tight">Admin</span>
                        <span className="text-xs text-ink-secondary leading-tight">Super Admin</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-ink-tertiary hidden md:block" />
                </button>
            </div>
        </motion.header>
    );
}
