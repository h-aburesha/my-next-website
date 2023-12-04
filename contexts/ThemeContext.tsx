import React from "react";

export const themes = {
    light: {
        "--background": "var(--white)",
        "--accent": "var(--black)",
    },
    dark: {
        "--background": "var(--black)",
        "--accent": "var(--white)",
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});
