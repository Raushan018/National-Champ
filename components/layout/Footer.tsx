"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Medal,
    Twitter,
    Github,
    Linkedin,
    Instagram,
    Youtube,
    Mail,
    MapPin,
    Phone,
    ArrowUpRight,
    Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── Footer columns ─────────────────────────────────────────────────
const FOOTER_LINKS = [
    {
        title: "Platform",
        links: [
            { label: "Competitions", href: "/competitions" },
            { label: "Leaderboard", href: "/leaderboard" },
            { label: "How It Works", href: "/how-it-works" },
            { label: "Pricing", href: "/pricing" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "/careers", badge: "Hiring" },
            { label: "Blog", href: "/blog" },
            { label: "Press Kit", href: "/press" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Help Center", href: "/help" },
            { label: "Community", href: "/community" },
            { label: "API Docs", href: "/docs", external: true },
            { label: "Status", href: "/status", external: true },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "GDPR", href: "/gdpr" },
        ],
    },
] as const;

const SOCIALS = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
] as const;

// ── Footer ─────────────────────────────────────────────────────────
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-[#0B0F1A] text-white">
            {/* Background gradient mesh */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-primary/[0.06] blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-secondary/[0.05] blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                {/* ── Top section: Logo + link columns ────────────────── */}
                <div className="pt-16 pb-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">

                    {/* Logo column */}
                    <div className="col-span-2 sm:col-span-3 lg:col-span-2 flex flex-col gap-6">
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary">
                                <Medal className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-heading font-bold text-[15px] text-white tracking-tight">
                                    National
                                </span>
                                <span className="font-heading font-bold text-[13px] bg-gradient-to-r from-brand-primary-light to-brand-secondary bg-clip-text text-transparent -mt-0.5">
                                    Championships
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            The premiere competition management platform for student excellence.
                            Empowering the next generation of champions.
                        </p>

                        {/* Contact info */}
                        <div className="flex flex-col gap-2.5 text-sm text-gray-500">
                            <a href="mailto:contact@nationalchampionships.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-200">
                                <Mail className="w-3.5 h-3.5" />
                                contact@nationalchampionships.com
                            </a>
                            <span className="flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 shrink-0" />
                                New Delhi, India
                            </span>
                        </div>

                        {/* Social icons */}
                        <div className="flex items-center gap-2 mt-1">
                            {SOCIALS.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
                                        aria-label={s.label}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link columns */}
                    {FOOTER_LINKS.map((col) => (
                        <div key={col.title} className="flex flex-col gap-4">
                            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-gray-400">
                                {col.title}
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="group inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors duration-200"
                                            {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            <span>{link.label}</span>
                                            {"external" in link && link.external && (
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            )}
                                            {"badge" in link && link.badge && (
                                                <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-semibold bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
                                                    {link.badge}
                                                </span>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── Bottom bar ──────────────────────────────────────── */}
                <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                        © {currentYear} National Championships. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600 flex items-center gap-1">
                        Made with <Heart className="w-3 h-3 text-danger fill-danger" /> for student excellence
                    </p>
                </div>
            </div>
        </footer>
    );
}
