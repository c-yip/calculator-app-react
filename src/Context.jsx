import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [input, setInput] = useState({
    inputNumberOne: "",
    inputNumberTwo: "",
    operator: "",
    operatorPressed: false,
  });

  function handleNumberClick(event) {
    const value = event.target.value;
    if (input.operatorPressed == false) {
      setInput((prevState) => ({
        ...prevState,
        inputNumberOne: prevState.inputNumberOne + value,
      }));
    } else {
      setInput((prevState) => ({
        ...prevState,
        inputNumberTwo: prevState.inputNumberTwo + value,
      }));
    }

    if (input.operator !== "") {
      setInput((prevState) => ({
        ...prevState,
        inputNumberTwo: prevState.inputNumberTwo + value,
      }));
    }
  }

  function handleOperatorClick(event) {
    const value = event.target.value;
    setInput((prevState) => ({
      ...prevState,
      operatorPressed: true,
      operator: value,
    }));
  }

  function handleAdditionalClick(event) {
    const value = event.target.value;
    console.log(value);
  }

  console.log("Context.js:", input);

  return (
    <Context.Provider value={{ input, handleNumberClick, handleOperatorClick }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
