import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn, getInitials } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// ── Primitive wrappers ─────────────────────────────────────────────
const AvatarRoot = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn("relative flex shrink-0 overflow-hidden rounded-full", className)}
        {...props}
    />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full object-cover", className)}
        {...props}
    />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center rounded-full bg-gradient-brand text-white font-heading font-semibold",
            className
        )}
        {...props}
    />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// ── High-level Avatar component ────────────────────────────────────
const avatarSizes = cva("relative flex shrink-0 overflow-hidden rounded-full", {
    variants: {
        size: {
            xs: "h-7 w-7 text-xs",
            sm: "h-8 w-8 text-xs",
            md: "h-10 w-10 text-sm",
            lg: "h-12 w-12 text-base",
            xl: "h-16 w-16 text-lg",
            "2xl": "h-20 w-20 text-xl",
        },
    },
    defaultVariants: { size: "md" },
});

export interface AvatarProps extends VariantProps<typeof avatarSizes> {
    src?: string;
    alt?: string;
    name?: string;
    className?: string;
    /** Show an online/offline status ring */
    status?: "online" | "offline" | "away" | "busy";
}

const STATUS_RING: Record<NonNullable<AvatarProps["status"]>, string> = {
    online: "ring-2 ring-white ring-offset-1 after:bg-success",
    offline: "ring-2 ring-white ring-offset-1 after:bg-ink-tertiary",
    away: "ring-2 ring-white ring-offset-1 after:bg-warning",
    busy: "ring-2 ring-white ring-offset-1 after:bg-danger",
};

function Avatar({ src, alt, name, size, className, status }: AvatarProps) {
    const initials = name ? getInitials(name) : "?";
    return (
        <div className="relative inline-flex shrink-0">
            <AvatarRoot className={cn(avatarSizes({ size }), className)}>
                {src && <AvatarImage src={src} alt={alt ?? name ?? "avatar"} />}
                <AvatarFallback>{initials}</AvatarFallback>
            </AvatarRoot>
            {status && (
                <span
                    className={cn(
                        "absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full border-2 border-white",
                        status === "online" && "bg-success",
                        status === "offline" && "bg-ink-tertiary",
                        status === "away" && "bg-warning",
                        status === "busy" && "bg-danger"
                    )}
                />
            )}
        </div>
    );
}

// ── Avatar group ───────────────────────────────────────────────────
interface AvatarGroupProps {
    items: Array<{ src?: string; name: string }>;
    max?: number;
    size?: AvatarProps["size"];
    className?: string;
}

function AvatarGroup({ items, max = 4, size = "sm", className }: AvatarGroupProps) {
    const shown = items.slice(0, max);
    const rest = items.length - max;
    return (
        <div className={cn("flex items-center", className)}>
            {shown.map((item, i) => (
                <div key={i} className="-ml-2 first:ml-0 ring-2 ring-white rounded-full">
                    <Avatar src={item.src} name={item.name} size={size} />
                </div>
            ))}
            {rest > 0 && (
                <div
                    className={cn(
                        "-ml-2 ring-2 ring-white rounded-full bg-surface-bg border border-surface-border flex items-center justify-center font-medium text-ink-secondary",
                        avatarSizes({ size })
                    )}
                    style={{ fontSize: "0.65rem" }}
                >
                    +{rest}
                </div>
            )}
        </div>
    );
}

export { Avatar, AvatarGroup, AvatarRoot, AvatarImage, AvatarFallback };
