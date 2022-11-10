import "./App.css";
import Display from "./components/Display";
import NumberButtons from "./components/NumberButtons";
import OperatorButtons from "./components/OperatorButtons";
import AdditionalButtons from "./components/AdditionalButtons";

function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div className="calculator">
        <Display />
        <div className="buttons-container">
          <NumberButtons />

          <OperatorButtons />

          <AdditionalButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
