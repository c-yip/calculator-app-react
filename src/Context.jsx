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

  const [error, setError] = useState(false);

  // use Function() constructor to evaluate equation
  function calc(string) {
    return new Function("return " + string)();
  }

  // prevent app from crashing on syntax error
  function tryCalc(string) {
    try {
      setError(false);
      return calc(string);
    } catch (error) {
      setError(true);
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

    if (equation.displayResult) {
      onClickClear();
    }

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
    if (
      (data.operatorPressed && value !== "-") ||
      data.input[data.input.length - 1] == "-"
    ) {
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
      return error
        ? {
            ...prev,
            displayResult: true,
            result: "Format Error",
          }
        : {
            ...prev,
            displayResult: true,
          };
    });
  };

  const onClickClear = () => {
    setData({
      input: [],
      operatorPressed: false,
    });
    setEquation({
      string: "",
      result: "",
      decimalUsed: false,
      displayResult: false,
    });
    setError(false);
  };

  const onClickDelete = () => {
    setData((prev) => {
      return {
        ...prev,
        input: prev.input.slice(0, -1),
      };
    });

    if (data.input[data.input.length - 1] === ".") {
      setEquation((prev) => {
        return {
          ...prev,
          decimalUsed: false,
        };
      });
    }

    if (
      data.input[data.input.length - 1] === "+" ||
      data.input[data.input.length - 1] === "-" ||
      data.input[data.input.length - 1] === "*" ||
      data.input[data.input.length - 1] === "/"
    ) {
      setData((prev) => {
        return {
          ...prev,
          operatorPressed: false,
        };
      });
    }

    data.input.length <= 1 && onClickClear();
  };

  console.log("Context.js:", data, equation, "error:", error);

  return (
    <Context.Provider
      value={{
        onClick,
        onClickOperator,
        onClickEqual,
        onClickClear,
        onClickDelete,
        equation,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
