"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    Bell,
    HelpCircle,
    Home,
    Trophy,
    FileQuestion,
    BarChart3,
    Mic2
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { label: "Dashboard", href: "/dashboard", icon: Home },
    { label: "Competitions", href: "/competitions", icon: Trophy },
    { label: "Mock Quiz", href: "/mock-quiz", icon: FileQuestion },
    { label: "Leaderboard", href: "/leaderboard", icon: BarChart3 },
    { label: "Speech", href: "/lil-champs/speech", icon: Mic2 },
] as const;

export function Navbar() {
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 w-full bg-white py-1 shadow-sm border-b-2 border-brand-primary/10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Nav Links Container */}
                    <div className="flex-1 flex items-center justify-start ml-[10%] lg:ml-[20%] gap-2 lg:gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <span className={cn(
                                    "flex items-center gap-2 text-[13px] font-extrabold transition-colors px-3 py-1.5 rounded-xl hover:bg-surface-bg whitespace-nowrap",
                                    pathname === link.href ? "text-brand-primary bg-surface-bg ring-2 ring-brand-primary/10" : "text-ink-secondary hover:text-brand-primary font-bold"
                                )}>
                                    <link.icon className="w-4 h-4 shrink-0" />
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Help, Notify, Auth */}
                    <div className="flex-1 flex items-center justify-end gap-2.5">
                        <button className="p-1.5 rounded-lg bg-surface-bg/50 text-ink-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
                            <HelpCircle className="w-4.5 h-4.5" />
                        </button>
                        <button className="p-1.5 rounded-lg bg-surface-bg/50 text-ink-secondary hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
                            <Bell className="w-4.5 h-4.5" />
                        </button>

                        <div className="h-6 w-px bg-brand-primary/10 mx-1 hidden sm:block" />

                        <Link href="/login">
                            <button className="px-4 py-2 rounded-xl text-sm font-extrabold text-brand-primary hover:bg-brand-primary/5 transition-all active:scale-95 whitespace-nowrap">
                                Log in
                            </button>
                        </Link>
                        <Link href="/register">
                            <button className="px-5 py-2 rounded-xl text-sm font-extrabold text-white bg-brand-accent shadow-button-a hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap">
                                Join Now!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
