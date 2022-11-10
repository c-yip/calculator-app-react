import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [input, setInput] = useState({
    inputOne: "",
    inputTwo: "",
    operator: "",
  });

  function handleNumberClick(event) {
    const value = event.target.value;
    console.log(value);
  }

  function handleOperatorClick(event) {
    const value = event.target.value;
    console.log(value);
  }

  function handleAdditionalClick(event) {
    const value = event.target.value;
    console.log(value);
  }

  return <Context.Provider value={{ input }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
