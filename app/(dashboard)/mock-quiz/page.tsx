"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2,
    XCircle,
    Clock,
    ArrowRight,
    ArrowLeft,
    Trophy,
    Sparkles,
    BookOpen,
    Calculator,
    Globe2,
    Code2,
    Brain,
    Target,
    Send,
    Star,
    Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Mock Data for Kids ────────────────────────────────────────── */
const QUESTIONS = [
    { id: 1, question: "Which animal is known as the King of the Jungle? 🦁", options: ["Elephant", "Lion", "Tiger", "Giraffe"], correct: 1 },
    { id: 2, question: "What is 15 + 25? 🔢", options: ["30", "35", "40", "45"], correct: 2 },
    { id: 3, question: "Which planet do we live on? 🌍", options: ["Mars", "Venus", "Earth", "Saturn"], correct: 2 },
    { id: 4, question: "What falls from the sky during a thunderstorm? ⛈️", options: ["Snow", "Rain", "Ice Cream", "Leaves"], correct: 1 },
    { id: 5, question: "How many legs does a spider have? 🕷️", options: ["6", "8", "10", "4"], correct: 1 },
];

const CATEGORIES = [
    { id: "english", name: "English Fun 📚", icon: BookOpen, color: "bg-brand-purple", border: "border-brand-purple/20" },
    { id: "maths", name: "Maths Magic ➗", icon: Calculator, color: "bg-brand-primary", border: "border-brand-primary/20" },
    { id: "gk", name: "World Explorer 🌍", icon: Globe2, color: "bg-brand-success", border: "border-brand-success/20" },
    { id: "coding", name: "Code Hero 💻", icon: Code2, color: "bg-brand-accent", border: "border-brand-accent/20" },
];

interface Category {
    id: string;
    name: string;
    icon: any;
    color: string;
    border: string;
}

