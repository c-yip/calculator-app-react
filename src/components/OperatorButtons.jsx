import { useContext } from "react";
import { Context } from "../Context";

export default function OperatorButtons() {
  const { handleOperatorClick } = useContext(Context);

  return (
    <div className="op-buttons">
      <button className="btn" value={"/"} onClick={handleOperatorClick}>
        /
      </button>
      <button className="btn" value={"x"} onClick={handleOperatorClick}>
        X
      </button>
      <button className="btn" value={"-"} onClick={handleOperatorClick}>
        -
      </button>
      <button className="btn" value={"+"} onClick={handleOperatorClick}>
        +
      </button>
    </div>
  );
}
