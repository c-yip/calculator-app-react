import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div className="calculator">
        <div className="display">Display</div>
        <div className="buttons-container">
          <div className="num-buttons">
            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">0</button>
            <button className="btn">.</button>
            <button className="btn">=</button>
          </div>

          <div className="op-buttons">
            <button className="btn">/</button>
            <button className="btn">X</button>
            <button className="btn">-</button>
            <button className="btn">+</button>
          </div>

          <div className="additional-buttons">
            <button className="btn">AC</button>
            <button className="btn">+/-</button>
            <button className="btn">%</button>
            <button className="btn">^</button>
            <button className="btn">(</button>
            <button className="btn">)</button>
            <button className="btn">DEL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
