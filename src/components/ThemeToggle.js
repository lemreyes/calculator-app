import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

import classes from "./ThemeToggle.module.css";

const ThemeToggle = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  var dotPosition = "";

  const onClickHandler = () => {
    changeTheme(theme, setTheme);
  };
  /*
  const onKeyDownHandler = (event) => {
    if (event.key === "t") {
      changeTheme(theme);
    }
  };
*/
  const changeTheme = (current_theme, func, dotPosition) => {
    let style = "";
    if (current_theme === "theme1") {
      func("theme2");
    } else if (current_theme === "theme2") {
      func("theme3");
    } else {
      func("theme1");
    }
    return style;
  };

  if (theme === "theme1") {
    dotPosition = "";
  } else if (theme === "theme2") {
    dotPosition = classes.dot_1to2;
  } else {
    dotPosition = classes.dot_2to3;
  }

  return (
    <div className={classes.ToggleSwitch}>
      <span className={classes.SwitchLabel}>THEME</span>
      <div
        role="button"
        className={`${theme} ${classes.switchContainer}`}
        onClick={onClickHandler}
      >
        <span className={` ${theme} ${classes.ToggleLabel}`}>1 2 3</span>
        <div id="dot" className={`${theme} ${classes.dot} ${dotPosition}`} />
      </div>
    </div>
  );
};

export default ThemeToggle;
