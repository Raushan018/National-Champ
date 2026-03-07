"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Trophy,
    Users,
    BarChart3,
    Star,
    Sparkles,
    Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── Animated stats for the hero ────────────────────────────────────
const HERO_STATS = [
    { value: "50K+", label: "Students" },
    { value: "200+", label: "Competitions" },
    { value: "1,000+", label: "Schools" },
    { value: "98%", label: "Satisfaction" },
];

export function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-[72px]">
            {/* ── Background ──────────────────────────────────────── */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                {/* Main bg gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-surface-bg via-white to-surface-bg" />
                {/* Decorative blobs */}
                <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full bg-brand-primary/[0.06] blur-[120px]" />
                <div className="absolute top-40 right-[10%] w-[400px] h-[400px] rounded-full bg-brand-secondary/[0.05] blur-[100px]" />
                <div className="absolute bottom-0 left-[40%] w-[300px] h-[300px] rounded-full bg-brand-accent/[0.04] blur-[80px]" />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.35]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(79,70,229,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.06) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 lg:pb-36">
                {/* ── Announcement badge ─────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-brand-primary/[0.08] border border-brand-primary/20 text-brand-primary">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary text-white">
                            <Sparkles className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs font-semibold">2026 Season Now Open</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                </motion.div>

                {/* ── Main heading ───────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center max-w-4xl mx-auto mb-8"
                >
                    <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] tracking-tight text-ink-primary text-balance">
                        Where{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_4s_ease_infinite]">
                                Champions
                            </span>
                            {/* Subtle underline accent */}
                            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" preserveAspectRatio="none">
                                <path d="M0 7 Q 50 0, 100 4 Q 150 8, 200 1" stroke="url(#hero-underline)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="hero-underline" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#4F46E5" />
                                        <stop offset="100%" stopColor="#06B6D4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>{" "}
                        Are Made
                    </h1>
                </motion.div>

                {/* ── Subtitle ───────────────────────────────────────── */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-center text-lg sm:text-xl text-ink-secondary max-w-2xl mx-auto mb-10 text-pretty leading-relaxed"
                >
                    The premiere competition platform for students. Participate in national-level championships, showcase your talent, and rise to the top.
                </motion.p>

                {/* ── CTA buttons ────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16"
                >
                    <Link href="/register">
                        <button className="group relative px-8 py-4 rounded-xl text-[15px] font-semibold text-white overflow-hidden shadow-xl shadow-brand-primary/25 hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </div>
                            <span className="relative z-10 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                Get Started Free
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </span>
                        </button>
                    </Link>

                    <Link href="/competitions">
                        <button className="group px-8 py-4 rounded-xl text-[15px] font-semibold text-ink-primary bg-white border border-surface-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                            <span className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-brand-accent" />
                                Browse Competitions
                            </span>
                        </button>
                    </Link>
                </motion.div>

                {/* ── Stats bar ──────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    className="flex justify-center"
                >
                    <div className="inline-flex items-center gap-6 sm:gap-10 px-8 py-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-surface-border/70 shadow-card-lg">
                        {HERO_STATS.map((stat, i) => (
                            <React.Fragment key={stat.label}>
                                {i > 0 && <div className="w-px h-10 bg-surface-border hidden sm:block" />}
                                <div className="text-center">
                                    <p className="font-heading font-bold text-xl sm:text-2xl text-ink-primary">{stat.value}</p>
                                    <p className="text-xs sm:text-sm text-ink-secondary mt-0.5">{stat.label}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Gradient CSS animation */}
            <style jsx global>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
        </section>
    );
}
