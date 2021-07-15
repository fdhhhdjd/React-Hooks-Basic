import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  //states
  const [theme, setTheme] = useState({
    isFlag: true,
    light: {
      background: "rgb(240,240,240)",
      color: "black",
    },
    dark: {
      background: "rgb(39,39,39)",
      color: "white",
    },
  });
  const ToggleTheme = () => {
    setTheme({
      ...theme,
      isFlag: !theme.isFlag,
    });
  };
  const ThemeContextData = {
    theme,
    ToggleTheme,
  };
  return (
    <ThemeContext.Provider value={ThemeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
