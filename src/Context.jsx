import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [input, setInput] = useState({
    inputNumberOne: "",
    inputNumberTwo: "",
    operator: "",
    operatorPressed: false,
  });

  useEffect(() => {
    if (input.operator !== "" && input.operatorPressed === false) {
      setInput((prevState) => ({
        ...prevState,
        operatorPressed: true,
      }));
    }
  }, [input]);

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
        operatorPressed: false,
      }));
    }
  }

  function handleOperatorClick(event) {
    const value = event.target.value;
    setInput((prevState) => ({
      ...prevState,
      operator: value,
    }));
  }

  function handleCalculation() {
    let result;
    switch (input.operator) {
      case "":
        return;
      case "+":
        result = input.inputNumberOne + input.inputNumberTwo;
        break;
      case "-":
        result = input.inputNumberOne - input.inputNumberTwo;
        break;
      case "x":
        result = input.inputNumberOne * input.inputNumberTwo;
        break;
      case "/":
        result = input.inputNumberOne / input.inputNumberTwo;
        break;
      case "^":
        result = input.inputNumberOne ** input.inputNumberTwo;
        break;
      default:
        break;
    }
    setInput((prevState) => ({
      ...prevState,
      inputNumberOne: result,
      inputNumberTwo: "",
      operator: "",
      operatorPressed: false,
    }));
  }

  function handleAdditionalClick(event) {
    const value = event.target.value;
    console.log(value);
  }

  console.log("Context.js:", input);

  return (
    <Context.Provider
      value={{
        input,
        handleNumberClick,
        handleOperatorClick,
        handleCalculation,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
