"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    CheckCircle2,
    Clock,
    FileText,
    Search,
    ThumbsUp,
    BookOpen,
    Calculator,
    Globe2,
    Code2,
    Baby,
} from "lucide-react";
import { cn } from "@/lib/utils";

const COMPETITION_META: Record<string, { name: string; icon: React.ElementType; color: string; textColor: string }> = {
    english:     { name: "English Wizards 📚",  icon: BookOpen,    color: "bg-brand-purple",    textColor: "text-brand-purple" },
    maths:       { name: "Maths Masters ➗",     icon: Calculator,  color: "bg-brand-primary",   textColor: "text-brand-primary" },
    gk:          { name: "GK Explorers 🌍",     icon: Globe2,      color: "bg-brand-success",   textColor: "text-brand-success" },
    coding:      { name: "Code Crafters 💻",    icon: Code2,       color: "bg-brand-accent",    textColor: "text-brand-accent" },
    "lil-champs":{ name: "Lil Champs 🎤",       icon: Baby,        color: "bg-brand-secondary", textColor: "text-brand-secondary" },
};

const STATUS_STEPS = [
    { key: "submitted",  label: "Application Submitted",  desc: "Your application was received successfully.",         icon: FileText },
    { key: "review",     label: "Under Review",           desc: "Our team is reviewing your application.",             icon: Search },
    { key: "shortlisted",label: "Shortlisted",            desc: "You have been shortlisted for the next round.",       icon: ThumbsUp },
    { key: "approved",   label: "Approved",               desc: "Congratulations! Your application is approved.",      icon: CheckCircle2 },
];

// Mock: which step is active per competition
const ACTIVE_STEP: Record<string, number> = {
    english: 1,   // Under Review
    maths:   3,   // Approved
    gk:      2,   // Shortlisted
    coding:  0,
    "lil-champs": 0,
};

export default function StatusPage() {
    const params   = useParams();
    const router   = useRouter();
    const slug     = params?.slug as string;
    const comp     = COMPETITION_META[slug];
    const activeIdx = ACTIVE_STEP[slug] ?? 0;

    if (!comp) return null;
    const Icon = comp.icon;

    return (
        <div className="max-w-2xl mx-auto space-y-8 pb-12">

            {/* Back */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-ink-secondary font-bold hover:text-brand-primary transition-colors"
            >
                <ArrowLeft className="w-5 h-5" /> Back
            </button>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn("p-7 rounded-3xl text-white flex items-center gap-5 border-4 border-white shadow-card", comp.color)}
            >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <p className="text-white/80 font-bold text-sm uppercase tracking-widest mb-1">Application Status</p>
                    <h1 className="font-heading font-black text-2xl">{comp.name}</h1>
                </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-3xl border-4 border-brand-primary/10 shadow-card"
            >
                <h2 className="font-heading font-black text-xl text-ink-primary mb-8">Application Timeline</h2>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-surface-border" />

                    <div className="space-y-8">
                        {STATUS_STEPS.map((step, idx) => {
                            const StepIcon = step.icon;
                            const isDone    = idx <= activeIdx;
                            const isActive  = idx === activeIdx;

                            return (
                                <motion.div
                                    key={step.key}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + idx * 0.1 }}
                                    className="flex items-start gap-5 relative"
                                >
                                    {/* Circle */}
                                    <div className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white shadow-md transition-all",
                                        isDone  ? comp.color + " text-white" : "bg-surface-bg text-ink-tertiary"
                                    )}>
                                        <StepIcon className="w-5 h-5" />
                                    </div>

                                    {/* Content */}
                                    <div className={cn(
                                        "flex-1 p-4 rounded-2xl border-2 transition-all",
                                        isActive
                                            ? "border-brand-primary/20 bg-brand-primary/5"
                                            : isDone
                                                ? "border-surface-border bg-surface-bg"
                                                : "border-dashed border-surface-border bg-white opacity-50"
                                    )}>
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className={cn("font-black text-base", isDone ? "text-ink-primary" : "text-ink-tertiary")}>
                                                {step.label}
                                            </p>
                                            {isActive && (
                                                <span className="px-2 py-0.5 rounded-full bg-brand-primary text-white text-[10px] font-black uppercase tracking-wider animate-pulse">
                                                    Current
                                                </span>
                                            )}
                                            {isDone && !isActive && (
                                                <CheckCircle2 className="w-4 h-4 text-brand-success" />
                                            )}
                                        </div>
                                        <p className={cn("text-xs font-bold", isDone ? "text-ink-secondary" : "text-ink-tertiary")}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* Info card */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 p-5 bg-brand-primary/5 rounded-2xl border-2 border-brand-primary/10"
            >
                <Clock className="w-6 h-6 text-brand-primary shrink-0" />
                <p className="text-sm font-bold text-ink-secondary">
                    Status updates are sent to your registered email. Check back here anytime for the latest updates.
                </p>
            </motion.div>
        </div>
    );
}
