import * as React from "react";
import { cn } from "@/lib/utils";

// ── Card Root ──────────────────────────────────────────────────────
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Adds a hover lift effect */
    hoverable?: boolean;
    /** Makes the card borderless/flat */
    flat?: boolean;
    /** Applies the gradient card background */
    gradient?: boolean;
    /** Removes padding — use when building custom inner layouts */
    noPad?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverable, flat, gradient, noPad, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "bg-surface-card rounded-xl border border-surface-border",
                !flat && "shadow-card",
                !noPad && "p-6",
                hoverable &&
                "cursor-pointer transition-all duration-200 hover:shadow-card-hover hover:-translate-y-px",
                gradient && "bg-gradient-card",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

// ── Card Header ────────────────────────────────────────────────────
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-col gap-1 pb-4 border-b border-surface-border mb-4", className)}
            {...props}
        />
    )
);
CardHeader.displayName = "CardHeader";

// ── Card Title ─────────────────────────────────────────────────────
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn("font-heading font-semibold text-base text-ink-primary leading-tight", className)}
            {...props}
        />
    )
);
CardTitle.displayName = "CardTitle";

// ── Card Description ───────────────────────────────────────────────
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("text-sm text-ink-secondary", className)}
            {...props}
        />
    )
);
CardDescription.displayName = "CardDescription";

// ── Card Content ───────────────────────────────────────────────────
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("", className)} {...props} />
    )
);
CardContent.displayName = "CardContent";

// ── Card Footer ────────────────────────────────────────────────────
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center pt-4 border-t border-surface-border mt-4", className)}
            {...props}
        />
    )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
