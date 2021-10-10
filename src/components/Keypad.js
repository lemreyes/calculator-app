import React, {useContext} from "react";
import Key from "./Key";

import classes from "./Keypad.module.css";
import ThemeContext from "./ThemeContext";

const Keypad = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${theme} ${classes.keypadContainer}`}>
      <Key text="7" />
      <Key text="8" />
      <Key text="9" />
      <Key text="del" />
      <Key text="4" />
      <Key text="5" />
      <Key text="6" />
      <Key text="+" />
      <Key text="1" />
      <Key text="2" />
      <Key text="3" />
      <Key text="-" />
      <Key text="." />
      <Key text="0" />
      <Key text="/" />
      <Key text="x" />
      <Key text="reset" />
      <Key text="=" />
    </div>
  );
};

export default Keypad;
