"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    BookOpen,
    Calculator,
    Globe2,
    Code2,
    Baby,
    ArrowLeft,
    User,
    Mail,
    Phone,
    GraduationCap,
    School,
    CheckCircle2,
    Sparkles,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const COMPETITION_META: Record<string, {
    name: string;
    icon: React.ElementType;
    color: string;
    shadow: string;
    tag: string;
    grades: string;
    desc: string;
}> = {
    english: {
        name: "English Wizards 📚",
        icon: BookOpen,
        color: "bg-brand-purple",
        shadow: "shadow-[0_8px_0_0_#8B5CF6]",
        tag: "Fun!",
        grades: "Grades 3 - 9",
        desc: "Master the magic of words, stories, and grammar in this fun challenge!",
    },
    maths: {
        name: "Maths Masters ➗",
        icon: Calculator,
        color: "bg-brand-primary",
        shadow: "shadow-[0_8px_0_0_#3B82F6]",
        tag: "Popular",
        grades: "Grades 3 - 9",
        desc: "Solve cool puzzles and unlock the secrets of numbers and logic!",
    },
    gk: {
        name: "GK Explorers 🌍",
        icon: Globe2,
        color: "bg-brand-success",
        shadow: "shadow-[0_8px_0_0_#22C55E]",
        tag: "New!",
        grades: "Grades 3 - 9",
        desc: "Travel around the world from your screen and learn amazing facts!",
    },
    coding: {
        name: "Code Crafters 💻",
        icon: Code2,
        color: "bg-brand-accent",
        shadow: "shadow-[0_8px_0_0_#F97316]",
        tag: "Cool!",
        grades: "Grades 3 - 9",
        desc: "Build your own digital magic and learn how the world's tech works!",
    },
    "lil-champs": {
        name: "Lil Champs 🎤",
        icon: Baby,
        color: "bg-brand-secondary",
        shadow: "shadow-[0_8px_0_0_#EAB308]",
        tag: "Foundation",
        grades: "Nursery - 2",
        desc: "A fun arena for our youngest stars to speak up and shine bright!",
    },
};

const ALL_GRADES: Record<string, string[]> = {
    "lil-champs": ["Nursery", "LKG", "UKG", "Grade 1", "Grade 2"],
    default: ["Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9"],
};

