"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Mic2,
    Star,
    Trophy,
    Sparkles,
    Rocket,
    ArrowRight,
    Baby,
    Palette,
    Music
} from "lucide-react";
import { cn } from "@/lib/utils";

const ACTIVITIES = [
    {
        title: "Speech Submission",
        desc: "Tell us a story and show your amazing voice!",
        icon: Mic2,
        href: "/lil-champs/speech",
        color: "bg-brand-primary",
        shadow: "shadow-button-p",
        badge: "Most Popular"
    },
    {
        title: "Art & Color",
        desc: "Show your creativity with colors and shapes!",
        icon: Palette,
        href: "#",
        color: "bg-brand-success",
        shadow: "shadow-button-g",
        badge: "Coming Soon",
        disabled: true
    },
    {
        title: "Sing Along",
        desc: "Sing your favorite nursery rhymes!",
        icon: Music,
        href: "#",
        color: "bg-brand-purple",
        shadow: "shadow-button-v",
        badge: "Coming Soon",
        disabled: true
    }
];

export default function LilChampsPage() {
    return (
        <div className="space-y-10 pb-12">
            {/* ── Welcome Banner ── */}
            <div className="bg-brand-accent p-10 rounded-3xl text-white relative overflow-hidden border-4 border-white shadow-card">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Baby className="w-48 h-48" />
                </div>

                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="relative z-10 max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-black text-xs uppercase tracking-widest mb-4 backdrop-blur-md">
                        <Sparkles className="w-4 h-4" /> Nursery to Grade 2
                    </div>
                    <h1 className="font-heading font-black text-4xl sm:text-5xl mb-4 text-white">
                        Welcome to Lil Champs Arena! 🎈
                    </h1>
                    <p className="text-xl font-bold text-white/90 leading-relaxed">
                        The perfect place for our youngest stars to shine, speak, and show their magic to the world!
                    </p>
                </motion.div>
            </div>

            {/* ── Activities Selection ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ACTIVITIES.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className={cn(
                            "bg-white p-8 rounded-2xl border-2 border-brand-primary/10 shadow-card h-full flex flex-col group transition-all",
                            item.disabled && "opacity-75 grayscale-[0.5]"
                        )}>
                            <div className={cn(
                                "w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform shadow-lg",
                                item.color
                            )}>
                                <item.icon className="w-8 h-8" />
                            </div>

                            <div className="flex-1">
                                <span className={cn(
                                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-2 inline-block",
                                    item.disabled ? "bg-ink-tertiary/10 text-ink-tertiary" : "bg-brand-accent/10 text-brand-accent"
                                )}>
                                    {item.badge}
                                </span>
                                <h2 className="font-heading font-black text-2xl text-ink-primary mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-lg text-ink-secondary font-bold leading-relaxed mb-8">
                                    {item.desc}
                                </p>
                            </div>

                            {!item.disabled ? (
                                <Link href={item.href}>
                                    <button className={cn(
                                        "w-full py-3.5 rounded-xl text-lg font-black text-white transition-all transform flex items-center justify-center gap-2 active:scale-95",
                                        item.color, item.shadow
                                    )}>
                                        Go to Activity <ArrowRight className="w-5 h-5" />
                                    </button>
                                </Link>
                            ) : (
                                <button disabled className="w-full py-3.5 rounded-xl text-lg font-black text-ink-tertiary bg-surface-bg border-2 border-transparent cursor-not-allowed">
                                    Unlocks Soon! 🔒
                                </button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── Motivational Section ── */}
            <div className="bg-brand-purple p-8 rounded-3xl text-white text-center shadow-button-v border-4 border-white">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-heading font-black text-3xl mb-3">Become a Super Star! 🌟</h3>
                <p className="text-xl font-bold opacity-90 max-w-2xl mx-auto">
                    Participate in any Lil Champs activity to earn points, badges, and a chance to win a real gold-colored trophy!
                </p>
            </div>
        </div>
    );
}
