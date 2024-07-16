import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";

type CounterPropsType = {
  count: number;
  maxValue: number;
  incrementCount: () => void;
  resetCount: () => void;
  error: string;
};

export const Counter = ({
  count,
  incrementCount,
  maxValue,
  resetCount,
  error,
}: CounterPropsType) => {
  return (
    <div className="counter">
      <Display count={count} maxValue={maxValue} error={error} />
      <div className="btn-block">
        <Button
          onClick={incrementCount}
          title="INC"
          disabled={count === maxValue || !!error}
        />
        <Button onClick={resetCount} title="RESET" />
      </div>
    </div>
  );
};
