import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("@theme") !== "light" ? "dark" : "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const removeClass = theme === "light" ? "dark" : "light";
    root.classList.add(theme);
    root.classList.remove(removeClass);
    localStorage.setItem("@theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
