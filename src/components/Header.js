import React, { useContext } from "react";
import ThemeToggle from "./ThemeToggle";

import classes from "./Header.module.css";
import ThemeContext from "./ThemeContext";

const Header = (props) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`${theme} ${classes.header}`}>
      <h1>calc</h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;
