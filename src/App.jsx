import "./App.css";
import Display from "./components/Display";
import AllButtons from "./components/AllButtons";

function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div className="calculator">
        <Display />
        <div className="buttons-container">
          <AllButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
