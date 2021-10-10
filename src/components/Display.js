import React, { useContext } from "react";

import classes from "./Display.module.css";
import DisplayContext from "./DisplayContext";
import ThemeContext from "./ThemeContext";

export const MAX_DISPLAY_LENGTH = 11;

const Display = (props) => {
  const { theme } = useContext(ThemeContext);
  const { display } = useContext(DisplayContext);

  if (props.result === null) {
    props.result = 0;
  }

  console.log("Display display: " + display);

  return (
    <div className={`${theme} ${classes.DisplayContainer}`}>
      <span className={`${theme} ${classes.DisplayOutput}`}>{display}</span>
    </div>
  );
};

export default Display;
