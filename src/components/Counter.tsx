import { useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";

export const Counter = () => {
  const minCount = 0;
  const maxCount = 5;
  const stepCount = 1;

  const [count, setCount] = useState(0);

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
      <Display count={count} />
      <div className="btn-block">
        <Button
          onClick={onClickInc}
          title="INC"
          disabled={count === maxCount}
        />
        <Button
          onClick={onClickReset}
          title="RESET"
          disabled={count !== maxCount}
        />
      </div>
    </div>
  );
};
