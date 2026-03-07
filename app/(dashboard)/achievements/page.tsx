"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Trophy,
    Star,
    Medal,
    Sparkles,
    Rocket,
    Brain,
    Target,
    Heart,
    Zap,
    Crown
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Badge Data ─────────────────────────────────────────────────── */
const BADGES = [
    { name: "Quiz Champion 🏆", desc: "Won 5 quizzes in a row!", color: "bg-brand-secondary", icon: Trophy, unlocked: true },
    { name: "Brain Master 🧠", desc: "Scored 100% in any challenge!", color: "bg-brand-purple", icon: Brain, unlocked: true },
    { name: "Fast Finisher 🚀", desc: "Finished a quiz in under 5 minutes!", color: "bg-brand-accent", icon: Zap, unlocked: true },
    { name: "Top Performer ⭐", desc: "Reached the Top 10 National Rank!", color: "bg-brand-primary", icon: Star, unlocked: false },
    { name: "Daily Hero ☀️", desc: "Logged in for 7 days straight!", color: "bg-brand-success", icon: Target, unlocked: false },
    { name: "Heart of Gold ❤️", desc: "Helped a friend in the community!", color: "bg-pink-400", icon: Heart, unlocked: true },
];

export default function AchievementsPage() {
    return (
        <div className="space-y-12 pb-12">

            {/* ── Header ────────────────────────────────────────────── */}
            <div className="bg-brand-purple p-12 sm:p-20 rounded-[60px] text-center border-8 border-white shadow-button-p relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 p-10 opacity-20 rotate-12 group-hover:rotate-0 transition-transform">
                    <Sparkles className="w-48 h-48 text-white" />
                </div>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center text-brand-purple mx-auto mb-8 shadow-xl -rotate-6">
                        <Medal className="w-12 h-12" />
                    </div>
                    <h1 className="font-heading font-black text-5xl sm:text-6xl text-white mb-6"> My Super Badges! ✨</h1>
                    <p className="text-2xl text-white/90 font-bold max-w-2xl mx-auto">
                        Collect them all to become the Ultimate Arena Champion! Which one will you unlock next?
                    </p>
                </motion.div>
            </div>

            {/* ── Progress Section ───────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2 bg-white p-12 rounded-[60px] border-8 border-brand-primary/10 shadow-card">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="font-heading font-black text-3xl text-ink-primary">Trophy Progress 📊</h2>
                        <div className="px-6 py-2 bg-brand-primary text-white rounded-full font-black">4 / 6 Unlocked</div>
                    </div>

                    <div className="space-y-4">
                        <div className="h-10 bg-surface-bg rounded-full border-4 border-brand-primary/10 p-1.5 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "66%" }}
                                className="h-full bg-brand-primary rounded-full shadow-inner relative"
                            >
                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                            </motion.div>
                        </div>
                        <p className="text-xl font-bold text-ink-secondary text-right italic">Only 2 more to go! You&apos;re almost there! 🚀</p>
                    </div>
                </div>

                <div className="bg-brand-secondary p-10 rounded-[60px] text-white flex flex-col items-center justify-center text-center border-8 border-white shadow-button-s">
                    <Crown className="w-20 h-20 mb-4 animate-bounce" />
                    <h3 className="font-heading font-black text-3xl mb-2">Next Rank</h3>
                    <p className="text-xl font-bold opacity-90">Super Legend 👑</p>
                </div>
            </div>

            {/* ── Badges Grid ────────────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {BADGES.map((badge, idx) => (
                    <motion.div
                        key={badge.name}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className={cn(
                            "relative p-10 rounded-[48px] border-8 bg-white flex flex-col items-center text-center shadow-card transition-all",
                            badge.unlocked ? "border-brand-primary/10" : "border-ink-tertiary/10 grayscale opacity-70"
                        )}
                    >
                        <div className={cn(
                            "w-32 h-32 rounded-[40px] flex items-center justify-center text-white mb-8 shadow-xl transform rotate-3",
                            badge.color
                        )}>
                            <badge.icon className="w-16 h-16" />
                        </div>

                        <h3 className="font-heading font-black text-2xl text-ink-primary mb-3">{badge.name}</h3>
                        <p className="text-lg text-ink-secondary font-bold leading-tight mb-8">
                            {badge.desc}
                        </p>

                        {badge.unlocked ? (
                            <div className="mt-auto px-8 py-3 bg-brand-success/10 text-brand-success rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" /> Unlocked!
                            </div>
                        ) : (
                            <div className="mt-auto px-8 py-3 bg-surface-bg text-ink-tertiary rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-2">
                                <Target className="w-5 h-5" /> Locked
                            </div>
                        )}

                        {!badge.unlocked && (
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] rounded-[48px] pointer-events-none" />
                        )}
                    </motion.div>
                ))}
            </div>

        </div>
    );
}

function CheckCircle2(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    )
}
