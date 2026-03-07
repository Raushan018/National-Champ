import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for safe class merging.
 * Use this instead of raw `clsx` to avoid Tailwind class conflicts.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Formats a number with K/M/B suffix for compact display.
 * e.g. 12500 → "12.5K"
 */
export function formatNumber(n: number): string {
    if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return n.toLocaleString();
}

/**
 * Formats a percentage with +/- sign for delta display.
 */
export function formatDelta(delta: number): string {
    const sign = delta >= 0 ? "+" : "";
    return `${sign}${delta.toFixed(1)}%`;
}

/**
 * Returns consistent trend color class based on direction.
 */
export function trendColor(delta: number): string {
    return delta >= 0 ? "text-success" : "text-danger";
}

/**
 * Converts a score (0–100) to a color class.
 */
export function scoreColor(score: number): string {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-danger";
}

/**
 * Returns a status badge variant name.
 */
export type StatusVariant = "primary" | "success" | "warning" | "danger" | "secondary" | "neutral";

export function statusVariant(status: string): StatusVariant {
    const s = status.toLowerCase();
    if (["active", "completed", "winner", "approved"].includes(s)) return "success";
    if (["pending", "review", "upcoming"].includes(s)) return "warning";
    if (["inactive", "failed", "disqualified", "rejected"].includes(s)) return "danger";
    if (["live", "ongoing"].includes(s)) return "secondary";
    if (["draft"].includes(s)) return "neutral";
    return "primary";
}

/**
 * Generates initials from a name string.
 */
export function getInitials(name: string, max = 2): string {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, max)
        .map((w) => w[0].toUpperCase())
        .join("");
}

/**
 * Relative time formatter (e.g. "2 hours ago").
 */
export function timeAgo(date: Date | string): string {
    const now = new Date();
    const then = typeof date === "string" ? new Date(date) : date;
    const secs = Math.floor((now.getTime() - then.getTime()) / 1000);

    if (secs < 60) return "just now";
    if (secs < 3600) return `${Math.floor(secs / 60)}m ago`;
    if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`;
    if (secs < 604800) return `${Math.floor(secs / 86400)}d ago`;
    return then.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/**
 * Formats a date to a readable string.
 */
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-US", options ?? { year: "numeric", month: "short", day: "numeric" });
}

/**
 * Clamps a value between min and max.
 */
export function clamp(val: number, min: number, max: number): number {
    return Math.min(Math.max(val, min), max);
}

/**
 * Generates a stagger delay string for Framer Motion.
 */
export function staggerDelay(index: number, base = 0.05): number {
    return index * base;
}
