"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Trophy,
    Star,
    Target,
    BookOpen,
    Medal,
    GraduationCap,
    Clock,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Rocket,
    Eye,
    FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import studentProfileImage from "@/assets/image.png";

/* ── Mock Data for Kids ────────────────────────────────────────── */
const STATS = [
    { label: "Applied", value: "12", icon: GraduationCap, color: "bg-brand-primary", shadow: "shadow-[0_8px_0_0_#3A83D8]", unit: "Competitions" },
    { label: "Inprogress", value: "5", icon: Clock, color: "bg-brand-secondary", shadow: "shadow-[0_8px_0_0_#E6C100]", unit: "Ongoing" },
    { label: "Not Applied", value: "7", icon: BookOpen, color: "bg-brand-purple", shadow: "shadow-[0_8px_0_0_#8B5CF6]", unit: "Remaining" },
    { label: "Progress", value: "72%", icon: Target, color: "bg-brand-success", shadow: "shadow-[0_8px_0_0_#3BB550]", unit: "Super!" },
];

const APPLICATIONS = [
    { slug: "english", name: "English Wizards 📚", appliedDate: "10 Mar 2026", status: "Under Review", statusColor: "bg-brand-secondary/10 text-brand-secondary", icon: BookOpen, color: "bg-brand-purple" },
    { slug: "maths", name: "Maths Masters ➗", appliedDate: "08 Mar 2026", status: "Approved", statusColor: "bg-brand-success/10 text-brand-success", icon: Trophy, color: "bg-brand-primary" },
    { slug: "gk", name: "GK Explorers 🌍", appliedDate: "05 Mar 2026", status: "Inprogress", statusColor: "bg-brand-accent/10 text-brand-accent", icon: Target, color: "bg-brand-success" },
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
        <div className="space-y-8 pb-10">

            {/* ── Welcome Header ──────────────────────────────────────── */}
            <header className="relative flex flex-col md:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border-4 border-white/70 bg-[linear-gradient(115deg,#bfdbfe_0%,#dbeafe_32%,#fce7f3_66%,#f9a8d4_100%)] bg-[length:200%_200%] p-5 shadow-[0_10px_24px_rgba(96,165,250,0.18),0_4px_12px_rgba(244,114,182,0.14)] animate-welcome-gradient sm:p-6">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.8),transparent_22%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.62),transparent_25%)]" />
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className="relative">
                        <div className="relative w-20 h-20 rounded-2xl bg-brand-primary shadow-button-p -rotate-3 overflow-hidden">
                            <Image
                                src={studentProfileImage}
                                alt="Student profile"
                                fill
                                sizes="80px"
                                className="object-cover object-[center_20%]"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-brand-success rounded-full flex items-center justify-center border-2 border-white shadow-md animate-bounce">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-heading font-black text-3xl text-ink-primary mb-1">
                            Hi Priya!
                        </h1>
                        <p className="text-xl text-ink-secondary font-bold">
                            Class 5 • Student ID: NC-2026-001
                        </p>
                    </div>
                </div>
                <div className="relative z-10 flex gap-3">
                    <button className="rounded-xl bg-gradient-to-r from-brand-primary to-pink-500 px-5 py-2.5 text-base font-extrabold text-white shadow-[0_4px_0_0_#3A83D8] transition-all hover:-translate-y-0.5 active:translate-y-0">
                        Daily Quiz! 🎯
                    </button>
                </div>
            </header>

            {/* ── Stat Cards ─────────────────────────────────────────── */}
            <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {STATS.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
                        className={cn(
                            "relative flex w-full flex-col items-center rounded-2xl border-4 border-brand-primary/5 bg-white p-3 text-center shadow-card transition-transform duration-300 group hover:-translate-y-2 lg:max-w-[16rem]"
                        )}
                    >
                        <div className={cn("mb-2 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg", stat.color)}>
                            <stat.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-0.5 text-xs font-black uppercase tracking-widest text-ink-secondary">{stat.label}</h3>
                        <div className="flex items-baseline gap-1.5">
                            <span className="font-heading text-3xl font-black text-ink-primary">{stat.value}</span>
                            <span className="text-base font-bold text-ink-tertiary">{stat.unit}</span>
                        </div>

                        {/* Decorative background shape */}
                        <div className={cn("absolute -bottom-10 -right-10 w-24 h-24 rounded-full opacity-10 blur-xl", stat.color)} />
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* ── Current Applied Status ─────────────────────────────── */}
                <div className="lg:col-span-2 space-y-6">
                    <section className="bg-white p-6 rounded-3xl border-4 border-brand-secondary/20 shadow-card relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="font-heading font-black text-2xl text-ink-primary">Current Applied Status 📋</h2>
                                <p className="text-base text-ink-tertiary font-bold">Track your competition applications</p>
                            </div>
                            <div className="p-3 bg-brand-primary/10 rounded-2xl">
                                <GraduationCap className="w-8 h-8 text-brand-primary" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            {APPLICATIONS.map((app, idx) => (
                                <motion.div
                                    key={app.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col justify-between gap-2 rounded-2xl border-2 border-surface-border bg-surface-bg p-3 transition-all hover:bg-white hover:shadow-card sm:flex-row sm:items-center"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md", app.color)}>
                                            <app.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-ink-primary">{app.name}</p>
                                            <p className="text-xs font-bold text-ink-tertiary">Applied: {app.appliedDate}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 sm:ml-auto">
                                        <span className={cn("whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider", app.statusColor)}>
                                            {app.status}
                                        </span>
                                        <Link href={`/competitions/${app.slug}/status`}>
                                            <span className="flex cursor-pointer items-center gap-1 rounded-xl border-2 border-brand-primary/20 px-3 py-1.5 text-xs font-extrabold whitespace-nowrap text-brand-primary transition-all hover:bg-brand-primary hover:text-white">
                                                <Eye className="h-3.5 w-3.5" /> View Status
                                            </span>
                                        </Link>
                                        <Link href={`/competitions/${app.slug}/application`}>
                                            <span className="flex cursor-pointer items-center gap-1 rounded-xl border-2 border-brand-purple/20 px-3 py-1.5 text-xs font-extrabold whitespace-nowrap text-brand-purple transition-all hover:bg-brand-purple hover:text-white">
                                                <FileText className="h-3.5 w-3.5" /> View Application
                                            </span>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Fun Competition Row */}
                    <div className="bg-brand-accent p-6 rounded-3xl text-white flex flex-col sm:flex-row items-center gap-6 shadow-button-a border-4 border-white group cursor-pointer hover:-translate-y-1 transition-transform">
                        <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center-shrink-0 -rotate-3 group-hover:rotate-0 transition-transform">
                            <Rocket className="w-12 h-12 text-brand-accent animate-pulse" />
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="font-heading font-black text-2xl mb-1">New Arena Unlocked! 🔓</h3>
                            <p className="text-lg font-bold text-white/90 mb-4">Space Exploration GK Challenge is live!</p>
                            <button className="px-6 py-2.5 bg-white text-brand-accent rounded-lg text-base font-extrabold shadow-md hover:-translate-y-0.5 transition-colors flex items-center gap-2">
                                Leap into Action! <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Leaderboard Mini ───────────────────────────────────── */}
                <aside className="bg-white p-6 rounded-3xl border-4 border-brand-purple/20 shadow-card">
                    <h3 className="font-heading font-black text-xl text-ink-primary mb-5 flex items-center gap-3">
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
                    <button className="w-full mt-5 py-2.5 rounded-xl border-2 border-brand-purple/20 text-brand-purple font-black text-base hover:bg-brand-purple hover:text-white transition-all">
                        View Full List
                    </button>
                </aside>

            </div>
        </div>
    );
}
