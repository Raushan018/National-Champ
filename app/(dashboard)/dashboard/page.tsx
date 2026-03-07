"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Trophy,
    Star,
    Target,
    BookOpen,
    TrendingUp,
    Medal,
    GraduationCap,
    Clock,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Mock Data for Kids ────────────────────────────────────────── */
const STATS = [
    { label: "My Score", value: "850", icon: Trophy, color: "bg-brand-primary", shadow: "shadow-[0_8px_0_0_#3A83D8]", unit: "pts" },
    { label: "Rank", value: "#12", icon: Star, color: "bg-brand-secondary", shadow: "shadow-[0_8px_0_0_#E6C100]", unit: "National" },
    { label: "Challenges", value: "8/12", icon: BookOpen, color: "bg-brand-purple", shadow: "shadow-[0_8px_0_0_#8B5CF6]", unit: "Done" },
    { label: "Progress", value: "72%", icon: Target, color: "bg-brand-success", shadow: "shadow-[0_8px_0_0_#3BB550]", unit: "Super!" },
];

const STUDENTS = [
    { name: "Aarav Sharma", score: 980, progress: 95, color: "bg-brand-primary" },
    { name: "Priya Patel", score: 920, progress: 88, color: "bg-brand-accent" },
    { name: "Rohan Gupta", score: 850, progress: 72, color: "bg-brand-success" },
    { name: "Ishaan Singh", score: 810, progress: 65, color: "bg-brand-purple" },
    { name: "Sanya Roy", score: 790, progress: 60, color: "bg-brand-secondary" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-10 pb-12">

            {/* ── Welcome Header ──────────────────────────────────────── */}
            <header className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 sm:p-8 rounded-3xl border-4 border-brand-primary/10 shadow-card">
                <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-brand-primary flex items-center justify-center text-white text-3xl shadow-button-p -rotate-3 overflow-hidden">
                            {/* Cartoon Avatar Placeholder */}
                            <span className="text-4xl opacity-80">👦</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-brand-success rounded-full flex items-center justify-center border-2 border-white shadow-md animate-bounce">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-heading font-black text-3xl text-ink-primary mb-1">
                            Hi Champion! 🎉
                        </h1>
                        <p className="text-xl text-ink-secondary font-bold">
                            Ready for your next challenge? 🧠✨
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 rounded-2xl bg-brand-primary text-white font-black text-lg shadow-button-p hover:-translate-y-1 active:translate-y-0.5 transition-all">
                        Daily Quiz! 🎯
                    </button>
                </div>
            </header>

            {/* ── Stat Cards ─────────────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {STATS.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
                        className={cn(
                            "relative p-6 rounded-3xl bg-white border-4 border-brand-primary/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 shadow-card"
                        )}
                    >
                        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg", stat.color)}>
                            <stat.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-ink-secondary font-black text-sm uppercase tracking-widest mb-1">{stat.label}</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-heading font-black text-ink-primary">{stat.value}</span>
                            <span className="text-lg font-bold text-ink-tertiary">{stat.unit}</span>
                        </div>

                        {/* Decorative background shape */}
                        <div className={cn("absolute -bottom-10 -right-10 w-24 h-24 rounded-full opacity-10 blur-xl", stat.color)} />
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* ── Progress Tracking ──────────────────────────────────── */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white p-8 rounded-3xl border-4 border-brand-secondary/20 shadow-card relative overflow-hidden">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="font-heading font-black text-2xl text-ink-primary">My Learning Journey 🚀</h2>
                                <p className="text-base text-ink-tertiary font-bold">You are doing great!</p>
                            </div>
                            <div className="p-3 bg-brand-secondary/10 rounded-2xl">
                                <TrendingUp className="w-8 h-8 text-brand-secondary" />
                            </div>
                        </div>

                        {/* Fun Progress Bars */}
                        <div className="space-y-8">
                            {[
                                { label: "Maths Wizardry 🪄", val: 85, color: "bg-brand-primary" },
                                { label: "Grammar Power 📖", val: 65, color: "bg-brand-purple" },
                                { label: "Code Crafting 💻", val: 45, color: "bg-brand-accent" }
                            ].map(p => (
                                <div key={p.label} className="space-y-2">
                                    <div className="flex justify-between items-center text-lg font-black text-ink-primary">
                                        <span>{p.label}</span>
                                        <span className="text-brand-primary">{p.val}%</span>
                                    </div>
                                    <div className="h-6 bg-surface-bg rounded-full border-2 border-brand-primary/5 p-1 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${p.val}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className={cn("h-full rounded-full shadow-inner relative", p.color)}
                                        >
                                            {/* Shimmer overlay */}
                                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Fun Competition Row */}
                    <div className="bg-brand-accent p-8 rounded-3xl text-white flex flex-col sm:flex-row items-center gap-8 shadow-button-a border-4 border-white group cursor-pointer hover:-translate-y-1 transition-transform">
                        <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center-shrink-0 -rotate-3 group-hover:rotate-0 transition-transform">
                            <Rocket className="w-12 h-12 text-brand-accent animate-pulse" />
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="font-heading font-black text-2xl mb-1">New Arena Unlocked! 🔓</h3>
                            <p className="text-lg font-bold text-white/90 mb-4">Space Exploration GK Challenge is live!</p>
                            <button className="px-8 py-3 bg-white text-brand-accent rounded-xl text-lg font-black shadow-lg hover:bg-brand-success hover:text-white transition-colors flex items-center gap-2">
                                Leap into Action! <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Leaderboard Mini ───────────────────────────────────── */}
                <aside className="bg-white p-8 rounded-3xl border-4 border-brand-purple/20 shadow-card">
                    <h3 className="font-heading font-black text-xl text-ink-primary mb-6 flex items-center gap-3">
                        <Medal className="w-6 h-6 text-brand-purple" />
                        Top Explorers
                    </h3>
                    <div className="space-y-3">
                        {STUDENTS.map((s, idx) => (
                            <div
                                key={s.name}
                                className={cn(
                                    "flex items-center gap-3 p-3 rounded-2xl transition-all",
                                    idx === 2 ? "bg-brand-purple/10 border-2 border-brand-purple/20" : "hover:bg-surface-bg"
                                )}
                            >
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-black shadow-sm", s.color)}>
                                    {s.name[0]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-black text-ink-primary truncate text-sm">{s.name}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                                            <div className={cn("h-full", s.color)} style={{ width: `${s.progress}%` }} />
                                        </div>
                                        <span className="text-[10px] font-black text-ink-tertiary">{s.score}</span>
                                    </div>
                                </div>
                                {idx < 3 && (
                                    <span className="text-xl">
                                        {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-3 rounded-xl border-2 border-brand-purple/20 text-brand-purple font-black text-base hover:bg-brand-purple hover:text-white transition-all">
                        View Full List
                    </button>
                </aside>

            </div>
        </div>
    );
}
