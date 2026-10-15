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
            <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-brand-primary px-6 py-4 text-center shadow-card-lg sm:px-10">
                <div className="absolute right-0 top-0 p-4 opacity-10">
                    <Trophy className="h-24 w-24 text-white" />
                </div>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    <h1 className="mb-0.5 font-heading text-2xl font-black text-white sm:text-3xl">
                        The Arena of Fun! 🏆
                    </h1>
                    <p className="mx-auto mb-3 max-w-xl text-sm font-bold text-white/90 sm:text-base">
                        Pick your favorite category and start your journey!
                    </p>

                    {/* Simplified Search for Kids */}
                    <div className="group relative mx-auto mb-3 max-w-sm">
                        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-primary" />
                        <input
                            type="text"
                            placeholder="Find a fun challenge..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full border-2 border-transparent py-2.5 pl-11 pr-5 text-base font-bold text-ink-primary shadow-xl transition-all placeholder:text-ink-tertiary focus:border-white focus:outline-none"
                        />
                    </div>

                    {/* Grade Filter Chips */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {["All", "Nursery - 2", "Grades 3 - 5", "Grades 6 - 9"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setGradeFilter(filter)}
                                className={cn(
                                    "rounded-full border-2 px-4 py-1.5 text-xs font-black transition-all sm:text-sm",
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

                            <Link href={`/competitions/${comp.slug}`} className="w-full">
                                <button className={cn(
                                    "w-full py-2.5 rounded-xl text-base font-extrabold text-white transition-all transform",
                                    comp.color, comp.shadow,
                                    "hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                                )}>
                                    Apply Now <ArrowRight className="w-4 h-4" />
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
