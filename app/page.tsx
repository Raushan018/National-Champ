"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    BookOpen,
    Calculator,
    Globe2,
    Code2,
    Baby,
    Trophy,
    Star,
    Sparkles,
    ArrowRight,
    Play,
    CheckCircle2,
    Brain,
    Rocket,
    Target,
    Medal
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

/* ── Animation helpers ──────────────────────────────────────────── */
const bounce = {
    initial: { y: 20, opacity: 0 },
    whileInView: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    viewport: { once: true }
};

const hoverBounce = {
    whileHover: {
        scale: 1.05,
        y: -10,
        transition: { type: "spring", stiffness: 400, damping: 10 }
    }
};

/* ── Section wrapper ────────────────────────────────────────────── */
function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
    return <section id={id} className={cn("relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>{children}</section>;
}

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F6FAFF] font-body">

            {/* ── Hero Section ─────────────────────────────────────────── */}
            <div className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
                {/* Playful background blobs */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] bg-brand-purple/15 rounded-full blur-[60px] pointer-events-none" />

                <Section className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-brand-primary/20 mb-6">
                                <span className="flex h-3 w-3 rounded-full bg-brand-success animate-pulse" />
                                <span className="text-brand-primary font-black text-sm uppercase tracking-wider">🏆 Season 2025-26 is Live!</span>
                            </div>

                            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-ink-primary leading-[1.1] mb-6">
                                Welcome to <br />
                                <span className="text-brand-primary drop-shadow-[0_3px_0_#3A83D8]">National</span> <br />
                                <span className="text-brand-accent drop-shadow-[0_3px_0_#E67A4F]">Championships</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-ink-secondary font-medium leading-relaxed mb-8 max-w-xl">
                                Compete with students across India in exciting challenges like <span className="text-brand-primary font-bold">Maths</span>, <span className="text-brand-purple font-bold">English</span>, <span className="text-brand-accent font-bold">Coding</span> and <span className="text-brand-success font-bold">GK</span>!
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/competitions">
                                    <button className="px-8 py-4 rounded-2xl text-lg font-black text-white bg-brand-primary shadow-button-p hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center gap-3">
                                        <Target className="w-5 h-5" />
                                        Join Arena!
                                    </button>
                                </Link>
                                <Link href="/competitions">
                                    <button className="px-8 py-4 rounded-2xl text-lg font-black text-ink-primary bg-white shadow-card border-4 border-brand-secondary hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center gap-3">
                                        <Rocket className="w-5 h-5 text-brand-secondary" />
                                        Explore
                                    </button>
                                </Link>
                            </div>

                            {/* Social Proof */}
                            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className={cn(
                                            "w-14 h-14 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-black text-lg",
                                            i % 2 === 0 ? "bg-brand-primary" : i % 3 === 0 ? "bg-brand-accent" : "bg-brand-success"
                                        )}>
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-2xl font-black text-ink-primary">50,000+ Students</p>
                                    <p className="text-ink-secondary font-bold">are already playing in the Arena! 🎉</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content — Playful Illustration */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="relative flex justify-center"
                        >
                            <div className="relative w-full aspect-square max-w-[500px]">
                                {/* Central Floating Card */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-white rounded-3xl shadow-card border-4 border-brand-primary/10 flex flex-col items-center justify-center p-6 overflow-hidden"
                                >
                                    <Trophy className="w-32 h-32 text-brand-secondary mb-4 drop-shadow-md" />
                                    <div className="text-center">
                                        <p className="font-heading font-black text-3xl text-brand-primary mb-1">Champion!</p>
                                        <div className="flex justify-center gap-1.5">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-brand-secondary fill-brand-secondary" />)}
                                        </div>
                                    </div>

                                    {/* Small floating elements */}
                                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full flex items-center justify-center blur-sm" />
                                    <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-accent/20 rounded-full flex items-center justify-center blur-sm" />
                                </motion.div>

                                {/* Mini Badges */}
                                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-10 left-0 w-24 h-24 bg-brand-success rounded-3xl shadow-button-p flex items-center justify-center border-4 border-white -rotate-12">
                                    <Medal className="w-12 h-12 text-white" />
                                </motion.div>
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5 }} className="absolute bottom-10 -right-5 w-28 h-28 bg-brand-accent rounded-full shadow-button-a flex items-center justify-center border-4 border-white rotate-12">
                                    <Rocket className="w-14 h-14 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </Section>
            </div>

            {/* ── Competition Categories ─────────────────────────────── */}
            <Section className="py-24" id="categories">
                <div className="text-center mb-12">
                    <motion.div {...bounce}>
                        <h2 className="font-heading font-black text-4xl text-ink-primary mb-3">Choose Your Challenge!</h2>
                        <p className="text-xl text-ink-secondary font-bold">Pick a category and show your super-skills! 🚀</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {[
                        { name: "English 📚", icon: BookOpen, grades: "Grades 3-9", color: "bg-brand-purple", shadow: "shadow-[0_8px_0_0_#8B5CF6]", desc: "Words, stories and grammar!" },
                        { name: "Maths ➗", icon: Calculator, grades: "Grades 3-9", color: "bg-brand-primary", shadow: "shadow-[0_8px_0_0_#3B82F6]", desc: "Logic, numbers and puzzles!" },
                        { name: "GK 🌍", icon: Globe2, grades: "Grades 3-9", color: "bg-brand-success", shadow: "shadow-[0_8px_0_0_#22C55E]", desc: "Explore the whole world!" },
                        { name: "Coding 💻", icon: Code2, grades: "Grades 3-9", color: "bg-brand-accent", shadow: "shadow-[0_8px_0_0_#F97316]", desc: "Build your own digital magic!" },
                        { name: "Lil Champs 🎤", icon: Baby, grades: "Nursery - 2", color: "bg-brand-secondary", shadow: "shadow-[0_8px_0_0_#EAB308]", desc: "Speeches and fun learning!" },
                    ].map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            variants={bounce}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            {...hoverBounce}
                        >
                            <Link href="/competitions">
                                <div className={cn(
                                    "relative h-full p-6 rounded-2xl bg-white border-4 border-surface-border text-center flex flex-col items-center gap-4 transition-all duration-300 group cursor-pointer",
                                    "hover:border-transparent hover:shadow-card-hover"
                                )}>
                                    <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center mb-1", cat.color, "text-white shadow-lg shadow-black/5")}>
                                        <cat.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-heading font-black text-xl text-ink-primary">{cat.name}</h3>
                                    <p className="bg-surface-bg px-3 py-1 rounded-full text-xs font-black text-ink-secondary">{cat.grades}</p>
                                    <p className="text-sm text-ink-secondary font-bold leading-tight">{cat.desc}</p>

                                    <button className={cn(
                                        "mt-auto w-full py-3 rounded-2xl text-lg font-black text-white transition-all transform group-hover:scale-105",
                                        cat.color, cat.shadow
                                    )}>
                                        Play Now!
                                    </button>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ── How it Works ────────────────────────────────────────── */}
            <div className="bg-white py-20 rounded-[48px] sm:rounded-[64px] shadow-inner mb-20">
                <Section id="how-it-works">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-black text-4xl text-ink-primary mb-3">How To Become A Champion 👑</h2>
                        <p className="text-xl text-ink-secondary font-bold">It&apos;s simple as A-B-C!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                        {/* Connecting wavy line (placeholder for SVG if possible) */}
                        <div className="hidden lg:block absolute top-[15%] left-[15%] right-[15%] h-px border-t-[6px] border-dashed border-brand-primary/20" />

                        {[
                            { step: "1", title: "Sign Up! 📝", desc: "Create your hero profile in just 2 minutes!", color: "bg-brand-primary", icon: Brain },
                            { step: "2", title: "Play Quizzes! 🧠", desc: "Take fun online challenges from home.", color: "bg-brand-purple", icon: Sparkles },
                            { step: "3", title: "Win Big! 🏆", desc: "Get amazing medals, badges and national fame!", color: "bg-brand-accent", icon: Trophy },
                        ].map((s) => (
                            <motion.div key={s.step} {...bounce} className="text-center flex flex-col items-center">
                                <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-3xl mb-5 shadow-button-p animate-bounce", s.color)} style={{ animationDuration: "3s" }}>
                                    <s.icon className="w-10 h-10" />
                                </div>
                                <h3 className="font-heading font-black text-2xl text-ink-primary mb-2 underline decoration-brand-secondary decoration-4 underline-offset-8">{s.title}</h3>
                                <p className="text-lg text-ink-secondary font-bold max-w-xs">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            </div>

            {/* ── Call to Action ──────────────────────────────────────── */}
            <Section className="pb-24">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="bg-brand-primary p-12 sm:p-16 rounded-3xl text-center shadow-button-p border-4 border-white group"
                >
                    <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-6 group-hover:scale-105 transition-transform">Ready for the Arena? 🚀</h2>
                    <p className="text-xl sm:text-2xl text-white/90 font-black mb-10">Your national title is waiting for you! Let&apos;s go!</p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/register">
                            <button className="px-10 py-5 rounded-2xl text-xl font-black text-brand-primary bg-white shadow-button-p hover:-translate-y-2 active:translate-y-1 transition-all">
                                Register Now! ✨
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </Section>

            <Footer />
        </div>
    );
}
