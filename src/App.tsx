import "./App.css";
import { Counter } from "./components/Counter";
import { ControlCounter } from "./components/ControlCounter";
import { useState } from "react";

function App() {
  const [maxValue, setMaxValue] = useState<number>(6);
  const [startValue, setStartValue] = useState<number>(0);
  const [isSet, setIsSet] = useState<boolean>(false);

  return (
    <div className="App">
      <ControlCounter onSetValues={() => {}} />
      <Counter maxValue={maxValue} startValue={startValue} />
    </div>
  );
}

export default App;
