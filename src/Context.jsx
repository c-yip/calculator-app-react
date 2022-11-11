import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  // state that stores user inputs, stores an equation, and stores the result
  const [data, setData] = useState({
    input: [],
    operatorPressed: false,
  });

  const [equation, setEquation] = useState({
    string: "",
    result: "",
    decimalUsed: false,
    displayResult: false,
  });

  // use Function() constructor to evaluate equation
  function calc(string) {
    return new Function("return " + string)();
  }

  // prevent app from crashing on syntax error
  function tryCalc(string) {
    try {
      return calc(string);
    } catch (error) {
      console.log(error);
    }
  }

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

    setEquation((prev) => {
      return {
        ...prev,
        // calculates the result of the equation
        result: tryCalc(prev.string),
      };
    });

    // prevents multiple decimal points from being used in a single number
    if (data.input[data.input.length - 1] === "." && !data.operatorPressed) {
      setEquation((prev) => {
        return {
          ...prev,
          decimalUsed: true,
        };
      });
    }
  }, [data]);

  // onClick formula stores input in data.input
  const onClick = (e) => {
    const value = e.target.value;

    // prevents multiple decimals from being used
    if (equation.decimalUsed && value === ".") {
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
    } else {
      setData((prev) => {
        return {
          ...prev,
          input: [...prev.input, value],
          operatorPressed: true,
        };
      });
      setEquation((prev) => {
        return {
          ...prev,
          decimalUsed: false,
        };
      });
    }
  };

  const onClickEqual = () => {
    setEquation((prev) => {
      return {
        ...prev,
        displayResult: true,
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
