import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { AppShell } from "@/components/layout/AppShell";
import "@/styles/globals.css";

// ── Fonts ─────────────────────────────────────────────────────────
const baloo2 = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-baloo",
    display: "swap",
    preload: true,
});

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-nunito",
    display: "swap",
    preload: true,
});

// ── Metadata ───────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: {
        default: "National Championships | Fun Learning Arena",
        template: "%s | National Championships",
    },
    description:
        "India's most fun and exciting student championship platform for Grades Nursery to 9. Join the arena and become a champion!",
    keywords: ["national championships", "student competitions", "kid learning", "fun quizzes"],
    authors: [{ name: "National Championships Team" }],
    creator: "National Championships",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "National Championships",
        description: "Join the Arena of Champions!",
        siteName: "National Championships",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#4F9CF9",
};

// ── Root Layout ────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${baloo2.variable} ${nunito.variable}`}
        >
            <body className="antialiased font-body bg-[#F6FAFF]">
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <AppShell>
                        {children}
                    </AppShell>
                </ThemeProvider>
            </body>
        </html>
    );
}

