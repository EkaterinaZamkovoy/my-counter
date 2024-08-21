import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";

type CounterPropsType = {
  count: number;
  maxValue: number;
  incrementCount: () => void;
  resetCount: () => void;
  error: string;
  message: boolean;
};

export const Counter = ({
  count,
  incrementCount,
  maxValue,
  resetCount,
  error,
  message,
}: CounterPropsType) => {
  return (
    <div className="counter">
      <Display
        message={message}
        count={count}
        maxValue={maxValue}
        error={error}
      />
      <div className="btn-block">
        <Button
          onClick={incrementCount}
          title="INC"
          disabled={count === maxValue || !!error || message}
        />
        <Button
          onClick={resetCount}
          title="RESET"
          disabled={!!error || message}
        />
      </div>
    </div>
  );
};
