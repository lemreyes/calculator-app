import React, { useContext } from "react";
import { handleNumKeyPress } from "../helper/calc_helper";
import DisplayContext from "./DisplayContext";

import classes from "./Key.module.css";
import ThemeContext from "./ThemeContext";

const Key = (props) => {
  const { theme } = useContext(ThemeContext);
  const { display, setDisplay } = useContext(DisplayContext);

  const onClickHandler = () => {
    console.log("Key onClickHandler display " + display);
    setDisplay(handleNumKeyPress(props.text, display));
  };

  let keyStyle = "";
  if (props.text === "=") {
    keyStyle = classes.equalKeyStyle;
  } else if (props.text === "del") {
    keyStyle = classes.delKeyStyle;
  } else if (props.text === "reset") {
    keyStyle = classes.resetKeyStyle;
  } else {
    keyStyle = classes.regularKeyStyle;
  }

  return (
    <button
      type="submit"
      className={`${theme} ${keyStyle}`}
      onClick={onClickHandler}
    >
      {props.text}
    </button>
  );
};

export default Key;
