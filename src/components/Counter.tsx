import { useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";

type CounterPropsType = {
  startValue: number;
  maxValue: number;
};

export const Counter = ({ startValue, maxValue }: CounterPropsType) => {
  const minCount = startValue;
  const maxCount = maxValue;
  const stepCount = 1;

  const [count, setCount] = useState<number>(startValue);

  const onClickInc = () => {
    if (count < maxCount) {
      return setCount(count + stepCount);
    }
  };

  const onClickReset = () => {
    setCount(minCount);
  };

  return (
    <div className="counter">
      <Display count={count} maxValue={maxValue} startValue={startValue} />
      <div className="btn-block">
        <Button
          onClick={onClickInc}
          title="INC"
          disabled={count === maxCount}
        />
        <Button onClick={onClickReset} title="RESET" />
      </div>
    </div>
  );
};
