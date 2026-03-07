/**
 * Centralized Chart.js theme configuration.
 * Import this in any chart component for consistent styling.
 */

export const CHART_COLORS = {
    primary: "#4F46E5",
    primaryAlpha: "rgba(79, 70, 229, 0.15)",
    secondary: "#06B6D4",
    secondaryAlpha: "rgba(6, 182, 212, 0.15)",
    accent: "#F97316",
    accentAlpha: "rgba(249, 115, 22, 0.15)",
    success: "#22C55E",
    successAlpha: "rgba(34, 197, 94, 0.15)",
    warning: "#FACC15",
    warningAlpha: "rgba(250, 204, 21, 0.15)",
    danger: "#EF4444",
    dangerAlpha: "rgba(239, 68, 68, 0.15)",
    grid: "rgba(0, 0, 0, 0.06)",
    gridDark: "rgba(255, 255, 255, 0.06)",
    text: "#6B7280",
    textDark: "#9CA3AF",
} as const;

export const CHART_PALETTE = [
    CHART_COLORS.primary,
    CHART_COLORS.secondary,
    CHART_COLORS.accent,
    CHART_COLORS.success,
    CHART_COLORS.warning,
    CHART_COLORS.danger,
];

export const CHART_PALETTE_ALPHA = [
    CHART_COLORS.primaryAlpha,
    CHART_COLORS.secondaryAlpha,
    CHART_COLORS.accentAlpha,
    CHART_COLORS.successAlpha,
    CHART_COLORS.warningAlpha,
    CHART_COLORS.dangerAlpha,
];

/** Default Chart.js options for a clean, minimal look */
export const defaultChartOptions = (isDark = false) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
            titleColor: isDark ? "#F9FAFB" : "#111827",
            bodyColor: isDark ? "#9CA3AF" : "#6B7280",
            borderColor: isDark ? "#374151" : "#E5E7EB",
            borderWidth: 1,
            cornerRadius: 8,
            padding: 10,
            displayColors: true,
            boxWidth: 10,
            boxHeight: 10,
            boxPadding: 4,
            usePointStyle: true,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            border: {
                display: false,
            },
            ticks: {
                color: isDark ? CHART_COLORS.textDark : CHART_COLORS.text,
                font: { size: 12, family: "'Inter', system-ui, sans-serif" },
            },
        },
        y: {
            grid: {
                color: isDark ? CHART_COLORS.gridDark : CHART_COLORS.grid,
                drawBorder: false,
            },
            border: {
                display: false,
                dash: [4, 4],
            },
            ticks: {
                color: isDark ? CHART_COLORS.textDark : CHART_COLORS.text,
                font: { size: 12, family: "'Inter', system-ui, sans-serif" },
                padding: 8,
            },
        },
    },
    elements: {
        line: {
            tension: 0.4,
        },
        point: {
            radius: 3,
            hoverRadius: 6,
        },
    },
    interaction: {
        mode: "index" as const,
        intersect: false,
    },
});

/** Doughnut/Pie chart defaults */
export const donutChartOptions = (isDark = false) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "right" as const,
            labels: {
                color: isDark ? CHART_COLORS.textDark : CHART_COLORS.text,
                font: { size: 12, family: "'Inter', system-ui, sans-serif" },
                padding: 16,
                usePointStyle: true,
                pointStyleWidth: 10,
            },
        },
        tooltip: {
            backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
            titleColor: isDark ? "#F9FAFB" : "#111827",
            bodyColor: isDark ? "#9CA3AF" : "#6B7280",
            borderColor: isDark ? "#374151" : "#E5E7EB",
            borderWidth: 1,
            cornerRadius: 8,
            padding: 10,
        },
    },
    cutout: "72%",
});

/** Bar chart defaults */
export const barChartOptions = (isDark = false) => ({
    ...defaultChartOptions(isDark),
    elements: {
        bar: {
            borderRadius: 6,
            borderSkipped: false,
        },
    },
});
