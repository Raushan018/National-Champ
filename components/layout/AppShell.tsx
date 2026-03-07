"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sidebar, SidebarProvider, useSidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/* ── Inner layout that reads sidebar context ───────────────────── */
function LayoutInner({ children }: { children: React.ReactNode }) {
    const { collapsed } = useSidebar();
    const pathname = usePathname();

    // Pages that should have no navigation at all
    const isAuthPage = pathname === "/login" || pathname === "/register";

    // The landing page should have a Navbar but NO Sidebar
    const isLandingPage = pathname === "/";

    if (isAuthPage) {
        return <div className="min-h-screen w-full">{children}</div>;
    }

    if (isLandingPage) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen">
            {/* Sidebar (Mainly for Dashboard/App sections) */}
            <Sidebar />

            {/* Main content area shifts based on sidebar width */}
            <motion.div
                className="flex-1 flex flex-col min-h-screen min-w-0"
                initial={false}
                animate={{
                    marginLeft: collapsed ? "5.5rem" : "18rem", // Matched to Sidebar.tsx widths
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {/* Top Navbar */}
                <Navbar />

                {/* Page content */}
                <main className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
                    {children}
                </main>
            </motion.div>
        </div>
    );
}

/* ── Exported wrapper ──────────────────────────────────────────── */
export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <LayoutInner>{children}</LayoutInner>
        </SidebarProvider>
    );
}
