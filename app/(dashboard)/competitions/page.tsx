"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    BookOpen,
    Calculator,
    Globe2,
    Code2,
    Baby,
    ArrowRight,
    Trophy,
    Star,
    Sparkles,
    Search,
    Rocket,
    Brain,
    Target
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Animation variants ────────────────────────────────────────── */
const bounce = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: {
        scale: 1,
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
    },
    whileTap: { scale: 0.98 }
};

/* ── Data ──────────────────────────────────────────────────────── */
const COMPETITIONS = [
    {
        name: "English Wizards 📚",
        slug: "english",
        icon: BookOpen,
        grades: "Grades 3 - 9",
        desc: "Master the magic of words, stories, and grammar in this fun challenge!",
        color: "bg-brand-purple",
        shadow: "shadow-[0_8px_0_0_#8B5CF6]",
        light: "bg-brand-purple/10",
        tag: "Fun!"
    },
    {
        name: "Maths Masters ➗",
        slug: "maths",
        icon: Calculator,
        grades: "Grades 3 - 9",
        desc: "Solve cool puzzles and unlock the secrets of numbers and logic!",
        color: "bg-brand-primary",
        shadow: "shadow-[0_8px_0_0_#3B82F6]",
        light: "bg-brand-primary/10",
        tag: "Popular"
    },
    {
        name: "GK Explorers 🌍",
        slug: "gk",
        icon: Globe2,
        grades: "Grades 3 - 9",
        desc: "Travel around the world from your screen and learn amazing facts!",
        color: "bg-brand-success",
        shadow: "shadow-[0_8px_0_0_#22C55E]",
        light: "bg-brand-success/10",
        tag: "New!"
    },
    {
        name: "Code Crafters 💻",
        slug: "coding",
        icon: Code2,
        grades: "Grades 3 - 9",
        desc: "Build your own digital magic and learn how the world's tech works!",
        color: "bg-brand-accent",
        shadow: "shadow-[0_8px_0_0_#F97316]",
        light: "bg-brand-accent/10",
        tag: "Cool!"
    },
    {
        name: "Lil Champs 🎤",
        slug: "lil-champs",
        icon: Baby,
        grades: "Nursery - 2",
        desc: "A fun arena for our youngest stars to speak up and shine bright!",
        color: "bg-brand-secondary",
        shadow: "shadow-[0_8px_0_0_#EAB308]",
        light: "bg-brand-secondary/10",
        tag: "Foundation"
    },
];

export default function CompetitionsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [gradeFilter, setGradeFilter] = useState("All");

    const filtered = COMPETITIONS.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.desc.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGrade = gradeFilter === "All" || c.grades.includes(gradeFilter) || (gradeFilter === "Nursery - 2" && c.grades === "Nursery - 2");
        return matchesSearch && matchesGrade;
    });

    return (
        <div className="space-y-12">

            {/* ── Header Area ────────────────────────────────────────── */}
            <div className="bg-brand-primary py-8 px-10 rounded-3xl text-center shadow-card-lg relative overflow-hidden border-4 border-white">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Trophy className="w-40 h-40 text-white" />
                </div>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl text-white mb-2">
                        The Arena of Fun! 🏆
                    </h1>
                    <p className="text-lg text-white/90 font-bold max-w-xl mx-auto mb-6">
                        Pick your favorite category and start your journey!
                    </p>

                    {/* Simplified Search for Kids */}
                    <div className="max-w-md mx-auto relative group mb-6">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary" />
                        <input
                            type="text"
                            placeholder="Find a fun challenge..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-3.5 rounded-full text-lg font-bold text-ink-primary shadow-xl focus:outline-none placeholder:text-ink-tertiary border-2 border-transparent focus:border-white transition-all"
                        />
                    </div>

                    {/* Grade Filter Chips */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {["All", "Nursery - 2", "Grades 3 - 5", "Grades 6 - 9"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setGradeFilter(filter)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-black transition-all border-2",
                                    gradeFilter === filter
                                        ? "bg-white text-brand-primary border-white shadow-button-p"
                                        : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ── Competitions Grid ───────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filtered.map((comp, idx) => (
                    <motion.div
                        key={comp.slug}
                        {...bounce}
                        {...hoverBounce}
                        className="group"
                    >
                        <div className="bg-white p-6 rounded-2xl border-2 border-brand-primary/10 shadow-card h-full flex flex-col items-center text-center">
                            {/* Icon Wrapper */}
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 shadow-xl transform group-hover:rotate-6 transition-transform", comp.color)}>
                                <comp.icon className="w-7 h-7" />
                            </div>

                            {/* Tag */}
                            <span className={cn("px-4 py-1 rounded-full text-xs font-black text-white uppercase tracking-wider mb-2", comp.color)}>
                                {comp.tag}
                            </span>

                            <h2 className="font-heading font-black text-xl text-ink-primary mb-1">
                                {comp.name}
                            </h2>

                            <p className="px-4 py-1 rounded-full bg-surface-bg text-brand-primary font-black text-xs mb-3">
                                {comp.grades}
                            </p>

                            <p className="text-base text-ink-secondary font-bold leading-relaxed mb-4 flex-1">
                                {comp.desc}
                            </p>

                            <Link href={comp.slug === "lil-champs" ? "/lil-champs" : `/competitions/${comp.slug}`} className="w-full">
                                <button className={cn(
                                    "w-full py-2.5 rounded-xl text-base font-extrabold text-white transition-all transform",
                                    comp.color, comp.shadow,
                                    "hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                                )}>
                                    Let&apos;s Play! <Rocket className="w-4 h-4" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── Empty State ── */}
            {filtered.length === 0 && (
                <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-ink-tertiary/20">
                    <h3 className="font-heading font-black text-2xl text-ink-primary mb-3">No Challenges Found! 🕵️‍♂️</h3>
                    <p className="text-xl text-ink-secondary font-bold">Try searching for something else, explorer!</p>
                </div>
            )}

            {/* ── Bottom Section ──────────────────────────────────────── */}
            <div className="bg-brand-success p-10 rounded-3xl text-white flex flex-col md:flex-row items-center gap-8 shadow-button-s border-4 border-white">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center rotate-12 shrink-0 shadow-lg">
                    <Sparkles className="w-12 h-12 text-brand-success animate-pulse" />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="font-heading font-black text-3xl mb-3">Want something specific? 🎯</h3>
                    <p className="text-xl font-bold opacity-90 mb-6">Every day we add new fun quests and challenges. Check back daily!</p>
                    <div className="flex gap-3">
                        <button className="px-5 py-2.5 rounded-xl bg-brand-primary text-white font-extrabold text-base shadow-button-p hover:-translate-y-0.5 active:translate-y-0 transition-all">
                            Daily Quiz! 🎯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
