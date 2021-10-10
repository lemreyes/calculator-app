import React from "react";

const ThemeContext = React.createContext({
  theme: "theme1",
  setTheme: () => {},
});

export default ThemeContext;
