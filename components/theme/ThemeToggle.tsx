"use client";
import { useTheme } from "@/context/theme";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            {mounted && (
                <button className="nav-link" onClick={toggleTheme}>
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            )}
        </> 
    );
}