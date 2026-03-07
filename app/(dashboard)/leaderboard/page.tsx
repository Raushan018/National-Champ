"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Trophy,
    Medal,
    Star,
    Search,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Rocket,
    Crown,
    Target
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Mock Data for Kids ────────────────────────────────────────── */
const TOP_3 = [
    { name: "Aarav Sharma", score: 980, avatar: "👦", rank: 2, color: "bg-slate-300", shadow: "shadow-[0_8px_0_0_#94a3b8]", medal: "🥈" },
    { name: "Reyansh Bhat", score: 995, avatar: "🦁", rank: 1, color: "bg-brand-secondary", shadow: "shadow-[0_8px_0_0_#EAB308]", medal: "🥇" },
    { name: "Siya Mishra", score: 965, avatar: "👧", rank: 3, color: "bg-orange-400", shadow: "shadow-[0_8px_0_0_#fb923c]", medal: "🥉" },
];

const OTHERS = [
    { name: "Priya Patel", score: 920, avatar: "🦋", status: "Shortlisted", color: "bg-brand-primary" },
    { name: "Rohan Gupta", score: 850, avatar: "🦊", status: "Attempted", color: "bg-brand-success" },
    { name: "Kavya Nair", score: 810, avatar: "🌸", status: "Shortlisted", color: "bg-brand-purple" },
    { name: "Ishaan Singh", score: 790, avatar: "🚀", status: "Attempted", color: "bg-brand-accent" },
    { name: "Sanya Roy", score: 750, avatar: "🌈", status: "Shortlisted", color: "bg-brand-secondary" },
];

export default function LeaderboardPage() {
    const [search, setSearch] = useState("");

    return (
        <div className="space-y-12 pb-12">

            {/* ── Header ────────────────────────────────────────────── */}
            <div className="text-center space-y-3">
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="inline-block p-3 bg-brand-secondary rounded-2xl shadow-button-s mb-2">
                    <Crown className="w-8 h-8 text-white" />
                </motion.div>
                <h1 className="font-heading font-black text-4xl text-ink-primary">Arena Hall of Fame! 🏆</h1>
                <p className="text-xl text-ink-secondary font-bold">See the amazing champions of Season 2025-26!</p>
            </div>

            {/* ── Top 3 Podium ───────────────────────────────────────── */}
            <div className="flex flex-col md:flex-row items-end justify-center gap-6 mt-16 max-w-4xl mx-auto px-4">
                {TOP_3.sort((a, b) => a.rank === 1 ? 0 : b.rank === 1 ? 1 : a.rank - b.rank).map((winner, idx) => (
                    <motion.div
                        key={winner.name}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: winner.rank * 0.2, type: "spring", stiffness: 300 }}
                        className={cn(
                            "relative flex flex-col items-center group w-full",
                            winner.rank === 1 ? "md:order-2" : winner.rank === 2 ? "md:order-1" : "md:order-3"
                        )}
                    >
                        {/* Avatar Bubble */}
                        <div className="relative mb-4">
                            <div className={cn(
                                "w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-card flex items-center justify-center text-4xl sm:text-5xl bg-white group-hover:scale-110 transition-transform",
                                winner.rank === 1 && "w-28 h-28 sm:w-32 sm:h-32 border-brand-secondary"
                            )}>
                                {winner.avatar}
                            </div>
                            <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xl border-2 border-surface-bg">
                                {winner.medal}
                            </div>
                        </div>

                        {/* Name & Score */}
                        <div className="text-center mb-4">
                            <p className="font-heading font-black text-xl text-ink-primary truncate max-w-[150px]">{winner.name}</p>
                            <p className="text-brand-primary font-black text-lg">{winner.score} pts</p>
                        </div>

                        {/* Podium Block */}
                        <div className={cn(
                            "w-full rounded-t-3xl flex flex-col items-center justify-center p-4 text-4xl font-black transition-all text-white",
                            winner.color, winner.shadow,
                            winner.rank === 1 ? "h-48 sm:h-64" : winner.rank === 2 ? "h-36 sm:h-48" : "h-28 sm:h-36"
                        )}>
                            {winner.rank}
                            <div className="mt-1 flex gap-1">
                                {Array.from({ length: 4 - winner.rank }).map((_, i) => <Star key={i} className="w-4 h-4 fill-white opacity-50" />)}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── Table Area ────────────────────────────────────────── */}
            <div className="max-w-4xl mx-auto bg-white rounded-3xl border-4 border-brand-primary/10 shadow-card overflow-hidden">
                <div className="p-6 border-b-2 border-brand-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h2 className="font-heading font-black text-2xl text-ink-primary">More Champions ✨</h2>
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-primary" />
                        <input
                            type="text"
                            placeholder="Find a friend..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-surface-bg border-2 border-transparent focus:border-brand-primary/20 focus:outline-none font-bold text-ink-primary text-sm"
                        />
                    </div>
                </div>

                <div className="p-4 sm:p-6 space-y-3">
                    {OTHERS.filter(s => s.name.toLowerCase().includes(search.toLowerCase())).map((student, idx) => (
                        <motion.div
                            key={student.name}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-surface-bg hover:border-brand-primary/10 hover:bg-surface-bg/30 transition-all group"
                        >
                            <span className="font-black text-lg text-ink-tertiary w-6">{idx + 4}</span>
                            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm", student.color, "bg-opacity-10")}>
                                {student.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-black text-xl text-ink-primary truncate">{student.name}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold text-ink-tertiary uppercase tracking-widest">{student.status}</span>
                                    <div className="w-1 h-1 bg-ink-tertiary rounded-full" />
                                    <span className="text-brand-primary font-black text-[10px]">Super Progress!</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-heading font-black text-brand-primary">{student.score}</p>
                                <p className="text-[10px] font-black text-ink-tertiary uppercase">Points</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="p-6 bg-surface-bg/50 border-t-2 border-brand-primary/5 flex justify-center gap-3">
                    <button className="p-3 rounded-xl bg-white border-2 border-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
                        <ChevronLeft className="w-6 h-6 font-black" />
                    </button>
                    <button className="p-3 rounded-xl bg-white border-2 border-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
                        <ChevronRight className="w-6 h-6 font-black" />
                    </button>
                </div>
            </div>

            {/* ── Daily Motivation ── */}
            <div className="max-w-4xl mx-auto bg-brand-purple p-8 rounded-3xl text-white text-center shadow-button-p border-4 border-white">
                <Rocket className="w-12 h-12 text-white mx-auto mb-4 animate-bounce" />
                <h3 className="font-heading font-black text-3xl mb-3">You&apos;re Next! 🌟</h3>
                <p className="text-xl font-bold opacity-90">Every champion was once a beginner. Keep playing, keep learning, and your name will be here too!</p>
            </div>
        </div>
    );
}
