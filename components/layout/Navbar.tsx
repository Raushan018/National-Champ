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
            className="sticky top-0 z-50 w-full border-b border-brand-primary/10 bg-white/90 py-2 shadow-sm backdrop-blur-xl"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Nav Links Container */}
                    <div className="flex flex-1 items-center justify-start gap-1 rounded-2xl bg-surface-bg/70 p-1 ml-[8%] lg:ml-[16%] lg:gap-2">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <span className={cn(
                                    "group relative flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-[16px] font-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-brand-primary",
                                    pathname === link.href
                                        ? "bg-white text-brand-primary shadow-sm ring-1 ring-brand-primary/10"
                                        : "text-ink-secondary"
                                )}>
                                    <link.icon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                                    {link.label}
                                    {pathname === link.href && <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-brand-accent" />}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Help, Notify, Auth */}
                    <div className="flex flex-1 items-center justify-end gap-2.5 pl-3">
                        <button aria-label="Help" title="Help" className="rounded-xl bg-surface-bg/70 p-2 text-ink-secondary transition-all hover:-translate-y-0.5 hover:bg-brand-primary/10 hover:text-brand-primary">
                            <HelpCircle className="h-5 w-5" />
                        </button>
                        <button aria-label="Notifications" title="Notifications" className="rounded-xl bg-surface-bg/70 p-2 text-ink-secondary transition-all hover:-translate-y-0.5 hover:bg-brand-primary/10 hover:text-brand-primary">
                            <Bell className="h-5 w-5" />
                        </button>

                        <div className="h-6 w-px bg-brand-primary/10 mx-1 hidden sm:block" />

                        <Link href="/login">
                            <button className="px-4 py-2 rounded-xl text-[16px] font-black text-brand-primary hover:bg-brand-primary/5 transition-all active:scale-95 whitespace-nowrap">
                                Log in
                            </button>
                        </Link>
                        <Link href="/register">
                            <button className="whitespace-nowrap rounded-xl bg-brand-accent px-5 py-2 text-[16px] font-black text-white shadow-button-a transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                                Join Now!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
