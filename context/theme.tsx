"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

const getDefaultValue = () => {
    if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "light";
    }
    return "light";
}

// expoert a react array function component
export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState(getDefaultValue());

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
};

export const useTheme = () => useContext(ThemeContext);
