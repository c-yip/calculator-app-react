import { useContext } from "react";
import { Context } from "../Context";

export default function NumberButtons() {
  const { handleNumberClick, handleCalculation } = useContext(Context);

  return (
    <div className="num-buttons">
      <button className="btn" value={7} onClick={handleNumberClick}>
        7
      </button>
      <button className="btn" value={8} onClick={handleNumberClick}>
        8
      </button>
      <button className="btn" value={9} onClick={handleNumberClick}>
        9
      </button>
      <button className="btn" value={4} onClick={handleNumberClick}>
        4
      </button>
      <button className="btn" value={5} onClick={handleNumberClick}>
        5
      </button>
      <button className="btn" value={6} onClick={handleNumberClick}>
        6
      </button>
      <button className="btn" value={1} onClick={handleNumberClick}>
        1
      </button>
      <button className="btn" value={2} onClick={handleNumberClick}>
        2
      </button>
      <button className="btn" value={3} onClick={handleNumberClick}>
        3
      </button>
      <button className="btn" value={0} onClick={handleNumberClick}>
        0
      </button>
      <button className="btn" value={"."} onClick={handleNumberClick}>
        .
      </button>
      <button className="btn" value={"="} onClick={handleCalculation}>
        =
      </button>
    </div>
  );
}