export default function ApplyPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;
    const comp = COMPETITION_META[slug];

    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        school: "",
        grade: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (!comp) {
        return (
            <div className="flex flex-col items-center justify-center py-32 text-center">
                <h2 className="font-heading font-black text-2xl text-ink-primary mb-4">Competition not found 🕵️</h2>
                <button onClick={() => router.back()} className="px-6 py-3 rounded-xl bg-brand-primary text-white font-extrabold">
                    Go Back
                </button>
            </div>
        );
    }

    const Icon = comp.icon;

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center space-y-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-28 h-28 rounded-full bg-brand-success/10 flex items-center justify-center"
                >
                    <CheckCircle2 className="w-14 h-14 text-brand-success" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h2 className="font-heading font-black text-3xl text-ink-primary mb-2">Application Submitted! 🎉</h2>
                    <p className="text-lg text-ink-secondary font-bold max-w-md mx-auto">
                        Your application for <span className="text-brand-primary">{comp.name}</span> has been received. We&apos;ll update you soon!
                    </p>
                </motion.div>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => router.push("/competitions")}
                    className="px-8 py-3 rounded-xl bg-brand-primary text-white font-extrabold text-base shadow-button-p hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                    Back to Competitions <ArrowRight className="w-5 h-5" />
                </motion.button>
            </div>
        );
    }

    return (
        <div className="space-y-8 pb-12 max-w-3xl mx-auto">

            {/* ── Back Button ─────────────────────────────────────────── */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-ink-secondary font-bold hover:text-brand-primary transition-colors"
            >
                <ArrowLeft className="w-5 h-5" /> Back to Competitions
            </button>

            {/* ── Competition Banner ───────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn("p-8 rounded-3xl text-white flex items-center gap-6 border-4 border-white", comp.color, comp.shadow)}
            >
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-10 h-10 text-white" />
                </div>
                <div>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider mb-2 inline-block">
                        {comp.tag}
                    </span>
                    <h1 className="font-heading font-black text-2xl sm:text-3xl">{comp.name}</h1>
                    <p className="text-white/90 font-bold text-sm mt-1">{comp.grades} &nbsp;·&nbsp; {comp.desc}</p>
                </div>
            </motion.div>

            {/* ── Application Form ─────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-3xl border-4 border-brand-primary/10 shadow-card"
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-brand-primary/10 rounded-2xl">
                        <Sparkles className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                        <h2 className="font-heading font-black text-2xl text-ink-primary">Apply Now</h2>
                        <p className="text-sm text-ink-tertiary font-bold">Fill in the details below to register</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Student Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-black text-ink-primary flex items-center gap-2">
                                <User className="w-4 h-4 text-brand-primary" /> Student Name
                            </label>
                            <input
                                type="text"
                                name="studentName"
                                value={form.studentName}
                                onChange={handleChange}
                                required
                                placeholder="Enter student's full name"
                                className="w-full px-4 py-3 rounded-xl border-2 border-surface-border bg-surface-bg text-ink-primary font-bold text-sm focus:outline-none focus:border-brand-primary transition-colors placeholder:text-ink-tertiary"
                            />
                        </div>

                        {/* Parent / Guardian Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-black text-ink-primary flex items-center gap-2">
                                <User className="w-4 h-4 text-brand-secondary" /> Parent / Guardian Name
                            </label>
                            <input
                                type="text"
                                name="parentName"
                                value={form.parentName}
                                onChange={handleChange}
                                required
                                placeholder="Enter parent's full name"
                                className="w-full px-4 py-3 rounded-xl border-2 border-surface-border bg-surface-bg text-ink-primary font-bold text-sm focus:outline-none focus:border-brand-primary transition-colors placeholder:text-ink-tertiary"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-black text-ink-primary flex items-center gap-2">
                                <Mail className="w-4 h-4 text-brand-accent" /> Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter email address"
                                className="w-full px-4 py-3 rounded-xl border-2 border-surface-border bg-surface-bg text-ink-primary font-bold text-sm focus:outline-none focus:border-brand-primary transition-colors placeholder:text-ink-tertiary"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-sm font-black text-ink-primary flex items-center gap-2">
                                <Phone className="w-4 h-4 text-brand-success" /> Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter phone number"
                                className="w-full px-4 py-3 rounded-xl border-2 border-surface-border bg-surface-bg text-ink-primary font-bold text-sm focus:outline-none focus:border-brand-primary transition-colors placeholder:text-ink-tertiary"
                            />
                        </div>

                        {/* School */}
                        <div className="space-y-2">
                            <label className="text-sm font-black text-ink-primary flex items-center gap-2">
                                <School className="w-4 h-4 text-brand-purple" /> School Name
                            </label>
                            <input
                                type="text"
                                name="school"
                                value={form.school}
                                onChange={handleChange}
                                required
                                placeholder="Enter school name"
                                className="w-full px-4 py-3 rounded-xl border-2 border-surface-border bg-surface-bg text-ink-primary font-bold text-sm focus:outline-none focus:border-brand-primary transition-colors placeholder:text-ink-tertiary"
                            />
                        </div>

                        {/* Grade */}
                        <div className="space-y-2">
                            <label className="text-sm font-black text-ink-primary flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-brand-primary" /> Grade
                            </label>
                            <select
                                name="grade"
                                value={form.grade}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 border-surface-border bg-surface-bg text-ink-primary font-bold text-sm focus:outline-none focus:border-brand-primary transition-colors"
                            >
                                <option value="" disabled>Select grade</option>
                                {(ALL_GRADES[slug] ?? ALL_GRADES.default).map(g => (
                                    <option key={g} value={g}>{g}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className={cn(
                            "w-full py-4 rounded-2xl text-white font-extrabold text-lg transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 mt-2",
                            comp.color, comp.shadow
                        )}
                    >
                        Submit Application <ArrowRight className="w-5 h-5" />
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
