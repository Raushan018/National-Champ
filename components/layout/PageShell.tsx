"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PageShellProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * PageShell wraps page content with consistent padding, max-width,
 * and a subtle mesh gradient background.
 */
export function PageShell({ children, className }: PageShellProps) {
    return (
        <main
            className={cn(
                "flex-1 min-h-0 overflow-y-auto",
                "bg-surface-bg bg-gradient-mesh",
                className
            )}
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 py-6 sm:py-8">
                {children}
            </div>
        </main>
    );
}

/**
 * PageHeader renders the page title + description + optional right actions.
 */
interface PageHeaderProps {
    title: string;
    description?: string;
    actions?: React.ReactNode;
    breadcrumb?: React.ReactNode;
    className?: string;
}

export function PageHeader({ title, description, actions, breadcrumb, className }: PageHeaderProps) {
    return (
        <div className={cn("flex flex-col gap-4 mb-8", className)}>
            {breadcrumb && <div>{breadcrumb}</div>}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="font-heading font-bold text-2xl sm:text-3xl text-ink-primary text-balance">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-base text-ink-secondary font-body text-pretty">{description}</p>
                    )}
                </div>
                {actions && (
                    <div className="flex items-center gap-2 shrink-0">{actions}</div>
                )}
            </div>
        </div>
    );
}

/**
 * Section is a named content section within a page.
 */
interface SectionProps {
    title?: string;
    description?: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export function Section({ title, description, actions, children, className }: SectionProps) {
    return (
        <section className={cn("flex flex-col gap-4", className)}>
            {(title || actions) && (
                <div className="flex items-center justify-between gap-4">
                    <div>
                        {title && (
                            <h2 className="font-heading font-semibold text-lg text-ink-primary">{title}</h2>
                        )}
                        {description && (
                            <p className="text-sm text-ink-secondary mt-0.5">{description}</p>
                        )}
                    </div>
                    {actions && <div className="flex items-center gap-2">{actions}</div>}
                </div>
            )}
            {children}
        </section>
    );
}

/**
 * Grid layout helpers — consistent responsive grid across all pages.
 */
export function StatsGrid({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6", className)}>
            {children}
        </div>
    );
}

export function TwoColumn({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-6", className)}>
            {children}
        </div>
    );
}

export function MainSideLayout({
    main,
    side,
    className,
}: {
    main: React.ReactNode;
    side: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("grid grid-cols-1 xl:grid-cols-[1fr_20rem] gap-6", className)}>
            {main}
            {side}
        </div>
    );
}
