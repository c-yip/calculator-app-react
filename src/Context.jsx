import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  // state that stores user inputs, stores an equation, and stores the result
  const [data, setData] = useState({
    input: [],
    display: "",
    equation: "",
    result: "",
    operatorPressed: false,
    decimalUsed: false,
  });

  const [equation, setEquation] = useState({
    string: "",
    result: "",
  });

  useEffect(() => {
    if (data.input.length > 0) {
      setEquation((prev) => {
        return {
          ...prev,
          // joins input array into a string for use of display and for calculation
          string: data.input.join(""),
        };
      });
    }
  }, [data]);

  // onClick formula stores input in data.input
  const onClick = (e) => {
    const value = e.target.value;

    // prevents multiple decimals from being used
    if (value === ".") {
      setData((prev) => {
        return {
          ...prev,
          decimalUsed: true,
        };
      });
    }

    if (data.decimalUsed && value === ".") {
      return;
    }

    // prevents multiple operators from being used

    if (data.operatorPressed) {
      setData({
        ...data,
        operatorPressed: false,
      });
    }

    setData((prev) => {
      return {
        ...prev,
        input: [...prev.input, value],
      };
    });
  };

  // onClick operator stores operator in data.input and changes operatorPressed to true
  // and decimalUsed to false
  const onClickOperator = (e) => {
    const value = e.target.value;
    if (data.operatorPressed) {
      return;
    }

    setData((prev) => {
      return {
        ...prev,
        input: [...prev.input, value],
        operatorPressed: true,
        decimalUsed: false,
      };
    });
  };

  // use Function() constructor to evaluate equation
  function calc(string) {
    return new Function("return " + string)();
  }

  const onClickEqual = () => {
    // if the last character in the equation is an operator, remove it
    if (data.operator) {
      setData((prev) => {
        return {
          ...prev,
          input: prev.input.slice(0, -1),
        };
      });
    }

    // if the last character in the equation is a decimal, remove it
    if (data.decimalUsed) {
      setData((prev) => {
        return {
          ...prev,
          input: prev.input.slice(0, -1),
        };
      });
    }

    setEquation((prev) => {
      return {
        ...prev,
        result: calc(prev.string),
      };
    });
  };

  console.log("Context.js:", data, equation);

  return (
    <Context.Provider
      value={{
        onClick,
        onClickOperator,
        onClickEqual,
        equation,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
