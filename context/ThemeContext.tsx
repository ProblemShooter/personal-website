
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Initialize with a default theme to avoid hydration mismatch.
    // The script in index.html prevents a flash of unstyled content (FOUC),
    // and this useEffect will sync the React state.
    const [theme, setTheme] = useState<Theme>('light');

    // This effect runs once on the client after mounting to set the correct theme.
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    // This effect synchronizes the theme state with the DOM (by adding/removing 'dark' class)
    // and localStorage whenever the theme changes.
    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
