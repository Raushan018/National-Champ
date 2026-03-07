/**
 * Type-safe constants for the National Championships platform.
 */

export const APP_NAME = "National Championships" as const;
export const APP_SHORT_NAME = "NatChamp" as const;
export const APP_TAGLINE = "Where Champions Are Made" as const;

// Navigation items — used by sidebar and mobile nav
export const NAV_ITEMS = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: "LayoutDashboard",
        description: "Overview & analytics",
    },
    {
        label: "Competitions",
        href: "/competitions",
        icon: "Trophy",
        description: "Browse & manage events",
    },
    {
        label: "Participants",
        href: "/participants",
        icon: "Users",
        description: "Student directory",
    },
    {
        label: "Results",
        href: "/results",
        icon: "BarChart2",
        description: "Scores & rankings",
    },
    {
        label: "Schedule",
        href: "/schedule",
        icon: "Calendar",
        description: "Event calendar",
    },
    {
        label: "Analytics",
        href: "/analytics",
        icon: "TrendingUp",
        description: "Deep dive insights",
    },
    {
        label: "Settings",
        href: "/settings",
        icon: "Settings",
        description: "Platform configuration",
    },
] as const;

// Competition status options
export const COMPETITION_STATUSES = [
    "Upcoming",
    "Live",
    "Completed",
    "Draft",
    "Cancelled",
] as const;

export type CompetitionStatus = (typeof COMPETITION_STATUSES)[number];

// Participant status options
export const PARTICIPANT_STATUSES = [
    "Active",
    "Pending",
    "Disqualified",
    "Winner",
    "Runner-up",
] as const;

export type ParticipantStatus = (typeof PARTICIPANT_STATUSES)[number];

// Competition categories
export const COMPETITION_CATEGORIES = [
    "Science & Technology",
    "Mathematics",
    "Literature & Arts",
    "Sports",
    "Debate",
    "Engineering",
    "Music",
    "Environment",
] as const;

export type CompetitionCategory = (typeof COMPETITION_CATEGORIES)[number];

// Grade levels
export const GRADE_LEVELS = ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"] as const;

// Regions
export const REGIONS = ["North", "South", "East", "West", "Central", "International"] as const;

// Dashboard stat card identifiers
export const STAT_KEYS = [
    "totalStudents",
    "activeCompetitions",
    "awardsGiven",
    "completionRate",
] as const;

export type StatKey = (typeof STAT_KEYS)[number];
