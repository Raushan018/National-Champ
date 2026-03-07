"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Video,
    VideoOff,
    Mic,
    MicOff,
    Play,
    Square,
    Send,
    Clock,
    Sparkles,
    Star,
    Baby,
    RefreshCcw,
    CheckCircle2,
    ArrowLeft,
    Volume2,
    Lightbulb,
    Target,
    MessageCircle,
    Rocket,
    Camera,
    Trophy
} from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_TIME = 120; // 2 minutes

export default function SpeechSubmissionPage() {
    const [phase, setPhase] = useState<"ready" | "recording" | "preview" | "submitted">("ready");
    const [elapsed, setElapsed] = useState(0);
    const [cameraOn, setCameraOn] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const timerRef = useRef<any>(null);

    const formatTime = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${sec < 10 ? '0' : ''}${sec}`;
    };

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            streamRef.current = stream;
            if (videoRef.current) videoRef.current.srcObject = stream;
            setCameraOn(true);
        } catch (err) {
            alert("Please enable your camera and microphone! 📸");
        }
    };

    const stopCamera = () => {
        streamRef.current?.getTracks().forEach(t => t.stop());
        setCameraOn(false);
    };

    const handleStart = async () => {
        await startCamera();
        setPhase("recording");
        setElapsed(0);
        timerRef.current = setInterval(() => {
            setElapsed(prev => {
                if (prev >= MAX_TIME) {
                    handleStop();
                    return MAX_TIME;
                }
                return prev + 1;
            });
        }, 1000);
    };

    const handleStop = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setPhase("preview");
        stopCamera();
    };

    return (
        <div className="space-y-10 pb-12">

            {/* ── Topic Card ─────────────────────────────────────────── */}
            <div className="bg-brand-secondary p-8 rounded-3xl border-4 border-white shadow-button-s text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 p-6 opacity-20 -rotate-12 group-hover:rotate-0 transition-transform">
                    <Rocket className="w-16 h-16 text-white" />
                </div>

                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-brand-secondary font-black text-xs uppercase tracking-widest mb-4">
                        <Star className="w-4 h-4 fill-brand-secondary" /> Highlight Topic
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl text-white mb-3 leading-tight">
                        &ldquo;My Favourite Toy and the Adventures We Have!&rdquo; 🧸
                    </h1>
                    <p className="text-lg text-white/90 font-bold max-w-2xl mx-auto">
                        Tell us about your favorite toy! What makes it special? 🌟
                    </p>
                </motion.div>
            </div>

            {phase === "submitted" ? (
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-3xl mx-auto bg-white rounded-3xl border-4 border-brand-success p-12 text-center shadow-card relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-10 opacity-5">
                        <Trophy className="w-64 h-64 text-brand-success" />
                    </div>

                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-brand-success rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl animate-bounce">
                            <Trophy className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="font-heading font-black text-4xl sm:text-5xl text-ink-primary mb-4">
                            Super Job, Champ! 🏆
                        </h2>
                        <p className="text-2xl text-ink-secondary font-bold mb-10 max-w-lg mx-auto leading-relaxed">
                            Your speech has been submitted successfully! You just earned <span className="text-brand-success">50 Stars</span> for your courage! 🌟
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/lil-champs" className="w-full sm:w-auto">
                                <button className="w-full px-10 py-4 rounded-xl bg-brand-primary text-white font-black text-xl shadow-button-p hover:-translate-y-1 transition-transform flex items-center justify-center gap-3">
                                    Back to Arena <ArrowLeft className="w-6 h-6" />
                                </button>
                            </Link>
                            <Link href="/dashboard" className="w-full sm:w-auto">
                                <button className="w-full px-10 py-4 rounded-xl bg-white border-2 border-brand-primary text-brand-primary font-black text-xl hover:bg-surface-bg transition-colors">
                                    Go to Dashboard
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* ── Camera Preview Area ──────────────────────────────── */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white rounded-3xl border-4 border-brand-primary/10 shadow-card overflow-hidden relative">
                            {/* Video Frame */}
                            <div className="relative aspect-video bg-ink-primary flex items-center justify-center">
                                {cameraOn ? (
                                    <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-center text-white/40 space-y-3">
                                        <Camera className="w-20 h-20 mx-auto opacity-20" />
                                        <p className="text-xl font-black">Camera is sleeping... 😴</p>
                                    </div>
                                )}

                                {/* Overlays */}
                                {phase === "recording" && (
                                    <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-red-500 rounded-full text-white font-black text-base shadow-lg animate-pulse">
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                        REC {formatTime(elapsed)}
                                    </div>
                                )}

                                {phase === "preview" && (
                                    <div className="absolute inset-0 bg-brand-success/90 flex flex-col items-center justify-center text-white p-8 text-center backdrop-blur-sm">
                                        <CheckCircle2 className="w-24 h-24 mb-4" />
                                        <h3 className="font-heading font-black text-4xl mb-2">Great Speech! 🐯</h3>
                                        <p className="text-xl font-bold">You look like a real champion!</p>
                                    </div>
                                )}
                            </div>

                            {/* Controls Bar */}
                            <div className="p-8 flex flex-wrap items-center justify-center gap-4 bg-surface-bg/30">
                                {phase === "ready" && (
                                    <button
                                        onClick={handleStart}
                                        className="px-8 py-4 rounded-2xl bg-brand-primary text-white font-black text-xl shadow-button-p hover:-translate-y-1 transition-transform flex items-center gap-3"
                                    >
                                        <Play className="w-6 h-6 fill-white" /> Start Recording!
                                    </button>
                                )}

                                {phase === "recording" && (
                                    <button
                                        onClick={handleStop}
                                        className="px-8 py-4 rounded-2xl bg-red-500 text-white font-black text-xl shadow-button-e hover:-translate-y-1 transition-transform flex items-center gap-3 animate-pulse"
                                    >
                                        <Square className="w-6 h-6 fill-white" /> Stop & Review
                                    </button>
                                )}

                                {phase === "preview" && (
                                    <>
                                        <button
                                            onClick={() => setPhase("ready")}
                                            className="px-8 py-4 rounded-2xl bg-white border-2 border-brand-primary text-brand-primary font-black text-lg hover:bg-brand-primary hover:text-white transition-all flex items-center gap-2"
                                        >
                                            <RefreshCcw className="w-5 h-5" /> Try Again
                                        </button>
                                        <button
                                            onClick={() => setPhase("submitted")}
                                            className="px-10 py-5 rounded-2xl bg-brand-success text-white font-black text-xl shadow-button-s hover:-translate-y-1 transition-transform flex items-center gap-3"
                                        >
                                            <Send className="w-6 h-6" /> Submit Now!
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ── Guidelines ────────────────────────────────────────── */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl border-2 border-brand-purple/20 shadow-card">
                            <h3 className="font-heading font-black text-xl text-ink-primary mb-6 flex items-center gap-3">
                                <Lightbulb className="w-6 h-6 text-brand-purple" />
                                Speako-Tips! 💡
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { emoji: "😊", text: "Big smile for the camera!" },
                                    { emoji: "📣", text: "Speak loud and clear!" },
                                    { emoji: "🖐️", text: "Use your hands!" },
                                    { emoji: "👀", text: "Look at the lens!" }
                                ].map((tip, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-ink-secondary">
                                        <span className="text-2xl">{tip.emoji}</span>
                                        {tip.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-brand-primary p-8 rounded-3xl text-white shadow-button-p border-4 border-white text-center">
                            <Sparkles className="w-12 h-12 mx-auto mb-3 animate-pulse" />
                            <h4 className="font-heading font-black text-xl mb-1">You can do it!</h4>
                            <p className="text-sm font-bold opacity-90">Take a deep breath and have fun. ❤️</p>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}
