import { useState, createContext, Children } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {Children}
    </ThemeContext.Provider>
  );
};