export default function MockQuizPage() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>([]);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (quizStarted && !submitted && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setSubmitted(true);
        }
    }, [quizStarted, submitted, timeLeft]);

    const handleSelectOption = (optIdx: number) => {
        const newAnswers = [...answers];
        newAnswers[currentIdx] = optIdx;
        setAnswers(newAnswers);
    };

    const handleStart = (cat: Category) => {
        setSelectedCategory(cat);
        setAnswers(new Array(QUESTIONS.length).fill(null));
        setQuizStarted(true);
    };

    const handleNext = () => {
        if (currentIdx < QUESTIONS.length - 1) setCurrentIdx(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentIdx > 0) setCurrentIdx(prev => prev - 1);
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    // ── Pre-quiz: Selection ──
    if (!quizStarted) {
        return (
            <div className="space-y-12 max-w-4xl mx-auto py-12">
                <div className="text-center">
                    <div className="w-20 h-20 bg-brand-primary rounded-[32px] flex items-center justify-center text-white mx-auto mb-6 shadow-button-p">
                        <Brain className="w-10 h-10" />
                    </div>
                    <h1 className="font-heading font-black text-5xl text-ink-primary">Practice Arena 🧠</h1>
                    <p className="text-2xl text-ink-secondary font-bold">Pick a category and sharpen your skills!</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {CATEGORIES.map(cat => (
                        <motion.button
                            key={cat.id}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleStart(cat)}
                            className={cn(
                                "p-10 rounded-[48px] bg-white border-8 text-center flex flex-col items-center gap-6",
                                cat.border, "shadow-card hover:shadow-card-lg transition-shadow"
                            )}
                        >
                            <div className={cn("w-20 h-20 rounded-[28px] flex items-center justify-center text-white", cat.color)}>
                                <cat.icon className="w-10 h-10" />
                            </div>
                            <h2 className="font-heading font-black text-3xl text-ink-primary">{cat.name}</h2>
                            <p className="text-lg text-ink-secondary font-bold">10-Question Masterclass</p>
                            <span className="px-8 py-3 bg-surface-bg rounded-2xl text-brand-primary font-black text-xl">Let&apos;s Go! 🚀</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        );
    }

    // ── Results Screen ──
    if (submitted) {
        const score = answers.reduce((acc: number, a, i) => acc + (a === QUESTIONS[i].correct ? 1 : 0), 0);
        return (
            <div className="max-w-2xl mx-auto py-20 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-10">
                    <div className="w-48 h-48 bg-brand-secondary rounded-[60px] flex items-center justify-center text-white mx-auto shadow-button-s -rotate-3">
                        <Trophy className="w-24 h-24" />
                    </div>
                </motion.div>
                <h1 className="font-heading font-black text-6xl text-ink-primary mb-4">Super Job! 🎉</h1>
                <p className="text-3xl text-ink-secondary font-bold mb-10">You got <span className="text-brand-primary">{score}</span> out of <span className="text-brand-primary">{QUESTIONS.length}</span> correct!</p>

                <div className="bg-white p-10 rounded-[48px] border-8 border-brand-primary/10 shadow-card mb-12">
                    <div className="flex justify-center gap-4 mb-8">
                        {answers.map((a, i) => (
                            <div key={i} className={cn(
                                "w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black text-white",
                                a === QUESTIONS[i].correct ? "bg-brand-success" : "bg-red-400"
                            )}>
                                {i + 1}
                            </div>
                        ))}
                    </div>
                    <p className="text-xl font-bold text-ink-secondary">Amazing effort! Your brain is growing stronger every day. ✨</p>
                </div>

                <div className="flex gap-4 justify-center">
                    <button onClick={() => window.location.reload()} className="px-10 py-5 bg-brand-primary text-white rounded-[24px] text-2xl font-black shadow-button-p">
                        Play Again! 🔄
                    </button>
                    <button onClick={() => setQuizStarted(false)} className="px-10 py-5 bg-white border-4 border-brand-secondary text-brand-secondary rounded-[24px] text-2xl font-black shadow-card">
                        Other Quizzes
                    </button>
                </div>
            </div>
        );
    }

    // ── Quiz Interface ──
    const q = QUESTIONS[currentIdx];

    if (!selectedCategory) return null;

    return (
        <div className="max-w-4xl mx-auto py-10 space-y-10">
            {/* Top Bar */}
            <div className="flex items-center justify-between bg-white p-6 rounded-[32px] border-4 border-brand-primary/10 shadow-card">
                <div className="flex items-center gap-6">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white", selectedCategory.color)}>
                        <selectedCategory.icon className="w-7 h-7" />
                    </div>
                    <div>
                        <h2 className="font-heading font-black text-2xl text-ink-primary">{selectedCategory.name}</h2>
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-brand-secondary fill-brand-secondary" />
                            <span className="font-black text-ink-secondary">Question {currentIdx + 1}/{QUESTIONS.length}</span>
                        </div>
                    </div>
                </div>
                <div className={cn(
                    "px-8 py-3 rounded-2xl font-black text-2xl flex items-center gap-3 transition-colors",
                    timeLeft < 60 ? "bg-red-100 text-red-500 animate-pulse" : "bg-brand-primary/10 text-brand-primary"
                )}>
                    <Clock className="w-6 h-6" />
                    {formatTime(timeLeft)}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-6 bg-white rounded-full border-4 border-brand-primary/5 p-1 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
                    className="h-full bg-brand-primary rounded-full"
                />
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIdx}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    className="bg-white p-12 rounded-[60px] border-8 border-brand-primary/10 shadow-card"
                >
                    <h3 className="font-heading font-black text-4xl text-ink-primary mb-12 text-center leading-tight">
                        {q.question}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {q.options.map((opt, i) => {
                            const isSelected = answers[currentIdx] === i;
                            return (
                                <motion.button
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleSelectOption(i)}
                                    className={cn(
                                        "p-8 rounded-[32px] border-4 text-2xl font-black transition-all text-left flex items-center gap-6",
                                        isSelected
                                            ? "bg-brand-primary text-white border-white shadow-button-p scale-105"
                                            : "bg-surface-bg text-ink-secondary border-brand-primary/5 hover:border-brand-primary/20"
                                    )}
                                >
                                    <span className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0",
                                        isSelected ? "bg-white text-brand-primary" : "bg-white border-2 border-brand-primary/10 text-brand-primary"
                                    )}>
                                        {String.fromCharCode(65 + i)}
                                    </span>
                                    {opt}
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center px-4">
                <button
                    onClick={handlePrev}
                    disabled={currentIdx === 0}
                    className="px-10 py-5 rounded-[24px] text-2xl font-black text-brand-primary bg-white shadow-card disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-3"
                >
                    <ArrowLeft className="w-6 h-6" /> Back
                </button>
                {currentIdx < QUESTIONS.length - 1 ? (
                    <button
                        onClick={handleNext}
                        disabled={answers[currentIdx] === null}
                        className="px-10 py-5 rounded-[24px] text-2xl font-black text-white bg-brand-primary shadow-button-p disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                    >
                        Next <ArrowRight className="w-6 h-6" />
                    </button>
                ) : (
                    <button
                        onClick={() => setSubmitted(true)}
                        disabled={answers[currentIdx] === null}
                        className="px-12 py-5 rounded-[24px] text-2xl font-black text-white bg-brand-success shadow-button-s disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                    >
                        Finish! <Target className="w-6 h-6" />
                    </button>
                )}
            </div>
        </div>
    );
}
