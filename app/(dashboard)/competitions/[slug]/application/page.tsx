"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    User,
    Mail,
    Phone,
    School,
    GraduationCap,
    Calendar,
    BookOpen,
    Calculator,
    Globe2,
    Code2,
    Baby,
    CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const COMPETITION_META: Record<string, { name: string; icon: React.ElementType; color: string }> = {
    english:     { name: "English Wizards 📚",  icon: BookOpen,    color: "bg-brand-purple"    },
    maths:       { name: "Maths Masters ➗",     icon: Calculator,  color: "bg-brand-primary"   },
    gk:          { name: "GK Explorers 🌍",     icon: Globe2,      color: "bg-brand-success"   },
    coding:      { name: "Code Crafters 💻",    icon: Code2,       color: "bg-brand-accent"    },
    "lil-champs":{ name: "Lil Champs 🎤",       icon: Baby,        color: "bg-brand-secondary" },
};

// Mock submitted application data per slug
const MOCK_APPLICATIONS: Record<string, {
    studentName: string; parentName: string; email: string;
    phone: string; school: string; grade: string; appliedDate: string; status: string; statusColor: string;
}> = {
    english: {
        studentName: "Aarav Sharma", parentName: "Rajesh Sharma",
        email: "rajesh.sharma@email.com", phone: "+91 98765 43210",
        school: "Delhi Public School", grade: "Grade 7",
        appliedDate: "10 Mar 2026", status: "Under Review",
        statusColor: "bg-brand-secondary/10 text-brand-secondary",
    },
    maths: {
        studentName: "Priya Patel", parentName: "Sunita Patel",
        email: "sunita.patel@email.com", phone: "+91 87654 32109",
        school: "Ryan International School", grade: "Grade 8",
        appliedDate: "08 Mar 2026", status: "Approved",
        statusColor: "bg-brand-success/10 text-brand-success",
    },
    gk: {
        studentName: "Rohan Gupta", parentName: "Vikram Gupta",
        email: "vikram.gupta@email.com", phone: "+91 76543 21098",
        school: "Kendriya Vidyalaya", grade: "Grade 6",
        appliedDate: "05 Mar 2026", status: "Inprogress",
        statusColor: "bg-brand-accent/10 text-brand-accent",
    },
};

const FIELDS = [
    { key: "studentName", label: "Student Name",          icon: User,          colSpan: false },
    { key: "parentName",  label: "Parent / Guardian",     icon: User,          colSpan: false },
    { key: "email",       label: "Email Address",         icon: Mail,          colSpan: false },
    { key: "phone",       label: "Phone Number",          icon: Phone,         colSpan: false },
    { key: "school",      label: "School Name",           icon: School,        colSpan: false },
    { key: "grade",       label: "Grade",                 icon: GraduationCap, colSpan: false },
    { key: "appliedDate", label: "Date of Application",   icon: Calendar,      colSpan: false },
] as const;

export default function ApplicationPage() {
    const params = useParams();
    const router = useRouter();
    const slug   = params?.slug as string;
    const comp   = COMPETITION_META[slug];
    const app    = MOCK_APPLICATIONS[slug];

    if (!comp || !app) {
        return (
            <div className="flex flex-col items-center justify-center py-32 text-center gap-4">
                <p className="font-heading font-black text-2xl text-ink-primary">No application found 🕵️</p>
                <button onClick={() => router.back()} className="px-6 py-3 rounded-xl bg-brand-primary text-white font-extrabold">
                    Go Back
                </button>
            </div>
        );
    }

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
                className={cn("p-7 rounded-3xl text-white flex items-center justify-between gap-5 border-4 border-white shadow-card", comp.color)}
            >
                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <p className="text-white/80 font-bold text-sm uppercase tracking-widest mb-1">Submitted Application</p>
                        <h1 className="font-heading font-black text-2xl">{comp.name}</h1>
                    </div>
                </div>
                <span className={cn("px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap bg-white/20 text-white")}>
                    {app.status}
                </span>
            </motion.div>

            {/* Application Details Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-3xl border-4 border-brand-primary/10 shadow-card"
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-brand-success/10 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-brand-success" />
                    </div>
                    <div>
                        <h2 className="font-heading font-black text-xl text-ink-primary">Application Details</h2>
                        <p className="text-xs font-bold text-ink-tertiary">Submitted on {app.appliedDate}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {FIELDS.map((field, idx) => {
                        const FieldIcon = field.icon;
                        const value = app[field.key];
                        return (
                            <motion.div
                                key={field.key}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 + idx * 0.05 }}
                                className="p-4 rounded-2xl bg-surface-bg border-2 border-surface-border"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <FieldIcon className="w-4 h-4 text-brand-primary" />
                                    <span className="text-[11px] font-black text-ink-tertiary uppercase tracking-widest">{field.label}</span>
                                </div>
                                <p className="font-black text-ink-primary text-base">{value}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Status badge */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={cn("flex items-center gap-3 p-5 rounded-2xl border-2", app.statusColor.replace("text-", "border-").replace("/10", "/20"), app.statusColor.replace("text-", "bg-").replace("bg-", "bg-").split(" ")[0])}
            >
                <CheckCircle2 className={cn("w-5 h-5 shrink-0", app.statusColor.split(" ")[1])} />
                <p className={cn("text-sm font-extrabold", app.statusColor.split(" ")[1])}>
                    Current Status: <span className="uppercase">{app.status}</span>
                </p>
            </motion.div>
        </div>
    );
}
