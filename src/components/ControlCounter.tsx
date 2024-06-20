import { ChangeEvent, useState } from "react";
import { Button } from "./Button";

type controlCounterPropsType = {
  onSetValues: (start: number, max: number) => void;
};

export const ControlCounter = ({ onSetValues }: controlCounterPropsType) => {
  const [startValue, setStartValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [error, setError] = useState("");

  return (
    <div className="controlCounter + counter">
      <div className="display + controlDisplay">
        <div className="titleBlock">
          <span>max value: </span>
          <span>start value:</span>
        </div>
        <div className="inputBlock">
          <input type="number" value={maxValue} onChange={() => {}} />
          <input type="number" value={startValue} onChange={() => {}} />
        </div>
      </div>
      <Button title={"set"} onClick={() => {}} />
    </div>
  );
};
