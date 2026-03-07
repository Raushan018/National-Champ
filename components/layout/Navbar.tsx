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
                    {/* 20% Left Alignment Spacer */}
                    <div className="flex-[0.2] hidden md:block" />

                    {/* Nav Links */}
                    <div className="flex-1 flex items-center justify-start gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <span className={cn(
                                    "flex items-center gap-2 text-sm font-black transition-colors px-3 py-1.5 rounded-xl hover:bg-surface-bg",
                                    pathname === link.href ? "text-brand-primary bg-surface-bg" : "text-ink-secondary hover:text-brand-primary"
                                )}>
                                    <link.icon className="w-4 h-4" />
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Help, Notify, Auth */}
                    <div className="flex-1 flex items-center justify-end gap-3">
                        <button className="p-2 rounded-xl bg-surface-bg text-brand-primary hover:bg-brand-primary/10 transition-all border-2 border-transparent hover:border-brand-primary/10">
                            <HelpCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-xl bg-surface-bg text-brand-primary hover:bg-brand-primary/10 transition-all border-2 border-transparent hover:border-brand-primary/10 mr-1">
                            <Bell className="w-5 h-5" />
                        </button>

                        <Link href="/login">
                            <button className="px-5 py-2 rounded-xl text-base font-black text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-all transform active:scale-95">
                                Log in
                            </button>
                        </Link>
                        <Link href="/register">
                            <button className="px-6 py-2 rounded-xl text-base font-black text-white bg-brand-accent shadow-button-a hover:-translate-y-0.5 active:translate-y-0 transition-all transform">
                                Join Now!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
