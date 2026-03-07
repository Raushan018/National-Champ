"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Rocket,
    Brain,
    Trophy,
    Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#F6FAFF] relative overflow-hidden">

            {/* ── Background Blobs ── */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[80px]" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl border-4 border-brand-primary/10 shadow-card overflow-hidden relative z-10"
            >
                {/* ── Left Side: Fun Info ── */}
                <div className="hidden lg:flex flex-col justify-center p-12 bg-brand-primary text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 p-8 opacity-10 scale-150">
                        <Rocket className="w-48 h-48" />
                    </div>

                    <motion.div initial={{ x: -20 }} animate={{ x: 0 }} className="relative z-10">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-6 shadow-xl -rotate-6">
                            <Trophy className="w-8 h-8" />
                        </div>
                        <h1 className="font-heading font-black text-4xl mb-4 leading-tight">Welcome Back, Hero! 🌟</h1>
                        <p className="text-xl font-bold text-white/90 leading-relaxed mb-8">
                            The Arena is waiting for you. Log in to continue your journey!
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: Brain, text: "Play Fun Quizzes" },
                                { icon: Sparkles, text: "Earn Shiny Badges" },
                                { icon: Trophy, text: "Reach the Top!" }
                            ].map(item => (
                                <div key={item.text} className="flex items-center gap-3 text-lg font-black">
                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-white" />
                                    </div>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ── Right Side: Form ── */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <div className="text-center mb-8">
                        <h2 className="font-heading font-black text-3xl text-ink-primary mb-1">Login to Arena</h2>
                        <p className="text-lg font-bold text-ink-secondary">Let&apos;s get playing! 🚀</p>
                    </div>

                    <form className="space-y-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-lg font-black text-ink-primary ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary" />
                                <input
                                    type="email"
                                    placeholder="your-name@cool.com"
                                    className="w-full pl-14 pr-6 py-3.5 rounded-xl bg-surface-bg border-2 border-transparent focus:border-brand-primary/20 focus:bg-white outline-none text-base font-bold transition-all"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-lg font-black text-ink-primary">Password</label>
                                <Link href="#" className="text-xs font-black text-brand-primary hover:underline">Forgot?</Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-14 pr-14 py-3.5 rounded-xl bg-surface-bg border-2 border-transparent focus:border-brand-primary/20 focus:bg-white outline-none text-base font-bold transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-ink-tertiary"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <button className="w-full py-4 rounded-2xl bg-brand-primary text-white font-black text-xl shadow-button-p hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center justify-center gap-3">
                            Start Journey! <ArrowRight className="w-6 h-6" />
                        </button>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-lg font-bold text-ink-secondary">
                            New here?{" "}
                            <Link href="/register" className="text-brand-primary font-black underline decoration-4 underline-offset-8">
                                Join the Arena! 🎉
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
