import "./App.css";
import { Counter } from "./components/Counter";
import { ControlCounter } from "./components/ControlCounter";
import { ChangeEvent, useEffect, useState } from "react";

function App() {
  const [startValue, setStartValue] = useState<number>(0);
  const [count, setCount] = useState<number>(startValue);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<boolean>(false);
  const [isSetDisabled, setIsSetDisabled] = useState<boolean>(true);

  //---

  const stepCount = 1;

  const incrementCount = () => {
    if (count < maxValue) {
      setCount(count + stepCount);
      localStorage.setItem("count", JSON.stringify(count + stepCount));
    }
  };

  const resetCount = () => {
    setCount(startValue);
  };

  //---

  useEffect(() => {
    if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {
      setError("Incorrect value!");
    } else {
      setError("");
    }
  }, [startValue, maxValue]);

  //---

  const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
    setMessage(true);
    setIsSetDisabled(false);
  };

  const handleStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(+e.currentTarget.value);
    setMessage(true);
    setIsSetDisabled(false);
  };

  //---

  const setToLocalStorageHandler = () => {
    if (!error) {
      localStorage.setItem("startValue", JSON.stringify(startValue));
      localStorage.setItem("maxValue", JSON.stringify(maxValue));
      setCount(startValue);
      setMessage(false);
      setIsSetDisabled(true);
    }
  };

  useEffect(() => {
    const startValueFromLocalStorage = localStorage.getItem("startValue");
    const maxValueFromLocalStorage = localStorage.getItem("maxValue");

    if (startValueFromLocalStorage && maxValueFromLocalStorage) {
      setStartValue(+startValueFromLocalStorage);
      setMaxValue(+maxValueFromLocalStorage);
      setCount(+startValueFromLocalStorage);
    }
  }, []);

  return (
    <div className="App">
      <ControlCounter
        handleSubmit={() => {}}
        handleMaxValueChange={handleMaxValueChange}
        handleStartValueChange={handleStartValueChange}
        setToLocalStorageHandler={setToLocalStorageHandler}
        startValue={startValue}
        maxValue={maxValue}
        error={error}
        isSetDisabled={isSetDisabled}
      />
      <Counter
        message={message}
        error={error}
        maxValue={maxValue}
        count={count}
        incrementCount={incrementCount}
        resetCount={resetCount}
      />
    </div>
  );
}

export default App;
