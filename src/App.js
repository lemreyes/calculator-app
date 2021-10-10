import React, { useState, useEffect } from "react";

import classes from "./App.module.css";
import Header from "./components/Header";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import ThemeContext from "./components/ThemeContext";
import DisplayContext from "./components/DisplayContext";

function App() {
  /* color theme */
  const [theme, setTheme] = useState("theme1");
  const value = { theme, setTheme };

  /* calculator display */
  const [display, setDisplay] = useState("0");
  const displayValue = { display, setDisplay };

  /* update background color of parent when there is a change in theme */
  useEffect(() => {
    const root = document.getElementById("root");
    root.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`${theme} ${classes["App-container"]}`}>
        <Header />
        <DisplayContext.Provider value={displayValue}>
          <Display />
          <Keypad />
        </DisplayContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
