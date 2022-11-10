import { useState } from "react";
import "./App.css";

function App() {
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

  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div className="calculator">
        <div className="display">
          <h2 className="display-input">{`${input.inputOne} ${input.operator} ${input.inputTwo}`}</h2>
        </div>
        <div className="buttons-container">
          <div className="num-buttons">
            <button className="btn" value={7}>
              7
            </button>
            <button className="btn" value={8}>
              8
            </button>
            <button className="btn" value={9}>
              9
            </button>
            <button className="btn" value={4}>
              4
            </button>
            <button className="btn" value={5}>
              5
            </button>
            <button className="btn" value={6}>
              6
            </button>
            <button className="btn" value={1}>
              1
            </button>
            <button className="btn" value={2}>
              2
            </button>
            <button className="btn" value={3}>
              3
            </button>
            <button className="btn" value={0}>
              0
            </button>
            <button className="btn" value={"."}>
              .
            </button>
            <button className="btn" value={"="}>
              =
            </button>
          </div>

          <div className="op-buttons">
            <button className="btn" value={"/"}>
              /
            </button>
            <button className="btn" value={"x"}>
              X
            </button>
            <button className="btn" value={"-"}>
              -
            </button>
            <button className="btn" value={"+"}>
              +
            </button>
          </div>

          <div className="additional-buttons">
            <button className="btn" value={"ac"}>
              AC
            </button>
            <button className="btn" value={"+/-"}>
              +/-
            </button>
            <button className="btn" value={"%"}>
              %
            </button>
            <button className="btn" value={"^"}>
              ^
            </button>
            <button className="btn" value={"("}>
              (
            </button>
            <button className="btn" value={")"}>
              )
            </button>
            <button className="btn" value={"del"}>
              DEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
