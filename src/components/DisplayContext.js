import React from "react";

const DisplayContext = React.createContext({
  display: "0",
  setDisplay: () => {},
});

export default DisplayContext;
