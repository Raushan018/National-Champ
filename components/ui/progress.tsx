import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva("h-full w-full flex-1 rounded-full transition-all duration-700 ease-out", {
    variants: {
        color: {
            primary: "bg-brand-primary",
            secondary: "bg-brand-secondary",
            accent: "bg-brand-accent",
            success: "bg-success",
            warning: "bg-warning",
            danger: "bg-danger",
            gradient: "bg-gradient-brand",
            "gradient-warm": "bg-gradient-warm",
        },
    },
    defaultVariants: { color: "primary" },
});

const trackVariants = cva("relative overflow-hidden rounded-full bg-surface-border", {
    variants: {
        size: {
            xs: "h-1",
            sm: "h-1.5",
            md: "h-2",
            lg: "h-3",
            xl: "h-4",
        },
    },
    defaultVariants: { size: "sm" },
});

export interface ProgressProps extends VariantProps<typeof progressVariants>, VariantProps<typeof trackVariants> {
    value: number;
    max?: number;
    className?: string;
    showLabel?: boolean;
    label?: string;
    /** Shows an animated shimmer on the bar */
    animated?: boolean;
}

function Progress({ value, max = 100, color, size, className, showLabel, label, animated }: ProgressProps) {
    const pct = Math.min(Math.max((value / max) * 100, 0), 100);
    return (
        <div className={cn("w-full", className)}>
            {(showLabel || label) && (
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-ink-secondary">{label ?? ""}</span>
                    <span className="text-xs font-medium text-ink-primary">{Math.round(pct)}%</span>
                </div>
            )}
            <ProgressPrimitive.Root className={cn(trackVariants({ size }))}>
                <ProgressPrimitive.Indicator
                    className={cn(progressVariants({ color }), animated && "relative overflow-hidden")}
                    style={{ transform: `translateX(-${100 - pct}%)` }}
                >
                    {animated && (
                        <span className="absolute inset-0 -translate-x-full animate-shimmer bg-shimmer bg-[length:200%_100%]" />
                    )}
                </ProgressPrimitive.Indicator>
            </ProgressPrimitive.Root>
        </div>
    );
}

export { Progress };
