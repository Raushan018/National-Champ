/**
 * Framer Motion animation variants.
 * Import these for consistent motion design throughout the app.
 */
import type { Variants } from "framer-motion";

// --- Page transitions ---
export const pageVariants: Variants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
};

export const pageTransition = {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
};

// --- Container stagger ---
export const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
};

// --- Child item (used inside container stagger) ---
export const itemVariants: Variants = {
    initial: { opacity: 0, y: 16 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    },
};

// --- Fade in ---
export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

// --- Scale fade ---
export const scaleFade: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, scale: 0.97, transition: { duration: 0.15 } },
};

// --- Slide from right (drawer / sidebar) ---
export const slideInRight: Variants = {
    initial: { opacity: 0, x: 32 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, x: 32, transition: { duration: 0.2 } },
};

// --- Slide from left ---
export const slideInLeft: Variants = {
    initial: { opacity: 0, x: -32 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, x: -32, transition: { duration: 0.2 } },
};

// --- Slide from bottom (mobile sheet) ---
export const slideUp: Variants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.175, 0.885, 0.32, 1.275] } },
    exit: { opacity: 0, y: 16, transition: { duration: 0.2 } },
};

// --- Card hover preset ---
export const cardHover = {
    whileHover: { y: -2, boxShadow: "0 4px 12px 0 rgb(0 0 0 / 0.1)" },
    whileTap: { y: 0, scale: 0.99 },
    transition: { duration: 0.2, ease: "easeOut" },
};

// --- Button press ---
export const buttonPress = {
    whileTap: { scale: 0.97 },
    transition: { duration: 0.1 },
};

// --- Number count animation (used with useMotionValue) ---
export const countTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
};

// --- Sidebar collapse ---
export const sidebarVariants: Variants = {
    expanded: { width: "16rem", transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
    collapsed: { width: "4.5rem", transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
};

export const sidebarLabelVariants: Variants = {
    expanded: { opacity: 1, x: 0, display: "block", transition: { delay: 0.1, duration: 0.2 } },
    collapsed: { opacity: 0, x: -8, transitionEnd: { display: "none" } },
};

// --- Toast/notification slide ---
export const toastVariants: Variants = {
    initial: { opacity: 0, x: 48, scale: 0.96 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, x: 48, scale: 0.96, transition: { duration: 0.2 } },
};
