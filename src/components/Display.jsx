import React, { useContext } from "react";
import { Context } from "../Context";

export default function Display() {
  const { input } = useContext(Context);

  return (
    <div className="display">
      <h2 className="display-input">{`${input.inputNumberOne} ${input.operator} ${input.inputNumberTwo}`}</h2>
    </div>
  );
}
