import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors select-none",
    {
        variants: {
            variant: {
                primary: "bg-surface-selected text-brand-primary border border-brand-primary/20",
                success: "bg-success-bg text-success-dark border border-success/20",
                warning: "bg-warning-bg text-warning-dark border border-warning/20",
                danger: "bg-danger-bg text-danger-dark border border-danger/20",
                secondary: "bg-cyan-50 text-cyan-700 border border-cyan-200",
                accent: "bg-orange-50 text-orange-700 border border-orange-200",
                neutral: "bg-surface-bg text-ink-secondary border border-surface-border",
                outline: "border border-surface-border text-ink-secondary bg-transparent",
                // Dot variants — have a coloured dot prefix
                "dot-success": "bg-success-bg text-success-dark border border-success/20 pl-2",
                "dot-warning": "bg-warning-bg text-warning-dark border border-warning/20 pl-2",
                "dot-danger": "bg-danger-bg text-danger-dark border border-danger/20 pl-2",
                "dot-secondary": "bg-cyan-50 text-cyan-700 border border-cyan-200 pl-2",
                "dot-neutral": "bg-surface-bg text-ink-secondary border border-surface-border pl-2",
            },
        },
        defaultVariants: {
            variant: "neutral",
        },
    }
);

// Dot colour map for dot variants
const DOT_COLORS: Record<string, string> = {
    "dot-success": "bg-success",
    "dot-warning": "bg-warning",
    "dot-danger": "bg-danger",
    "dot-secondary": "bg-brand-secondary",
    "dot-neutral": "bg-ink-tertiary",
};

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant = "neutral", children, ...props }: BadgeProps) {
    const dotColor = DOT_COLORS[variant as string];
    return (
        <span className={cn(badgeVariants({ variant }), className)} {...props}>
            {dotColor && <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColor)} />}
            {children}
        </span>
    );
}

export { Badge, badgeVariants };
