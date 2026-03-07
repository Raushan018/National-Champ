"use client";

import React, { useState, createContext, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    Trophy,
    FileQuestion,
    BarChart3,
    Mic2,
    ChevronLeft,
    Settings,
    LogOut,
    HelpCircle,
    Star,
    Rocket,
    Medal
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Sidebar context for sharing collapsed state ───────────────── */
interface SidebarContextType {
    collapsed: boolean;
    setCollapsed: (v: boolean) => void;
    toggle: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
    collapsed: false,
    setCollapsed: () => { },
    toggle: () => { },
});

export const useSidebar = () => useContext(SidebarContext);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed((c) => !c);
    return (
        <SidebarContext.Provider value={{ collapsed, setCollapsed, toggle }}>
            {children}
        </SidebarContext.Provider>
    );
}

/* ── Navigation items ──────────────────────────────────────────── */
const NAV_ITEMS = [
    { label: "Dashboard", href: "/dashboard", icon: Home, color: "bg-brand-primary" },
    { label: "Competitions", href: "/competitions", icon: Trophy, color: "bg-brand-success" },
    { label: "Mock Quiz", href: "/mock-quiz", icon: FileQuestion, color: "bg-brand-purple" },
    { label: "Leaderboard", href: "/leaderboard", icon: BarChart3, color: "bg-brand-secondary" },
    { label: "Speech", href: "/lil-champs/speech", icon: Mic2, color: "bg-brand-accent" },
] as const;

const BOTTOM_ITEMS = [
    { label: "Badges", href: "/achievements", icon: Medal, color: "bg-brand-primary" },
    { label: "Settings", href: "/settings", icon: Settings, color: "bg-ink-tertiary" },
] as const;

/* ── Animation variants ────────────────────────────────────────── */
const sidebarVariants = {
    expanded: {
        width: "16rem",
        transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    collapsed: {
        width: "5rem",
        transition: { type: "spring", stiffness: 300, damping: 30 },
    },
};

/* ── Sidebar Component ─────────────────────────────────────────── */
export function Sidebar() {
    const { collapsed, toggle } = useSidebar();
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/dashboard") return pathname === "/dashboard";
        return pathname.startsWith(href);
    };

    return (
        <motion.aside
            initial={false}
            animate={collapsed ? "collapsed" : "expanded"}
            variants={sidebarVariants}
            className={cn(
                "fixed top-0 left-0 z-40 h-screen flex flex-col pt-4 pb-6 px-3 bg-white border-r-2 border-brand-primary/10 shadow-md"
            )}
        >
            {/* ── Logo ────────────────────────────────────────────── */}
            <div className="flex items-center justify-center mb-8 shrink-0">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-primary rounded-lg shadow-button-p flex items-center justify-center -rotate-6">
                        <Trophy className="w-6 h-6 text-white" />
                    </div>
                    {!collapsed && (
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="font-heading font-black text-lg text-ink-primary tracking-tight"
                        >
                            Arena <span className="text-brand-primary">Champ</span>
                        </motion.span>
                    )}
                </Link>
            </div>

            {/* ── Navigation ──────────────────────────────────────── */}
            <nav className="flex-1 space-y-3 overflow-y-auto no-scrollbar">
                {NAV_ITEMS.map((item) => {
                    const active = isActive(item.href);
                    const Icon = item.icon;

                    return (
                        <Link key={item.href} href={item.href}>
                            <motion.div
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className={cn(
                                    "relative flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-all duration-200",
                                    active
                                        ? "bg-brand-primary text-white shadow-button-p"
                                        : "bg-surface-bg/50 text-ink-secondary hover:bg-surface-bg border-2 border-transparent hover:border-brand-primary/10"
                                )}
                            >
                                <div className={cn(
                                    "flex items-center justify-center w-9 h-9 rounded-lg shrink-0",
                                    active ? "bg-white/20" : item.color,
                                    !active && "text-white"
                                )}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                {!collapsed && (
                                    <span className="font-bold text-base">{item.label}</span>
                                )}

                                {active && !collapsed && (
                                    <motion.div
                                        layoutId="active-nav-dot"
                                        className="ml-auto w-2 h-2 bg-white rounded-full"
                                    />
                                )}
                            </motion.div>
                        </Link>
                    );
                })}
            </nav>

            {/* ── Bottom Section ───────────────────────────────────── */}
            <div className="mt-auto space-y-2 pt-4 border-t-2 border-brand-primary/5">
                {BOTTOM_ITEMS.map((item) => (
                    <Link key={item.label} href={item.href}>
                        <div className={cn(
                            "flex items-center gap-3 p-2 rounded-xl text-ink-secondary hover:bg-surface-bg transition-colors",
                            collapsed && "justify-center"
                        )}>
                            <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center", item.color, "text-white shadow-sm")}>
                                <item.icon className="w-4 h-4" />
                            </div>
                            {!collapsed && <span className="font-bold text-sm">{item.label}</span>}
                        </div>
                    </Link>
                ))}

                <button
                    onClick={toggle}
                    className={cn(
                        "w-full flex items-center gap-3 p-2 rounded-xl text-ink-tertiary hover:bg-surface-bg transition-all",
                        collapsed && "justify-center"
                    )}
                >
                    <div className="w-9 h-9 flex items-center justify-center">
                        <motion.div animate={{ rotate: collapsed ? 180 : 0 }}>
                            <ChevronLeft className="w-5 h-5" />
                        </motion.div>
                    </div>
                    {!collapsed && <span className="font-bold text-sm">Hide Menu</span>}
                </button>
            </div>
        </motion.aside>
    );
}
