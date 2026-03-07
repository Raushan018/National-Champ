/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
        "./*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                heading: ["var(--font-baloo)", "system-ui", "sans-serif"],
                body: ["var(--font-nunito)", "system-ui", "sans-serif"],
                sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
            },
            colors: {
                // Kid-friendly palette
                brand: {
                    primary: "#4F9CF9",    // Primary Blue
                    secondary: "#FFD93D",  // Sunny Yellow
                    accent: "#FF8A5B",     // Playful Orange
                    success: "#4CD964",    // Happy Green
                    purple: "#A78BFA",     // Soft Purple
                    "primary-light": "#70B4FF",
                    "secondary-light": "#FFE682",
                    "accent-light": "#FFA685",
                },
                // Semantic colors
                success: {
                    DEFAULT: "#4CD964",
                    light: "#7DED8F",
                    dark: "#3BB550",
                    bg: "#F0FFF4",
                },
                warning: {
                    DEFAULT: "#FFD93D",
                    light: "#FFE682",
                    dark: "#E6C100",
                    bg: "#FFFFF0",
                },
                danger: {
                    DEFAULT: "#FF5B5B",
                    light: "#FF8F8F",
                    dark: "#E64242",
                    bg: "#FFF5F5",
                },
                // Surface palette
                surface: {
                    bg: "#F6FAFF",         // Light blue background
                    card: "#FFFFFF",
                    border: "#E0E7FF",
                    "border-strong": "#C7D2FE",
                    hover: "#F0F4FF",
                    selected: "#E0E7FF",
                },
                // Text palette
                ink: {
                    primary: "#2D3748",    // Soft dark blue/gray
                    secondary: "#718096",
                    tertiary: "#A0AEC0",
                    disabled: "#CBD5E0",
                    inverse: "#FFFFFF",
                    brand: "#4F9CF9",
                },
                // Shadcn compatibility layer
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#4F9CF9",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#FFD93D",
                    foreground: "#2D3748",
                },
                destructive: {
                    DEFAULT: "#FF5B5B",
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "#F1F5F9",
                    foreground: "#64748B",
                },
                accent: {
                    DEFAULT: "#FF8A5B",
                    foreground: "#FFFFFF",
                },
            },
            borderRadius: {
                lg: "16px",
                md: "12px",
                sm: "8px",
                xl: "24px",
                "2xl": "32px",
                full: "9999px",
            },
            spacing: {
                18: "4.5rem",
                22: "5.5rem",
            },
            boxShadow: {
                card: "0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
                "card-hover": "0 12px 24px rgba(79, 156, 249, 0.12), 0 8px 16px rgba(79, 156, 249, 0.06)",
                "card-lg": "0 20px 40px rgba(0, 0, 0, 0.1)",
                glow: "0 0 0 3px rgba(79, 156, 249, 0.15)",
                "button-p": "0 4px 0 0 #3A83D8",
                "button-s": "0 4px 0 0 #E6C100",
                "button-a": "0 4px 0 0 #E67A4F",
            },
            backgroundImage: {
                "gradient-brand": "linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)",
                "gradient-warm": "linear-gradient(135deg, #F97316 0%, #FACC15 100%)",
                "gradient-success": "linear-gradient(135deg, #22C55E 0%, #06B6D4 100%)",
                "gradient-card": "linear-gradient(135deg, rgba(79,70,229,0.05) 0%, rgba(6,182,212,0.05) 100%)",
                "gradient-mesh": "radial-gradient(at 40% 20%, rgba(79,70,229,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6,182,212,0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(249,115,22,0.04) 0px, transparent 50%)",
                "shimmer": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    from: { opacity: "0", transform: "translateY(8px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in-left": {
                    from: { opacity: "0", transform: "translateX(-16px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "scale-in": {
                    from: { opacity: "0", transform: "scale(0.95)" },
                    to: { opacity: "1", transform: "scale(1)" },
                },
                shimmer: {
                    from: { backgroundPosition: "-200% 0" },
                    to: { backgroundPosition: "200% 0" },
                },
                "pulse-ring": {
                    "0%": { transform: "scale(0.8)", opacity: "0.8" },
                    "100%": { transform: "scale(2)", opacity: "0" },
                },
                "slide-in-right": {
                    from: { transform: "translateX(100%)", opacity: "0" },
                    to: { transform: "translateX(0)", opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-6px)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.4s ease-out",
                "fade-in-left": "fade-in-left 0.4s ease-out",
                "scale-in": "scale-in 0.3s ease-out",
                shimmer: "shimmer 2s linear infinite",
                "pulse-ring": "pulse-ring 1.5s ease-out infinite",
                "slide-in-right": "slide-in-right 0.3s ease-out",
                float: "float 3s ease-in-out infinite",
            },
            transitionTimingFunction: {
                spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
