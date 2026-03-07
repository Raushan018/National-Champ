import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none",
    {
        variants: {
            variant: {
                default:
                    "bg-brand-primary text-white shadow-sm hover:bg-brand-primary-dark hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
                secondary:
                    "bg-surface-card text-ink-primary border border-surface-border shadow-sm hover:bg-surface-hover hover:border-surface-border-strong",
                ghost:
                    "text-ink-secondary hover:bg-surface-hover hover:text-ink-primary",
                outline:
                    "border border-surface-border bg-transparent shadow-sm hover:bg-surface-hover text-ink-primary",
                destructive:
                    "bg-danger text-white shadow-sm hover:bg-danger-dark hover:-translate-y-0.5 active:translate-y-0",
                link: "text-brand-primary underline-offset-4 hover:underline p-0 h-auto",
                cyan: "bg-brand-secondary text-white shadow-sm hover:bg-brand-secondary-dark hover:-translate-y-0.5",
                accent: "bg-brand-accent text-white shadow-sm hover:bg-brand-accent-dark hover:-translate-y-0.5",
            },
            size: {
                default: "h-10 px-4 py-2.5",
                sm: "h-8 rounded-md px-3 py-1.5 text-xs",
                lg: "h-12 rounded-xl px-6 py-3 text-base",
                xl: "h-14 rounded-xl px-8 py-3.5 text-base",
                icon: "h-10 w-10 p-0",
                "icon-sm": "h-8 w-8 p-0",
                "icon-lg": "h-12 w-12 p-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || loading}
                {...props}
            >
                {loading ? (
                    <>
                        <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                        </svg>
                        <span>Loading…</span>
                    </>
                ) : (
                    children
                )}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
