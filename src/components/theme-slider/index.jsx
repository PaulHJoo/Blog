import React, { useEffect } from "react";

import "./theme-slider.scss";

const ThemeSlider = ({ theme, setTheme }) => {
    useEffect(() => {
        setTheme(SetThemeFromLocalStorage());
    });

    if (typeof document !== "undefined") {
        if (theme === "light") {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }
    }

    const lightSelectedFont = theme === "light" ? "text-bold" : "";
    const darkSelectedFont = theme === "dark" ? "text-bold" : "";

    return (
        <div>
            <a onClick={() => SetTheme("light", theme, setTheme)} className={"letter-spacing-3 margin-r-15 " + lightSelectedFont }>
                LIGHT
            </a>
            <a onClick={() => SetTheme("dark", theme, setTheme)} className={"letter-spacing-3 " + darkSelectedFont } >
                DARK
            </a>
        </div>
    );
};

const SetThemeFromLocalStorage = () => {
    if (typeof(Storage) === undefined) {
        return "light";
    }

    var theme = window.localStorage.getItem("theme")
    if (theme === null) {
        window.localStorage.setItem("theme", "light");
        return "light";
    }
    
    return theme;
}

const SetTheme = (selectedTheme, theme ,setTheme) => {
    if (selectedTheme === theme) {
        return;
    }

    if (theme === "light") {
        setTheme("dark");
        window.localStorage.setItem("theme", "dark");
        return;
    }

    setTheme("light");
    window.localStorage.setItem("theme", "light");
}

export default ThemeSlider;