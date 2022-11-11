import React, { useContext } from "react";
import { Context } from "../Context";

export default function Display() {
  const { equation } = useContext(Context);

  return (
    <div className="display">
      <h2 className="display-input">
        {equation.displayResult ? equation.result.toFixed(3) : equation.string}
      </h2>
      <h3 className="display-sub-input">
        {!equation.displayResult && equation.result}
      </h3>
    </div>
  );
}
